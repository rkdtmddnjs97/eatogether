from rest_framework import serializers
from .models import *


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Order
        fields=['id','brand','order_time','latitude','longitude','address','leader','status']


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model=Menu
        fields='__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comment
        fields='__all__'

class JoinOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=JoinOrder
        fields=['id','order','description','total_cost','menu','follower']

#class OrderStatusSerializer(serializers.ModelSerializer):
 #   class Meta:
  #      model=Order
   #     fields=['status']

