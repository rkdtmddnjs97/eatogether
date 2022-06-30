from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *

router=DefaultRouter()
router.register('review',ReviewViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('get_my_info/',get_my_info)
]