"""
URL configuration for servidor project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from api.router import router
from django.conf.urls.static import static
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('get/products/', views.get_products, name="Traer productos"),
    path('get/product/id/<int:id>/', views.get_product_id),
    path('get/services/', views.get_services),
    path('get/orders/', views.get_orders),
    path('get/orders/user/<int:id>/', views.get_orders_user),
    path('get/order/id/<int:id>/', views.get_order_id),
    path('delete/img/<int:id>/<str:modelo>/', views.eliminar_imagen, name="Eliminar cualquier imagen"),
    path('get/token/<str:rol>/', views.generar_token),
    path('send/email/<str:tipo>/', views.crear_usuario),
    path('get/info/user/<int:id>/', views.get_info_user),
    path('send/contact/', views.enviar_correo_contacto)
]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)