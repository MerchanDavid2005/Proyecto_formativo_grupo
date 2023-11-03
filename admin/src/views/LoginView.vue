<template>

    <div class="cuerpo-login">

        <LoginComp />

    </div>

    <div></div>

</template>

<script setup>

    import LoginComp from '@/components/LoginComp.vue';

</script>

<style lang="scss" scoped>

    .cuerpo-login{

        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to top left, #ddd, #0ff, #0af);

    }

</style>