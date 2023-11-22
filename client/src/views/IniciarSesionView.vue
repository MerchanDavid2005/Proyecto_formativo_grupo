<template>

    <div class="iniciar-sesion-view">

        <div class="iniciar-sesion-view-content">

            <IniciarSesionComp @error="mostrarError" />

        </div>

        <div class="iniciar-sesion-view-mensaje">

            <transition name="mensaje">

                <MensajeExito v-show="pinia.mensajeUsuarioCreado" :titulo="titulo" :texto="texto" />         

            </transition>

            <transition name="mensaje">

                <MensajeError v-show="error" texto="Ha habido un error al cargar tus datos, por favor revisa tu conexion a internet" />         

            </transition>

        </div>

    </div>

</template>

<script lang="ts" setup>

    import IniciarSesionComp from '../components/IniciarSesionComp.vue';
    import MensajeExito from '../components/MensajeExito.vue';
    import MensajeError from '../components/MensajeError.vue'

    import { useStore } from '../store/pinia';
    import { ref } from 'vue';

    let error = ref(false)

    const pinia = useStore()

    let titulo = "Registrado"
    let texto = "Te has registrado exitosamente en serviteca la estacion"

    const mostrarError = () => error.value = !error.value

</script>

<style lang="scss" scoped>

    .iniciar-sesion-view{

        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        &-content{

            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: static;
            z-index: 10;

        }

        &-mensaje{

            width: 100%;
            height: 90%;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            position: absolute;
            box-sizing: border-box;
            padding: 2%;
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