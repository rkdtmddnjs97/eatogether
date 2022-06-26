from ntpath import join
from tkinter import CASCADE
from django.db import models
from account.models import User

class JoinOrder(models.Model):
    order=models.ForeignKey(Order, on_delete=models.CASCADE,related_name='orders')
    description=models.CharField('요청사항',max_length=128, null=True, blank=True)
    total_cost=models.IntegerField()
    menu=models.charField('메뉴',max_length=100, null=False, blank=False, unique=False)
    follower=models.ForeignKey(User, on_delete=models.CASCADE,related_name='followers')
    
class Menu(models.Model):
    joinorder_menu=models.ForeignKey(JoinOrder,on_delete=CASCADE,related_name='joinorder_menus')
    add_menu=models.CharField(max_length=100, null=False,blank=False,unique=False)
    cost=models.IntegerField()
  
    
class Comment(models.Model):
    order_user=models.ForeignKey(Order,on_delete=models.CASCADE, related_name="order_users")
    joinorder_user=models.ForeignKey(JoinOrder,on_delete=models.CASCADE, related_name="joinorder_users")
    body=models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)

class Order(models.Model):
    brand=models.charField('브랜드',max_length=100,null=False, blank=False, unique=False)
    order_time=models.DateTimeField(auto_now_add = True)
    latitude=models.FloatField()
    longitude=models.FloatField()
    address=models.TextField()
    leader=models.ForeignKey(User, on_delete=models.CASCADE,related_name='leaders')
