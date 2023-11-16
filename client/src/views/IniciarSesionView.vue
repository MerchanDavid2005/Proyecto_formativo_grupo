<template>

    <div class="iniciar-sesion-view">

        <div class="iniciar-sesion-view-content">

            <IniciarSesionComp />

        </div>

    </div>

</template>

<script lang="ts" setup>

    import IniciarSesionComp from '../components/IniciarSesionComp.vue';

</script>

<style lang="scss" scoped>

    .iniciar-sesion-view{

        width: 100%;
        height: 100%;

        &-content{

            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: static;
            z-index: 10;

        }

    }

</style>