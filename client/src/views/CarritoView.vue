<template>

    <div class="carrito-view">

        <div class="carrito-view-content">

            <CarritoComp @verificar="mostrarPanelEliminar" />

        </div>

        <div class="carrito-view-panel">

            <VerificarEliminarProducto @verificar="mostrarPanelEliminar" />

        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import CarritoComp from '../components/CarritoComp.vue';
    import VerificarEliminarProducto from '../components/VerificarEliminarProducto.vue';

    import { ref } from 'vue';

    let verificarEliminar = ref(false)

    const mostrarPanelEliminar = () => verificarEliminar.value = !verificarEliminar.value

</script>

<style lang="scss" scoped>

    .carrito-view{

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

        &-panel{

            width: 100%;
            height: 90%;
            overflow: auto;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;

        }

    }

</style>