<template>

    <div class="contacto-comp">

        <h1> Formulario de envio de correo </h1>
        <label> De: </label>
        <input v-model="usuario" type="text" name="" id="">
        <label> Asunto: </label>
        <input v-model="asunto" type="text">
        <label> Mensaje: </label>
        <textarea v-model="mensaje" cols="30" rows="5"></textarea>
        <button @click="recargarDatos"> Enviar correo </button>

    </div>

</template>

<script lang="ts" setup>

    import { ref } from 'vue';
    import { useStore } from '../store/pinia';
    
    const pinia = useStore()

    let usuario = ref("")
    let asunto = ref("")
    let mensaje = ref("")

    const enviarCorreo = async () => {

        const peticion = await fetch("http://localhost:8000/send/contact/", {

            method: 'POST',
            body: JSON.stringify({

                usuario: usuario.value,
                asunto: asunto.value,
                mensaje: mensaje.value

            }),
            headers: {"content-type": "application/json"}

        })

        return peticion.json()

    }

    const recargarDatos = async () => {

        pinia.cargando = true

        try{

            await enviarCorreo()
            usuario.value = ""
            asunto.value = ""
            mensaje.value = ""
            pinia.cargando = false

        }catch(e){

            pinia.cargando = false

        }

    }

</script>

<style lang="scss" scoped>

    .contacto-comp{

        width: 25%;
        height: max-content;
        padding: 25px;
        border-radius: 15px;
        outline: 1px solid #000;
        display: flex;
        flex-direction: column;

        h1{

            text-align: center;
            margin-bottom: 20px;

        }

        input, textarea{

            margin: 10px 0;
            padding: 10px;
            border-radius: 5px;
            border: 0;
            outline: 1px solid #ccc;
            resize: none;
            font-size: 15px;

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