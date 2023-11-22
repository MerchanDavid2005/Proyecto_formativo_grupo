<template>

    <div class="productos-view">

        <div class="productos-view-content">

            <ProductosComp @verificar="mostrarPanel" @error="mensajeError" />

        </div>

        <div class="productos-view-verify">

            <AsyncComp v-show="panel" @verificar="mostrarPanel" @exito="mensajeExito" @error="mensajeError" />
            
        </div>

        <div class="productos-view-mensaje">

            <transition name="mensaje">
            
                <MensajeExito v-show="exito" :titulo="titulo" :texto="textoExito" />

            </transition>

            <transition name="mensaje">

                <MensajeError v-show="error" :texto="textoError" />

            </transition>

        </div>
    
    </div>
  
</template>

<script lang="ts" setup>

    import ProductosComp from '../components/ProductosComp.vue';
    import ComponenteDeCarga from '../components/ComponenteDeCarga.vue';
    import MensajeExito from '../components/MensajeExito.vue';
    import MensajeError from '../components/MensajeError.vue';

    import { ref, defineAsyncComponent } from 'vue';

    const AsyncComp = defineAsyncComponent({
        
        loader: () => import("../components/VerificarProducto.vue"),
        loadingComponent: ComponenteDeCarga
    
    })

    let panel = ref(false)

    let exito = ref(false)
    let error = ref(false)

    let titulo = "Guardado"

    let textoExito = "El producto se ha guardado exitosamente en tu carrito de compras"
    let textoError = "No se ha podido cargar tu solicitud, por favor revisa tu conexion a internet"

    const mensajeExito = () => exito.value = !exito.value
    const mensajeError = () => error.value = !error.value

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

        &-mensaje{

            width: 100%;
            height: 90%;
            position: absolute;
            box-sizing: border-box;
            padding: 2%;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
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
  