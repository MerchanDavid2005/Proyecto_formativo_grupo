<template>

    <div class="servicios-view">

        <ServiciosComp />
        <PiePaginaVue />

    </div>

</template>

<script lang="ts" setup>

    import PiePaginaVue from '../components/PiePagina.vue';
    import ServiciosComp from '../components/ServiciosComp.vue';


</script>

<style lang="scss" scoped>

    .servicios-view{

        width: 100%;
        height: 100%;
        overflow: auto;

    }

</style>