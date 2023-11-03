<template>

  <MainDefault>

    <div class="body-categorys">

      <CategorysInfo @eliminar="panelEliminar" />
      <FilterComp />

    </div>

    <div class="interfaz-borrar">

      <transition>
      
        <DeleteConfirm v-show="eliminar" modelo="Categoria" mensaje="esta categoria" @ocultar="panelEliminar" />

      </transition>

    </div>

  </MainDefault>
  
</template>

<script setup>

  import MainDefault from '@/layouts/MainDefault.vue'
  import CategorysInfo from '@/components/CategorysInfo.vue';
  import FilterComp from '@/components/FilterComp.vue';
  import DeleteConfirm from '@/components/DeleteConfirm.vue';

  import { ref } from 'vue';
  import { useRouter } from 'vue-router'

  const enrutado = useRouter()

  let eliminar = ref(false)

  const panelEliminar = () => eliminar.value = !eliminar.value

  if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){

    enrutado.push("/")

  }

</script>

<style lang="scss" scoped>

  .body-categorys{

    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding: 1%;
    position: static;
    z-index: 10;

  }

  .interfaz-borrar{

    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

  }

  .v-enter-active, .v-leave-active{

    transition: transform 0.8s ease;

  }

  .v-enter-from, .v-leave-to{

    transform: scale(0);

  }

</style>
