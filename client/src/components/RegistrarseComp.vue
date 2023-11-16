<template>

    <div class="registrar-comp">

        <h1> Registrarse </h1>
        <div class="registrar-comp-content">
            <label> Ingresa tu nombre de usuario: </label>
            <input v-model="usuario" type="text" placeholder="Nombre usuario">
            <label> Ingresa tu nombre: </label>
            <input v-model="nombre" type="text" placeholder="Nombre">
            <label> Ingresa tu foto de usuario (opcional): </label>
            <input type="file" :onchange="valorImagen">
            <label> Ingresa tu correo: </label>
            <input v-model="correo" type="text" placeholder="Email">
            <label> Ingresa tu contraseña: </label>
            <input v-model="password" type="password" placeholder="**********">
            <label> Confirmar contraseña: </label>
            <input v-model="passwordConfirm" type="password" placeholder="**********">
        </div>
        <p> ¿Ya estas registrado? puedes iniciar sesion siguiendo el siguiente enlace <router-link class="enlace" to="/iniciar_sesion"> click aqui </router-link> </p>
        <button @click="enviarCodigo"> Registrarse </button>
        
    </div>

</template>

<script lang="ts" setup>

    import { ref, defineEmits } from 'vue';
    import { useStore } from '../store/pinia';

    const emits = defineEmits(['verificar'])
    const pinia = useStore()

    let usuario = ref("");
    let nombre = ref("");
    let foto = ref("");
    let correo = ref("");
    let password = ref("");
    let passwordConfirm = ref("");

    const valorImagen = (e: any) => foto.value = e.target.files[0]

    const validar = () => {

        if(nombre.value != "" && usuario.value != "" && correo.value != "" && password.value != ""){

            return true

        }else{

            return false

        }

    }

    const enviarCodigo = async () =>{

        if(validar()){

            emits('verificar')

            pinia.datosUsuarioNuevo = {

                "id": 1,
                "usuario": usuario.value,
                "nombre": nombre.value,
                "foto": foto.value,
                "email": correo.value,
                "password": password.value,
                "carrito": []

            }

            const peticion = await fetch("http://localhost:8000/send/email/Cliente/", {

                method: 'POST',
                body: JSON.stringify({

                    usuario: usuario.value,
                    email: correo.value

                }),
                headers: {"content-type": "application/json"}

            })

            const res = await peticion.json()

            pinia.codigoVerificacion = res.Codigo


        }else{

            print()

        }

    }

</script>

<style lang="scss" scoped>

    .registrar-comp{

        width: 45%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(to top, #00588d, #0083d4, #2cbdff);
        padding: 15px;
        border-radius: 15px;

        h1{

            margin: 20px 0;
            text-align: center;
            color: #fff;
            font-size: 40px;

        }

        &-content{

            width: 100%;
            height: max-content;
            display: grid;
            grid-template-columns: 40% 55%;
            gap: 20px;

            label{

                margin: 10px 0;
                color: #fff;
    
            }
    
            input{
    
                width: 95%;
                height: max-content;
                padding: 15px;
                border-radius: 10px;
                background: #eee;
                border: 0;
    
            }

        }

        p{

            text-align: center;
            margin-top: 20px;
            font-size: 15px;
            color: #fff;

        }

        .enlace{

            text-decoration: none;
            color: #0af;

        }

        button{
    
            margin: 10px 0;
            width: 60%;
            padding: 15px;
            border-radius: 10px;
            background: #0af;
            color: #fff;
            font-weight: bold;
            border: 0;
            cursor: pointer;

        }

        button:hover{

            background: #09f;

        }

    }

</style>