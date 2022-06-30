from django.shortcuts import render,get_object_or_404,redirect
from rest_framework import viewsets
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *
from order.models import *


from django.core.paginator import Paginator

class ReviewViewSet(viewsets.ModelViewSet):
    queryset=Review.objects.all()
    serializer_class= ReviewSerializer

    @action(detail=False, methods = ['POST'])
    def postReview(self,request,pk=None):
        order = Order.objects.get(id=request.data['order_id'])
        join_order1=JoinOrder.objects.get(id=request.data['joinorder_id'])
        join_order2=JoinOrder.objects.get(id=request.data['joinorder_id'])
        if join_order1.id==join_order2.id and order.status == 'FIN':
            new_Review = Review(
                reviewer = join_order1,
                reviewed = join_order2,
                reliability = request.data['reliability'],
                body = request.data['body'],
                available=order
            )
            new_Review.save()
            serializer = ReviewSerializer(new_Review)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)

    
class MypageViewSet(viewsets.ModelViewSet):
    queryset=Mypage.objects.all()
    serializer_class=MypageSerializer


    #def list(self, request, *args, **kwargs):
     #   queryset = self.filter_queryset(self.get_queryset())
#
 #       page = self.paginate_queryset(queryset)
  #      if page is not None:
   #         serializer = OrderlistSerializer(page, many=True)
    #        return self.get_paginated_response(serializer.data)

     #   serializer =OrderlistSerializer(queryset, many=True)
      #  return Response(serializer.data)


            
            
    

    
