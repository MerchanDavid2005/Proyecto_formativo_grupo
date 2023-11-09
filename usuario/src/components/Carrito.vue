<template>
  <div>
    <encabezado />

    <div>

      
      <center>
      <div v-if="carrito.length === 0" class="empty-cart">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <img width="80" height="80" src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v2.png" alt="shopping-cart--v2"/>
        <h1>Tu carrito está vacío</h1>
      </div>
    </center>
    
    <div v-if="carrito.length > 0">
      
      <div class="cartI">
        <h2 class="titulo">Carrito de Compras</h2>
        <div class="total">
          <h2>Precio Total del Carrito: </h2> <h1 class="totalcart">$ {{ formatPrice(calcularPrecioTotalCarrito) }}</h1>
        </div>
      </div>
      
      <table>
        <tr>
          <td>Producto</td>
          <td>Nombre</td>
          <td>Precio unidad</td>
          <td>Cantidad</td>
          <td>Eliminar</td>
        </tr>
        <tr v-for="item in carrito" :key="item.id">
          <td>
            <center>
              <img :src="item.imagen" alt="imagen de {{ item.nombre }}" width="60" style="border-radius: 5px">
            </center>
          </td>
          <td>
            {{ item.nombre }}
          </td>
          <td>
            {{ formatPrice(item.precio) }}
          </td>
          <td>
            <input type="number" v-model="item.cantidad" min="1" :max="item.cantidadDisponible" @change="actualizarCarrito" />
          </td>
          <td>
            <center>
              
              <a @click="eliminarDelCarrito(item.id)"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 448 512">
                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" fill="black" />
              </svg>            
            </a>
          </center>
        </td>
      </tr>
    </table>
  </div>
</div>
</div>
</template>

<script>
import Encabezado from '@/components/Encavezado.vue';

export default {
  components: {
        Encabezado,
    },
  data() {
    return {
      carrito: [],
    };
  },
  methods: {
    agregarAlCarrito(producto) {
      const productoEnCarrito = this.carrito.find((item) => item.id === producto.id);
      if (productoEnCarrito) {
        if (productoEnCarrito.cantidad < producto.cantidadDisponible) {
          productoEnCarrito.cantidad++;
        }
      } else {
        this.carrito.push({ ...producto, cantidad: 1 });
      }
      this.guardarCarritoEnLocalStorage();
    },
    eliminarDelCarrito(productoId) {
      const index = this.carrito.findIndex((item) => item.id === productoId);
      if (index !== -1) {
        this.carrito.splice(index, 1);
        this.guardarCarritoEnLocalStorage();
      }
    },
    guardarCarritoEnLocalStorage() {
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    },
    cargarCarritoDesdeLocalStorage() {
      const carrito = JSON.parse(localStorage.getItem('carrito'));
      if (carrito) {
        this.carrito = carrito;
      }
    },
    actualizarCarrito() {
      // Esta función se llama cuando cambia la cantidad en el input
      // Puedes agregar validaciones adicionales aquí si es necesario
      this.guardarCarritoEnLocalStorage();
    },
    
    formatPrice(price) {
      // Formatear el precio con separadores de miles
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  mounted() {
    this.cargarCarritoDesdeLocalStorage();
  },
  computed: {
    calcularPrecioTotalCarrito() {
      return this.carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
    },
  },
}
</script>

<style>

.totalcart{
  color: #E3AF61;
}

.cartI{
  display: flex;
  justify-content: space-evenly;
}

.total{
}

.titulo {
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th {
  background-color: #f2f2f2;
  text-align: left;
  padding: 10px;
  border: 1px solid #0af;
}

td {
  text-align: left;
  padding: 10px;
  border: 1px solid #E3AF61;
}

tr:nth-child(odd) {
  background-color: #0af;
  color: white;
}
</style>
