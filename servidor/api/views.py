import json
import os
from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializador import ProductoSerializer, CategoriaSerializer, UsuarioSerializer, PedidoSerializer, ServicioSerializer
from .models import Producto, Categoria, Usuario, Pedido, Servicio
from django.views.decorators.csrf import csrf_exempt
import jwt

#------------------Parte James\/ ---------------------------------------------------

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

#------------------Parte James /\ ---------------------------------------------------

#------------------Parte James\/ ---------------------------------------------------


class ProductosViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

    @action(detail=False)
    def by_Categoria(self, request):#filtro de datos personalisados
        categoria = self.request.query_params.get('categoria', None)
        productos = Producto.objects.filter(Categoria=categoria)
        serializer = ProductoSerializer(productos, many=True)
        return Response(serializer.data)

class CategoriasViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
#------------------Parte James /\ ---------------------------------------------------



class ProductoViewset(ModelViewSet):

    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class CategoriaViewset(ModelViewSet):

    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class UsuarioViewset(ModelViewSet):

    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class PedidoViewset(ModelViewSet):

    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer

class ServicioViewset(ModelViewSet):

    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer

def get_products(request):

    productos = Producto.objects.all()

    lista_productos = []

    for i in productos:

        lista_productos.append({

            "id": i.id,
            "nombre": i.nombre,
            "categoria": i.categoria.nombre,
            "imagen": "http://127.0.0.1:8000/media/" + i.imagen.name,
            "descripcion": i.descripcion,
            "cantidad": i.cantidad,
            "precio": i.precio

        })

    return JsonResponse({"productos": lista_productos})

clave = "E4f91Al1fp12"

def eliminar_imagen(request, id, modelo):

    registro = ""
    ruta_imagen = ""

    if(modelo == "Producto"):

        registro = Producto.objects.get(id = id)
        ruta_imagen = registro.imagen.name.split("/")

    elif (modelo == "Servicio"):

        registro = Servicio.objects.get(id = id)
        ruta_imagen = registro.imagen.name.split("/")

    else:

        registro = Usuario.objects.get(id = id)
        ruta_imagen = registro.foto.name.split("/")

    img = os.path.join(settings.MEDIA_ROOT, ruta_imagen[0], ruta_imagen[1])

    os.remove(img)

    return HttpResponse("Imagen Eliminada")

@csrf_exempt
def generar_token(request):

    informacionUsuario = json.loads(request.body)
    usuarios = Usuario.objects.filter(rol = "Administrador")

    token = ""

    for i in usuarios:

        if i.usuario == informacionUsuario["usuario"] and i.contraseña == informacionUsuario["password"]:

            payload = {

                "id": i.id

            }
            
            token = jwt.encode(payload, clave, algorithm='HS256')
            break

    return JsonResponse({"token": token})

    
            



