<template>

    <div class="carrito-view">

        <div class="carrito-view-content">

            <carrito v-if="pinia.sesionIniciada" @verificar="mostrarPanelEliminar" @cotizar="mostrarPanelCotizacion" />
            <MensajeCarritoSinUsuario v-show="!pinia.sesionIniciada" />

        </div>

        <div class="carrito-view-panel">

            <VerificarEliminarProducto v-show="verificarEliminar" @verificar="mostrarPanelEliminar" />
            <VerificarCotizacion v-show="verificarCotizacion" @cotizar="mostrarPanelCotizacion" />

        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import MensajeCarritoSinUsuario from '../components/MensajeCarritoSinUsuario.vue';
    import VerificarEliminarProducto from '../components/VerificarEliminarProducto.vue';
    import VerificarCotizacion from '../components/VerificarCotizacion.vue';
    import ComponenteDeCarga from '../components/ComponenteDeCarga.vue';

    import { ref, defineAsyncComponent } from 'vue';
    import { useStore } from '../store/pinia';

    const carrito = defineAsyncComponent({

        loader: () => import('../components/CarritoComp.vue'),
        loadingComponent: ComponenteDeCarga

    })

    const pinia = useStore()

    let verificarEliminar = ref(false)
    let verificarCotizacion = ref(false)

    const mostrarPanelEliminar = () => {
        
        verificarEliminar.value = !verificarEliminar.value
        verificarCotizacion.value = false

    }

    const mostrarPanelCotizacion = () => {
        
        verificarCotizacion.value = !verificarCotizacion.value
        verificarEliminar.value = false

    }

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