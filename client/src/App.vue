<template>

  <AppLayout>

    <router-view/>

  </AppLayout>

</template>

<script lang="ts" setup>

  import { onMounted } from 'vue';
  import AppLayout from './layouts/AppLayout.vue';
  import { useStore } from './store/pinia';
  import { jwtDecode } from 'jwt-decode';

  const pinia = useStore()

  type Codigo = {

    id: number

  }

  async function traerData(){

    await pinia.traerProductos()
    await pinia.traerCategorias()
    await pinia.traerServicios()

    const token = localStorage.getItem("token")

    if(token != null && token != ""){

      const decodificar: Codigo = jwtDecode(token)
      pinia.idUsuario = decodificar.id
      pinia.sesionIniciada = true
      await pinia.traerInformacionUsuario()
      await pinia.traerPedidos()

    }

  }

  onMounted( async () => {

    await traerData()

  })

</script>

<style lang="scss">

  *{

    margin: 0;
    padding: 0;
    font-family: sans-serif;

  }

  img{

    width: 100%;
    height: 100%;
    object-fit: contain;

  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }


  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

</style>
