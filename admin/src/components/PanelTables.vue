<template>
    <div class="panel-tables">
        
        <h1> Selecciona la tabla </h1>
        <button @click="emits('nuevo', 'producto')"> Productos </button>
        <button @click="emits('nuevo', 'categoria')"> Categorias </button>
        <button @click="emits('nuevo', 'servicio')"> Servicios </button>
        <button @click="emits('ocultar')"> Cerrar </button>

    </div>
</template>

<script setup>

    import { defineEmits } from 'vue';

    const emits = defineEmits(['ocultar', 'nuevo'])

</script>

<style lang="scss" scoped>

    .panel-tables{

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        border-radius: 10px;
        background: #fff;
        color: #000;
        width: 30%;
        height: 65%;
        position: absolute;
        z-index: 1000;
        outline: 2px solid #000;

        h1{

            margin: 30px 0;
            font-size: 35px

        }

        button{

            @include botones($second-color);
            width: 80%;
            margin: 15px 0;
            font-size: 20px;
            cursor: pointer;

        }

        button:nth-child(5){

            @include botones($third-color);
            width: 80%;
            margin: 15px 0;
            font-size: 20px;
            cursor: pointer;

        }

    }

</style>