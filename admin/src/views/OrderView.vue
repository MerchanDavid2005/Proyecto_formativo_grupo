<template>

    <MainDefault>
  
      <div class="body-orders">

        <OrdersInfo />

      </div>
  
    </MainDefault>
    
</template>
  
<script setup>

  import MainDefault from '@/layouts/MainDefault.vue'
  import OrdersInfo from '@/components/OrdersInfo.vue';
  import { useRouter } from 'vue-router'

  const enrutado = useRouter()
  
  if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){

    enrutado.push("/")

  }

</script>

<style lang="scss" scoped>

  .body-orders{

    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1%;
    position: static;
    z-index: 10;

  }

</style>
