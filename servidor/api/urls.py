#------------------Parte James /\ ---------------------------------------------------
from django.urls import path
from .views import CategoriasViewSet, ProductosViewSet
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register('Productos', ProductosViewSet, basename='Productos')
router.register('Categoria', CategoriasViewSet, basename='Categoria')
# urlpatterns = [
#     path('agregar-producto-al-carrito/', views.agregar_producto_al_carrito, name='agregar_producto_al_carrito'),
# ] 


urlpatterns = router.urls 


#------------------Parte James\/ ---------------------------------------------------