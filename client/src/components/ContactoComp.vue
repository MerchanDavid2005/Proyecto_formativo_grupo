<template>

    <div class="contacto-comp">

        <h1> Formulario de envio de correo </h1>
        <label> De: </label>
        <input type="text" name="" id="">
        <label> Asunto: </label>
        <input type="text">
        <label> Mensaje: </label>
        <textarea cols="30" rows="5"></textarea>
        <button @click="pinia.traerInformacionUsuario"> Enviar correo </button>

    </div>

</template>

<script lang="ts" setup>

    import { useStore } from '../store/pinia'

    const pinia = useStore()

</script>

<style lang="scss" scoped>

    .contacto-comp{

        width: 25%;
        height: max-content;
        padding: 25px;
        box-shadow: 1px 1px 5px 0px #888888;
        display: flex;
        flex-direction: column;

        h1{

            text-align: center;

        }

        input, textarea{

            margin: 10px 0;
            padding: 10px;
            border-radius: 5px;
            border: 0;
            outline: 1px solid #ccc;
            resize: none;

        }

        button{

            padding: 10px;
            border: 0;
            background: #0af;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;

        }

    }

</style>