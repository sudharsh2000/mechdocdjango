from rest_framework import serializers
from django.contrib.auth.models import User

from authapp.models import User ,Products

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','password','mobile','role','profileimage']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = User(**validated_data)
        if password:
            user.set_password(password)
        user.save()
        return user

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields='__all__'