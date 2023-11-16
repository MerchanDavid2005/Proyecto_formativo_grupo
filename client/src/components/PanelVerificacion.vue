<template>

    <div class="panel-codigo-verificacion">

        <h1> Codigo de verificacion </h1>
        <p> Te llegara un correo al correo electronico ingresado, este contendra el codigo de verificacion que debes ingresar en el siguiente campo </p>
        <input v-model="codigo" type="text" placeholder="XXXXXX" maxlength="6">
        <p> Si no te ha llegado el correo puedes revisar si escribiste bien tu correo electronico </p>
        
    </div>

</template>

<script lang="ts" setup>

    import { ref, watch } from 'vue';
    import { useStore } from '../store/pinia';
    import { useRouter } from 'vue-router';

    const enrutado = useRouter()
    const pinia = useStore()
    let codigo = ref("")

    async function crearUsuario(){

        if(codigo.value == pinia.codigoVerificacion){

            const cuerpo = new FormData()

            cuerpo.append("usuario", pinia.datosUsuarioNuevo.usuario)
            cuerpo.append("nombre", pinia.datosUsuarioNuevo.nombre)
            cuerpo.append("foto", pinia.datosUsuarioNuevo.foto)
            cuerpo.append("email", pinia.datosUsuarioNuevo.email)
            cuerpo.append("contraseña", pinia.datosUsuarioNuevo.password)
            cuerpo.append("rol", "Cliente")
            cuerpo.append("carrito", "[]")

            const peticion = await fetch("http://localhost:8000/api/Usuario/", {

                method: 'POST',
                body: cuerpo

            })

            return peticion.json()

        }else{

            console.log("XD")

        }

    }

    watch(codigo, async () => {

        try{

            console.log("Xd")
            await crearUsuario()
            enrutado.push('/iniciar_sesion')

        }catch(e){

            console.log(e)

        }

    })

</script>

<style lang="scss" scoped>

    .panel-codigo-verificacion{

        width: 40%;
        height: max-content;
        padding: 15px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        position: absolute;
        z-index: 100000;
        background: #0068ab;

        h1{

            margin: 20px 0;
            text-align: center;

        }

        p{

            text-align: center;
            margin: 10px 0;

        }

        input{

            border: 0;
            padding: 15px;
            border-radius: 15px;
            background: #eee;
            text-align: center;
            margin: 20px 0;

        }

        button{

            border: 0;
            background: #0af;
            color: #fff;
            font-weight: bold;
            padding: 15px;
            border-radius: 15px;
            margin: 15px 0;

        }

    }

</style>

