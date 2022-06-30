from rest_framework import serializers
from .models import *
from order.models import Order

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields='__all__'

class MypageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Mypage
        fields='__all__'

#class OrderlistSerializer(serializers.ModelSerializer):
 #   class Meta:
  #      model=Order
   #     fields=['id','order_time','latitude','longitude','address','leader','status']