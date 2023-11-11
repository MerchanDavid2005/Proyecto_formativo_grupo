<template>

  <div class="inicio-view">

    <CarruselUno />
    <CarruselDos />
    <CarruselTres />
    <PiePagina />
  
  </div>

</template>

<script lang="ts" setup>

  import CarruselUno from '../components/CarruselUno.vue';
  import CarruselDos from '../components/CarruselDos.vue';
  import CarruselTres from '../components/CarruselTres.vue';
  import PiePagina from '../components/PiePagina.vue';

</script>

<style lang="scss" scoped>

  .inicio-view{

    width: 100%;
    height: 100%;
    overflow: auto;

  }

</style>
