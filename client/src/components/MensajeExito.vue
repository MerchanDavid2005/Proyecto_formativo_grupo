<template>

    <div class="panel-mensaje-exito">
        
        <h1 class="panel-mensaje-exito-titulo"> {{ props.titulo }} </h1>
        <p class="panel-mensaje-exito-texto"> {{ props.texto }} </p>

    </div>

</template>

<script lang="ts" setup>

    import { defineProps } from 'vue';

    const props = defineProps(['titulo', 'texto'])

</script>

<style lang="scss" scoped>

    .panel-mensaje-exito{

        width: 30%;
        height: max-content;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #fff;
        background: #0068ab;
        position: absolute;
        z-index: 100000000;

        &-titulo{

            margin: 10px 0;
            font-size: 20px;

        }

        &-texto{

            margin: 10px 0;
            font-size: 15px;

        }

    }

</style>