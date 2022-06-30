from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *
from django.conf import settings
from django.conf.urls.static import static

router=DefaultRouter()
router.register('review',ReviewViewSet)
router.register('mypage',MypageViewSet)

urlpatterns = [
    path('',include(router.urls))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)