from rest_framework.routers import DefaultRouter
from .views import ProductoViewset, CategoriaViewset, UsuarioViewset, PedidoViewset, ServicioViewset

router = DefaultRouter()

router.register(prefix='Producto', basename='Producto', viewset=ProductoViewset)
router.register(prefix='Categoria', basename='Categoria', viewset=CategoriaViewset)
router.register(prefix='Usuario', basename='Usuario', viewset=UsuarioViewset)
router.register(prefix='Pedido', basename='Pedido', viewset=PedidoViewset)
router.register(prefix='Servicio', basename='Servicio', viewset=ServicioViewset)