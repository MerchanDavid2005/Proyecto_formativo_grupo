<template>
  <router-view />
</template>

<script setup>

  import { useStore } from './store/pinia';
  import jwt_decode from 'jwt-decode'

  const pinia = useStore()

  const inicioApp = async () => {

    if(localStorage.getItem("token") != null && localStorage.getItem("token") != ""){

      let tokenDecodificado = jwt_decode(localStorage.getItem("token"));
      pinia.getInfoUser(tokenDecodificado.id);

    }

    pinia.modoEspera = true;

    try{

      await pinia.getCategorys();
      await pinia.getProducts();
      await pinia.getServices();
      await pinia.getUsers();
      await pinia.getOrders();
      pinia.modoEspera = false

    }catch(e){

      console.log(e)
      pinia.modoEspera = false;

    }

  }

  inicioApp()

</script>

<style lang="scss">

  *{

    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;

    img{

      width: 100%;
      height: 100%;
      object-fit: contain;

    }

  }

</style>
