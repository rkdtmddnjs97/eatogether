from crypt import methods
from turtle import st
from django.shortcuts import render,get_object_or_404,redirect
from rest_framework import viewsets
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *
from haversine import haversine, Unit
from django.db.models import Q


from django.contrib.auth import get_user_model

User = get_user_model()

from django.core.paginator import Paginator


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    @action(detail=True, methods=['post'])
    def set_password(self, request, pk=None):
        longitude = float(request.GET.get('longitude', None))
        latitude = float(request.GET.get('latitude', None))

        position = (latitude, longitude)

        #평방 200m 안에 있는 주문을 필터해줄 수 있는 조건
        condition = (
            Q(latitude__range=(latitude - 0.002, latitude + 0.002)) |
            Q(longitude__range=(longitude - 0.003, longitude + 0.003))
        )

        #모델에서 condition을 만족하는 주문들을 필터링 해온다.
        order_infos = (
            Order
            .objects
            .filter(condition)
        )

        #나의 현 위치와 각 주문을 비교해서 150m 이내 인 경우만 추가한다.
        near_order_infos = [info for info in order_infos
                            if haversine(position, (info.latitude, info.longitude), unit=Unit.METERS) <= 150]

        serialized_infos = self.get_serializer(near_order_infos, many=True)
        
        return Response(serialized_infos.data)



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



