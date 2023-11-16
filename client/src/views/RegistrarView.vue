<template>

    <div class="registrar-view">

        <div :class="{'registrar-view-comp': !panelCodigo, 'registrar-view-comp-none': panelCodigo}">

            <RegistrarseComp @verificar="mostrarPanel" />

        </div>

        <div class="registrar-view-panel">

            <PanelVerificacion v-show="panelCodigo" />

        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import RegistrarseComp from '../components/RegistrarseComp.vue';
    import PanelVerificacion from '../components/PanelVerificacion.vue';

    import { ref } from 'vue';

    let panelCodigo = ref(false)

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

        }

    }

</style>