from django.db import models
from django.contrib.auth import get_user_model
import requests,json

User=get_user_model() #장고 프로젝트의 유저 모델 가져오는 함수


class Order(models.Model):

    def c_l(self):
        here_req = requests.get("http://www.geoplugin.net/json.gp")
        location = json.loads(here_req.text)
        crd = {"lat": str(location["geoplugin_latitude"]), "lng": str(location["geoplugin_longitude"])}
        return crd


    STATUS_CHOICE=( 
    ('COL','Collecting'), #팔로워 받을 때
    ('MC', 'MoneyCall'),#모든 follower에게 송금 요청
    ('ING', 'Deliverying'), #배민에서 배달 요청함->배달 중
    ('DC', 'DeliveryCompleted'), #요청한 장소로 배달 완료됨
    ('FIN', 'Finish'), #최종 끝난 주문 
  ) #보여줄 필요 없음
    status=models.CharField(max_length=3, choices=STATUS_CHOICE,default='COL')
    brand=models.CharField(max_length=100,null=False, blank=False, unique=False)
    order_time=models.DateTimeField()
    latitude=models.FloatField()
    longitude=models.FloatField()
    address=models.TextField()
    leader=models.ForeignKey(User, on_delete=models.CASCADE,related_name='orders')
    created_at = models.DateTimeField(auto_now_add = True)

class JoinOrder(models.Model):
    MONEY_STATUS=(
    ('ING', 'Progressing'),
    ('FIN', 'Finish'),
  ) #order 상태 MC가 되면 follower들의 money_status 활성화
    DELIVERY_STATUS=(
    ('ING', 'Progressing'),
    ('FIN', 'Finish'),
  )#order의 status가 DC가 된 이후 follower들의 delivery_status button 활성화
  # 모든 follower들의 Delivery_status가 fin되면 order의 status finish
    money_status=models.CharField(max_length=3, choices=MONEY_STATUS,default='ING')
    delivery_status=models.CharField(max_length=3, choices=DELIVERY_STATUS,default='ING')
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

