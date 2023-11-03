<template>
  <body>
    <div class="home">
      <HelloWorld />
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
body {
  background-image: url('../assets/images/fondos-pantalla-pc-3d-4.png');
  

  background-size: cover; /* Esto ajustará la imagen para cubrir todo el fondo */
  background-repeat: no-repeat; /* Esto evitará que la imagen se repita */
  background-attachment: fixed; /* Esto hará que la imagen de fondo se mantenga fija en su posición mientras la página se desplaza */
}

hr{
  border: 1px solid #E3AF61;
}

</style>
