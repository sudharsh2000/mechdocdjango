from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
# Create your models here.
class User(AbstractUser):
    
    mobile=models.CharField(null=False,max_length=10)
    role=models.CharField(max_length=20)
    profileimage=models.ImageField(upload_to='images/',blank=True,null=True)
class SellerProfile(models.Model):
    user=models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    acno=models.CharField(max_length=14)
    ifsc_code=models.CharField(max_length=15)
    Gst_num=models.CharField(max_length=13)
class Products(models.Model):
    productid=models.IntegerField(primary_key=True)
    productname=models.CharField(max_length=120,null=False)
    price=models.DecimalField(max_digits=10,decimal_places=2)
    image=models.ImageField(upload_to='images/')
