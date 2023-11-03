<template>

    <div class="cuerpo-register">

        <RegisterComp />

    </div>

    <div></div>

</template>

<script setup>

    import RegisterComp from '@/components/RegisterComp.vue';

</script>

<style lang="scss" scoped>

    .cuerpo-register{

        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to top left, #ddd, #0ff, #fff);

    }

</style>