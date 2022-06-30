from django.db import models
from django.contrib.auth import get_user_model
from order.models import JoinOrder,Order

User=get_user_model()
#마이페이지 사진 추가, 주문 내역, review(역참조)

class Review(models.Model):
    reviewed = models.ForeignKey(JoinOrder, on_delete=models.CASCADE, related_name= 'revieweds' )
    reviewer = models.ForeignKey(JoinOrder, on_delete=models.CASCADE, related_name= 'reviewers' )
    reliability = models.IntegerField()
    body = models.TextField()
    available=models.ForeignKey(Order, on_delete=models.CASCADE, related_name= 'reviews',null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add = True)

class Mypage(models.Model):
    name=models.TextField(default="User")
    profile= models.ImageField(default='media/image.png')
    review=models.ForeignKey(Review, on_delete=models.CASCADE, related_name= 'reviews',null=True, blank=True)
    order_list=models.ForeignKey(Order, on_delete=models.CASCADE, related_name= 'order_lists',null=True, blank=True)


 

    


