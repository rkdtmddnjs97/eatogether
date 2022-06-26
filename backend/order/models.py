from django.db import models
from django.contrib.auth import get_user_model

User=get_user_model() #장고 프로젝트의 유저 모델 가져오는 함수


class Order(models.Model):
    STATUS_CHOICE=(
    ('ING', 'Progressing'),
    ('FIN', 'Finish'),
  )
    status=models.CharField(max_length=3, choices=STATUS_CHOICE)
    brand=models.CharField(max_length=100,null=False, blank=False, unique=False)
    order_time=models.DateTimeField(auto_now_add = True)
    latitude=models.FloatField()
    longitude=models.FloatField()
    address=models.TextField()
    leader=models.ForeignKey(User, on_delete=models.CASCADE,related_name='orders')
    created_at = models.DateTimeField(auto_now_add = True)

class JoinOrder(models.Model):
    order=models.ForeignKey(Order, on_delete=models.CASCADE,related_name='join_orders')
    description=models.CharField(max_length=128, null=True, blank=True)
    total_cost=models.IntegerField()
    menu=models.CharField(max_length=100, null=False, blank=False, unique=False)
    follower=models.ForeignKey(User, on_delete=models.CASCADE,related_name='join_orders')
    created_at = models.DateTimeField(auto_now_add = True)
    
class Menu(models.Model):
    join_order=models.ForeignKey(JoinOrder,on_delete=models.CASCADE,related_name='menus')
    add_menu=models.CharField(max_length=100, null=False,blank=False,unique=False)
    cost=models.IntegerField()
    created_at = models.DateTimeField(auto_now_add = True)
  
    
class Comment(models.Model):
    order_user=models.ForeignKey(Order,on_delete=models.CASCADE, related_name="comments")
    user=models.ForeignKey(User,on_delete=models.CASCADE, related_name="comments")
    body=models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)

