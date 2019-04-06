from django.db import models
from django.contrib.auth.models import User


class Customer(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    phone = models.CharField(max_length=10)
    alias = models.CharField(max_length=30)
    address = models.TextField(null=True, blank=True)

class WaterCan(models.Model):
    quantity = models.PositiveSmallIntegerField()
    cost = models.PositiveSmallIntegerField()
    balance = models.SmallIntegerField()
    date = models.DateField(auto_now_add=True)
    deliverd_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="water_cans_delivered")
    delivered_to = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name="water_cans")
