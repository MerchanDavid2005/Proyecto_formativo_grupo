<template>

    <div class="productos-view">

        <div class="productos-view-content">

            <ProductosComp @verificar="mostrarPanel" />

        </div>

        <div class="productos-view-verify">

            <AsyncComp v-show="panel" @verificar="mostrarPanel" />
            
        </div>
    
    </div>
  
</template>

<script lang="ts" setup>

    import ProductosComp from '../components/ProductosComp.vue';

    import { ref, defineAsyncComponent } from 'vue';

    const AsyncComp = defineAsyncComponent(() => import("../components/VerificarProducto.vue"))

    let panel = ref(false)

    const mostrarPanel = () => panel.value = !panel.value

</script>

<style lang="scss" scoped>

    .productos-view{

        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        &-content{

            width: 100%;
            height: 100%;
            overflow: auto;
            position: static;
            z-index: 10;

        }

        &-verify{

            width: 100%;
            height: 90%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;

        }

    }

</style>
  