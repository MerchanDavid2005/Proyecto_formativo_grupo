<template>

  <AppLayout>

    <router-view/>

  </AppLayout>

</template>

<script lang="ts" setup>

  import { onMounted } from 'vue';
  import AppLayout from './layouts/AppLayout.vue'
  import { useStore } from './store/pinia'

  const pinia = useStore()

  async function traerData(){

    await pinia.traerProductos()
    await pinia.traerCategorias()
    await pinia.traerServicios()

  }

  onMounted(() => {

    traerData()

  })

</script>

<style lang="scss">

  *{

    margin: 0;
    padding: 0;
    font-family: sans-serif;

    img{

      width: 100%;
      height: 100%;
      object-fit: contain;

    }

  }

</style>
