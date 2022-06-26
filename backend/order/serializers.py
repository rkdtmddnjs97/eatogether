from rest_framework import serializers
from .models import *

class OrderSerializers(serializers.Modelserializer):
    class Meta:
        model