<template>

    <div class="registrar-view">

        <div :class="{'registrar-view-comp': !panelCodigo, 'registrar-view-comp-none': panelCodigo}">

            <RegistrarseComp @verificar="mostrarPanel" @error="mostrarError" />

        </div>

        <div class="registrar-view-panel">

            <PanelVerificacion v-show="panelCodigo" @error="mostrarError" />

        </div>

        <div class="registrar-view-error">

            <transition name="mensaje">
            
                <MensajeError v-show="error" texto="Ha habido un error, por favor revisa el correo electronico ingresado o tu conexion a internet" />

            </transition>

        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import RegistrarseComp from '../components/RegistrarseComp.vue';
    import PanelVerificacion from '../components/PanelVerificacion.vue';
    import MensajeError from '../components/MensajeError.vue';

    import { ref } from 'vue';

    let panelCodigo = ref(false)

    let error = ref(false)

    const mostrarError = () => error.value = !error.value

    const mostrarPanel = () => panelCodigo.value = !panelCodigo.value

</script>

<style lang="scss" scoped>

    .registrar-view{

        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        &-comp{

            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: static;
            z-index: 10;

        }

        &-comp-none{

            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: static;
            z-index: 10;
            filter: brightness(20%);
            background: #ddd;

        }

        &-panel{

            width: 100%;
            height: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            box-sizing: border-box;
            padding: 2%;
            overflow: hidden;

        }

        &-error{

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