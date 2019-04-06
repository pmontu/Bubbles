from dynamic_rest.serializers import DynamicModelSerializer
from dynamic_rest.fields import DynamicRelationField
from .models import Customer, WaterCan
from django.contrib.auth.models import User


class UserSerializer(DynamicModelSerializer):
    water_cans_delivered = DynamicRelationField('WaterCanSerializer', many=True)

    class Meta:
        model = User
        name = 'user'
        fields = ("id", "username", "password", "first_name", "water_cans_delivered",)
        read_only_fields = ("water_cans_delivered",)
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class CustomerSerializer(DynamicModelSerializer):
    class Meta:
        model = Customer
        name = "customer"
        fields = "__all__"


class WaterCanSerializer(DynamicModelSerializer):
    class Meta:
        model = WaterCan
        name = "water_can"
        fields = "__all__"
        read_only_fields = ("deliverd_by",)
    
    delivered_to = DynamicRelationField('CustomerSerializer')