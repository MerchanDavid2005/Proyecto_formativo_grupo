<template>

    <MainDefault>

      <div class="body-services">

        <ServicesInfo @eliminar="panelEliminar" />

      </div>

      <div class="interfaz-borrar">

        <transition>
        
          <DeleteConfirm v-show="eliminar" modelo="Servicio" mensaje="este servicio" @ocultar="panelEliminar" />
  
        </transition>
  
      </div>
  
    </MainDefault>
    
</template>

<script setup>

  import MainDefault from '@/layouts/MainDefault.vue';
  import ServicesInfo from '@/components/ServicesInfo.vue';
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

  .body-services{

    width: 90%;
    height: 100%;
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
