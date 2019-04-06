from dynamic_rest.viewsets import DynamicModelViewSet
from .models import Customer, WaterCan
from django.contrib.auth.models import User
from .serializers import UserSerializer, WaterCanSerializer, CustomerSerializer
from rest_framework.permissions import IsAuthenticated

class UserViewSet(DynamicModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class WaterCanViewSet(DynamicModelViewSet):
    serializer_class = WaterCanSerializer
    queryset = WaterCan.objects.all()
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(deliverd_by=self.request.user)


class CustomerViewSet(DynamicModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()
    permission_classes = (IsAuthenticated,)