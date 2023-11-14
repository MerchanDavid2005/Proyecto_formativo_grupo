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
from django.core.mail import send_mail
import random
import locale

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

# ----------------------------------------- Clave token ------------------------

clave = "E4f91Al1fp12"

# ----------------------------------------- Clave token ------------------------

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

def get_product_id(request, id):

    producto = Producto.objects.get(id = id)

    datos_producto = {}

    datos_producto = {

        "id": producto.id,
        "nombre": producto.nombre,
        "categoria": producto.categoria.nombre,
        "imagen": "http://localhost:8000/media/" + producto.imagen.name,
        "descripcion": producto.descripcion,
        "cantidad": producto.cantidad,
        "precio": producto.precio

    }

    return JsonResponse(datos_producto)

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

@csrf_exempt
def crear_usuario(request, tipo):

    datos_usuario = json.loads(request.body)
    nombre_usuario = datos_usuario["usuario"]
    email_usuario = datos_usuario["email"]

    descripcion = ""
    receptor_correo = ""

    lista_caracteres = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
    codigo = ""

    caracteres = random.sample(lista_caracteres, k=6)

    for i in caracteres:

        codigo += i

    if(tipo == "Administrador"):

        descripcion = "el usuario {} con el correo {}, quiere registrarse como administrador, el siguiente codigo sera el ultimo paso para registrar al usuario".format(nombre_usuario, email_usuario)
        receptor_correo = settings.EMAIL_HOST_USER

    else:

        descripcion = "Este es el ultimo paso para estar completamente registrado en serviteca la estacion, solo necesitas copiar el siguiente codigo e ingresarlo en el campo correspondiente"
        receptor_correo = email_usuario

    asunto = 'Codigo de verificacion'
    mensaje = """

    <html>
        <body>
            <div style='padding:30px; height:300px; background:#eee; border-radius:30px'>

                <h1 style='text-align:center; font-size:45px;'> Nuevo usuario admin </h1> 
                <p style='font-size:15px; text-align:center;'> {} </p>
                <p style='text-align:center; font-weight:bold; font-size:40px;'> 
                    Codigo: <span> {} </span> 
                </p>

            </div>
        </body>
    <html>
    """.format(descripcion, codigo)
    emisor = settings.EMAIL_HOST_USER
    remitente = ["merchangonzalezjuandavid@gmail.com"]

    send_mail(
        asunto, 
        '', 
        emisor,
        remitente,
        html_message=mensaje
    )

    return JsonResponse({"Codigo": codigo})

def get_info_user(request, id):

    usuario = Usuario.objects.get(id = id)
    infoCarrito = json.loads(usuario.carrito)

    carrito_usuario = []

    for i in infoCarrito:

        carrito_usuario.append({

            "img": i["img"],
            "nombre": i["nombre"],
            "precio": i["precio"],
            "unidades": i["unidades"]

        })

    datos_usuario = {

        "id": usuario.id,
        "nombre": usuario.nombre,
        "foto": "http://localhost:8000/media" + usuario.foto.name,
        "email": usuario.email,
        "carrito": carrito_usuario

    }

    return JsonResponse({"usuario": datos_usuario})
