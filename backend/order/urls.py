from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *

router=DefaultRouter()
router.register('order',OrderViewSet)
router.register('menu',MenuViewSet)
router.register('comment',CommentViewSet)

urlpatterns = [
    path('',include(router.urls))
]