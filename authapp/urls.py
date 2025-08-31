"""
URL configuration for mechdocdjango project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from authapp import views
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter
apirouter=DefaultRouter()
apirouter.register('signup',views.signup,basename='signup')
apirouter.register('products',views.Products,basename='products')
apirouter.register('allusers',views.Allusers,basename='allusers')
apirouter.register('userbyid',views.UsersViewSet,basename='userbyid')
urlpatterns = [
    

path('',views.home,name='home'),
path('api/token/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
path('api/refresh/',views.RefreshTokenView.as_view(),name='token_refresh'),
path('login/',views.Loginview.as_view(),name='login'),
path('logout/',views.LogoutView.as_view(),name='logout'),
path('api/',include(apirouter.urls)),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
