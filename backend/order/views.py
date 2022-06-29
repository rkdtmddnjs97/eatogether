# from crypt import methods
# from turtle import st
import  sys
#import reverse_geocode
from django.shortcuts import render,get_object_or_404,redirect
from rest_framework import viewsets
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *
from haversine import haversine, Unit
from django.db.models import Q
import json,requests


from django.contrib.auth import get_user_model

User = get_user_model()

from django.core.paginator import Paginator


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    @action(detail=True, methods=['post'])
    def distanceCount(self, request, pk=None):
        longitude = float(request.GET.get('longitude', None))
        latitude = float(request.GET.get('latitude', None))

        position = (latitude, longitude)

        #평방 200m 안에 있는 주문을 필터해줄 수 있는 조건
        condition = (
            Q(latitude__range=(latitude - 0.002, latitude + 0.002)) |
            Q(longitude__range=(longitude - 0.003, longitude + 0.003))
        )

        #모델에서 condition을 만족하는 주문들을 필터링 해온다.
        order = Order.objects.get(id=request.data['order_id'])
        order_infos = (
            order.filter(status='FIN').filter(condition)
        )

        #나의 현 위치와 각 주문을 비교해서 150m 이내 인 경우만 추가한다.
        near_order_infos = [info for info in order_infos
                            if haversine(position, (info.latitude, info.longitude), unit=Unit.METERS) <= 150]

        #many=True인자로 리스트를 serialize한다.
        serialized_infos = self.get_serializer(near_order_infos, many=True)
        
        return Response(serialized_infos.data)

    #def current_location():
     #   here_req = requests.get("http://www.geoplugin.net/json.gp")
      #  if (here_req.status_code != 200):
       #     print("현재좌표를 불러올 수 없음")
    #else:
     #   location = json.loads(here_req.text)
      #  crd = {"lat": str(location["geoplugin_latitude"]), "lng": str(location["geoplugin_longitude"])}

    #return crd
    

    #def addressCount(self, request, pk=None):
     #   order = Order.objects.get(id=request.data['order_id'])
      #  address=reverse_geocode.search(order.latitude,order.longitude)
       # order.save(update_fields=['address'])
        #serializer = OrderSerializer(order)
        #return Response(serializer.data)


    @action(detail=False, methods = ['GET'])
    def statusChange(self,request,pk=None):
        order = Order.objects.get(id=request.data['order_id'])
        if order.join_orders.filter(money_status='FIN').filter(delivery_status='FIN').exists():
            order.status='FIN'
        order.save(update_fields=['status'])
        serializer = OrderSerializer(order)
        return Response(serializer.data)


class MenuViewSet(viewsets.ModelViewSet):
    queryset=Menu.objects.all()
    serializer_class=MenuSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset=Comment.objects.all()
    serializer_class=CommentSerializer

    @action(detail=False, methods = ['POST'])
    def postComment(self,request,pk=None):
        order = Order.objects.get(id=request.data['order_id'])
        if order.status == 'ING':
            new_comment = Comment(
                order_user = order,
                user = User.objects.get(id = request.data['user_id']),
                body = request.data['body']
            )
            new_comment.save()
            serializer = CommentSerializer(new_comment)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)

class JoinOrderViewSet(viewsets.ModelViewSet):
    queryset=JoinOrder.objects.all()
    serializer_class= JoinOrderSerializer

    



    #def list(self, request, *args, **kwargs):
       # queryset = self.filter_queryset(self.get_queryset())

        #page = self.paginate_queryset(queryset)
        #if page is not None:
         #   serializer = OrderStatusSerializer(page, many=True)
          #  return self.get_paginated_response(serializer.data)

       # serializer =OrderStatusSerializer(queryset, many=True)
       # return Response(serializer.data)
    
   
        


        



