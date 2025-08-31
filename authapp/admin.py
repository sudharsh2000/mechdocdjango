from django.contrib import admin

from authapp.models import Products, User

# Register your models here.
admin.site.register(User)
admin.site.register(Products)