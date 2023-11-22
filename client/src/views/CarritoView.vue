<template>

    <div class="carrito-view">

        <div class="carrito-view-content">

            <carrito v-if="pinia.sesionIniciada" @verificar="mostrarPanelEliminar" @cotizar="mostrarPanelCotizacion" />
            <MensajeCarritoSinUsuario v-show="!pinia.sesionIniciada" />

        </div>

        <div class="carrito-view-panel">

            <VerificarCotizacion 
            
                v-show="verificarCotizacion" 
                @cotizar="mostrarPanelCotizacion" 
                @exito="mensajeExitoPedido" 
                @error="mensajeError" 
                
            />

            <VerificarEliminarProducto 

                v-show="verificarEliminar" 
                @verificar="mostrarPanelEliminar" 
                @exito="mensajeExitoEliminado" 
                @error="mensajeError" 

            />

        </div>

        <div class="carrito-view-mensaje">

            <transition name="mensaje">
            
                <MensajeExito v-show="exitoCotizado" titulo="Pedido" texto="Tu cotizacion se ha realizado exitosamente" />

            </transition>

        </div>

        <div class="carrito-view-mensaje">

            <transition name="mensaje">
            
                <MensajeExito v-show="exitoEliminado" titulo="Eliminado" texto="El producto se ha eliminado exitosamente del carrito de compras" />

            </transition>

            <transition name="mensaje">

                <MensajeError v-show="error" texto="No se ha podido cargar tu solicitud, por favor revisa tu conexion a internet" />

            </transition>

        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import MensajeCarritoSinUsuario from '../components/MensajeCarritoSinUsuario.vue';
    import VerificarEliminarProducto from '../components/VerificarEliminarProducto.vue';
    import VerificarCotizacion from '../components/VerificarCotizacion.vue';
    import ComponenteDeCarga from '../components/ComponenteDeCarga.vue';
    import MensajeExito from '../components/MensajeExito.vue';
    import MensajeError from '../components/MensajeError.vue';

    import { ref, defineAsyncComponent } from 'vue';
    import { useStore } from '../store/pinia';

    const carrito = defineAsyncComponent({

        loader: () => import('../components/CarritoComp.vue'),
        loadingComponent: ComponenteDeCarga

    })

    const pinia = useStore()

    let verificarEliminar = ref(false)
    let verificarCotizacion = ref(false)

    let exitoCotizado = ref(false)
    let exitoEliminado = ref(false)

    let error = ref(false)

    const mensajeExitoPedido = () => exitoCotizado.value = !exitoCotizado.value
    const mensajeExitoEliminado = () => exitoEliminado.value = !exitoEliminado.value

    const mensajeError = () => error.value = !error.value

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

        &-mensaje{

            width: 100%;
            height: 90%;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            box-sizing: border-box;
            padding: 2%;
            position: absolute;
            overflow: hidden;

        }

    }

    .mensaje-enter-active, .mensaje-leave-active{

        transition: all 2s ease;

    }

    .mensaje-enter-from, .mensaje-leave-to{

        opacity: 0;
        transform: translateX(100px);

    }

</style>