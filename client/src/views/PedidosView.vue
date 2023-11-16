<template>

    <div class="pedidos-view">

        <h1> Tus pedidos </h1>
        <PedidosComp />
        
    </div>

</template>

<script lang="ts" setup>

    import PedidosComp from '../components/PedidosComp.vue';

</script>

<style lang="scss" scoped>

    .pedidos-view{

        width: 100%;
        height: 100%;
        overflow: auto;

        h1{

            text-align: center;
            margin: 4% 0;
            font-size: 40px;

        }

    }

</style>