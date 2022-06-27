from crypt import methods
from turtle import st
from django.shortcuts import render,get_object_or_404,redirect
from rest_framework import viewsets
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

from django.contrib.auth import get_user_model

User = get_user_model()

from django.core.paginator import Paginator

class OrderViewSet(viewsets.ModelViewSet):
    queryset=Order.objects.all()
    serializer_class=OrderSerializer

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




