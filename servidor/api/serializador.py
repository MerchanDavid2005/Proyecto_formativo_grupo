from .models import Producto, Usuario, Categoria, Pedido, Servicio
from rest_framework.serializers import ModelSerializer

class ProductoSerializer(ModelSerializer):

    class Meta:

        model = Producto
        fields = '__all__'

class UsuarioSerializer(ModelSerializer):

    class Meta:

        model = Usuario
        fields = '__all__'

class CategoriaSerializer(ModelSerializer):

    class Meta:

        model = Categoria
        fields = '__all__'

class PedidoSerializer(ModelSerializer):

    class Meta:

        model = Pedido
        fields = '__all__'

class ServicioSerializer(ModelSerializer):

    class Meta:

        model = Servicio
        fields = '__all__'

