<template>
  <div>
    <center>
      <div>
        <h1>Bienvenido Usuario</h1>
      </div>
      <br>
      <br>
      <br>
      <br>
      <section>
        <h1>Visita nuestro</h1>
        <span><h2>Apartado de productos</h2></span>
        <section>
          <carousel>
            <!-- Aquí cargarás las imágenes desde tu API -->
            <carousel-slide
              v-for="(producto, index) in productos"
              :key="index"
            >
              <img :src="producto.imagen" alt="Producto" class="imgP">
            </carousel-slide>
          </carousel>
        </section>
      </section>
    </center>
  </div>
</template>

<script>
import VueCarousel from 'vue-carousel';
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      productos: [],
    };
  },
  created() {
    this.fetchProductos(); // Llama a fetchProductos al crear el componente
  },
  methods: {
    fetchProductos() {
      axios.get('http://127.0.0.1:8000/api/Producto/')
        .then(response => {
          this.productos = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  components: {
    Carousel: VueCarousel.Carousel,
    CarouselSlide: VueCarousel.CarouselSlide,
  },
};
</script>


<!-- Estilo del carrusel -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
