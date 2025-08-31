from http.client import responses

from django.contrib.auth import authenticate
from django.db.models import Q
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.template.context_processors import request
from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, BasePermission
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenRefreshView
from authapp.models import Products,User
from rest_framework.viewsets import ModelViewSet
from .serializers import UserSerializer,ProductSerializer
# Create your views here.

def home(request):
    return HttpResponse("Home")
class customAdmin(BasePermission):
     def has_permission(self,request,*args,**kwargs):
         return request.user.is_authenticated and request.user.role == 'admin'


class Allusers(viewsets.ModelViewSet):
    permission_classes = [customAdmin]

    serializer_class = UserSerializer
    def get_queryset(self):
        queryset = User.objects.filter(role='user')
        uname=self.request.GET.get('uname')
        if uname is not None:
            queryset = queryset.filter(Q(username__contains=uname,role='user'))
        return queryset
class UsersViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    def get_queryset(self):
        queryset=User.objects.all()
        uname=self.request.GET.get('uname')
        uid = self.request.GET.get('uid')
        if uname is not None:
            queryset = User.objects.filter(username__contains=uname)
        if uid is not None:
            queryset = User.objects.filter(id=uid)
        return queryset


class Products(ModelViewSet):
    permission_classes=[IsAuthenticated]
    
    serializer_class=ProductSerializer
    queryset=Products.objects.all()


class signup(ModelViewSet):
    serializer_class=UserSerializer
    queryset=User.objects.all()
    
class Loginview(APIView):
    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        role = request.data.get('role')
        user=authenticate(username=username,password=password)
        if user is  None:
            return Response({'error':'Invalid username or password'},status=status.HTTP_401_UNAUTHORIZED)
        if user.role!=role:
            return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)

        refresh = RefreshToken.for_user(user)
        refresh['username'] = user.username
        refresh['role'] = user.role
        response = Response({
            'accesstoken': str(refresh.access_token),
        }, status=status.HTTP_200_OK)

        # 🔹 Refresh token safe HttpOnly Cookie il store cheyyuka
        response.set_cookie(
            key="refresh_token",
            value=str(refresh),
            httponly=True,
            secure=False,  # Local il False aakki use cheyyam, prod il True
            samesite="Lax",
            max_age=24*60*60,
        )
        return response
class RefreshTokenView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        refresh = request.COOKIES.get('refresh_token')
        if refresh is None:
            return  Response({'error':'Invalid refresh_token'},status=status.HTTP_403_FORBIDDEN)
        refreshvval=RefreshToken(refresh)
        newaccess_token=str(refreshvval.access_token)
        return Response({'accesstoken':newaccess_token})
class LogoutView(APIView):
    def post(self, request):
        try:
            refresh_token = request.COOKIES.get('refresh_token')
            if refresh_token:
                token = RefreshToken(refresh_token)
                token.blacklist()  # only if blacklist enabled
        except Exception:
            pass

        response = Response({"message": "Logout successful"}, status=200)
        # expire refresh cookie
        response.delete_cookie(
            'refresh_token',
              # 🔹 local test, prod il True
            path='/'
        )

        return response
