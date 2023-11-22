<template>

    <div class="panel-mensaje-error">
        
        <h1 class="panel-mensaje-error-titulo"> Error </h1>
        <p class="panel-mensaje-error-texto"> {{ props.texto }} </p>

    </div>

</template>

<script lang="ts" setup>

    import { defineProps } from 'vue';

    const props = defineProps(['texto'])

</script>

<style lang="scss" scoped>

    .panel-mensaje-error{

        width: 30%;
        height: max-content;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #fff;
        background: #d70047;
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