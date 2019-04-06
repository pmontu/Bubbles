from dynamic_rest.routers import DynamicRouter
from .views import UserViewSet, WaterCanViewSet, CustomerViewSet
from django.conf.urls import url, include


# The Router
router = DynamicRouter()
router.register('users', UserViewSet)
router.register('water-cans', WaterCanViewSet)
router.register('customers', CustomerViewSet)

urlpatterns = [
    url(r'^', include(router.urls))
]