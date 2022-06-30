from dataclasses import field
from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model
from order.models import Order

User = get_user_model()

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields='__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email']

class MypageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Mypage
        fields='__all__'