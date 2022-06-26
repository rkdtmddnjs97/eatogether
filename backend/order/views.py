from django.shortcuts import render,get_object_or_404,redirect
from rest_framework import viewsets
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework import status
from .models import Order
from .serializers import *

from django.core.paginator import Paginator

class OrderViewSet(viewsets.ModelViewSet):
    queryset=Order.objects.all()
    serializer_class=OrderSerializer


