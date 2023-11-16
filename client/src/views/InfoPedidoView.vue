<template>

    <div class="informacion-pedido-view">

        <h1> Informacion del pedido </h1>
        <infoPedido />
        
    </div>

</template>

<script lang="ts" setup>

    import ComponenteDeCarga from '../components/ComponenteDeCarga.vue';

    import { defineAsyncComponent } from 'vue'

    const infoPedido = defineAsyncComponent({

        loader: () => import('../components/InformacionPedido.vue'),
        loadingComponent: ComponenteDeCarga

    }) 

</script>

<style lang="scss" scoped>

    .informacion-pedido-view{

        width: 100%;
        height: 100%;
        overflow: auto;

        h1{

            text-align: center;
            margin: 4% 0;
            font-size: 40px;

        }

    }

</style>