from django.db import models

# Create your models here.

class Usuario(models.Model):

    usuario = models.CharField(max_length=255, null=False)
    nombre = models.CharField(max_length=255, null=False)
    foto = models.ImageField(upload_to='usuario/', default='usuario/default.png')
    email = models.CharField(max_length=255, null=False)
    contraseña = models.CharField(max_length=30, null=False)
    rol = models.CharField(max_length=50)
    carrito = models.TextField(default="[]")

class Categoria(models.Model):

    nombre = models.CharField(max_length=50, null=False)

    def __str__(self) -> str:
        return self.nombre
    
class Producto(models.Model):

    nombre = models.CharField(max_length=255, null=False)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, null=False)
    descripcion = models.TextField(null=False)
    cantidad = models.IntegerField()
    precio = models.FloatField()
    imagen = models.ImageField(upload_to='producto/')

    def __str__(self) -> str:
        return self.nombre

class Pedido(models.Model):

    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, null=False)
    productos = models.TextField(null=False)
    fecha = models.DateTimeField(auto_now_add=True)

class Servicio(models.Model):

    nombre = models.CharField(max_length=255, null=False)
    imagen = models.ImageField(upload_to='servicios/')
    descripcion = models.TextField()
    precio = models.FloatField()