from django.db import models
from django.contrib.auth import get_user_model
from order.models import JoinOrder,Order

User=get_user_model()


class Review(models.Model):
    reviewed = models.ForeignKey(JoinOrder, on_delete=models.CASCADE, related_name= 'revieweds' )
    reviewer = models.ForeignKey(JoinOrder, on_delete=models.CASCADE, related_name= 'reviewers' )
    reliability = models.IntegerField()
    body = models.TextField()
    available=models.ForeignKey(Order, on_delete=models.CASCADE, related_name= 'reviews',null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add = True) 
    

