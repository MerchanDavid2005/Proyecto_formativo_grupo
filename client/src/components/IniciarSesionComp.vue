<template>

    <div class="iniciar-sesion-comp">

        <h1> Iniciar sesion </h1>
        <transition name="error">
            <p class="error" v-if="error"> Credenciales incorrectas </p>
        </transition>
        <div class="iniciar-sesion-comp-content">
            <label> Ingresa tu nombre de usuario:  </label>
            <input v-model="usuario" type="text" placeholder="Usuario">
            <label> Ingresa tu contraseña </label>
            <input v-model="password" type="password" placeholder="Contraseña">
        </div>
        <p> ¿Aun no estas registrado? puede seguir el siguiente enlace para registrarte <router-link class="enlace" to="/registrarse"> click aqui </router-link> </p>
        <button @click="ingresar"> Iniciar sesion </button>
        
    </div>

</template>

<script lang="ts" setup>

    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { jwtDecode } from 'jwt-decode'
    import { useStore } from '../store/pinia'

    const pinia = useStore()
    const enrutado = useRouter()

    let usuario = ref("")
    let password = ref("")

    let error = ref(false)

    type Codigo = {

        id: number

    }

    const validar = () => {

        if(usuario.value != "" && password.value != ""){

            return true

        }else{

            return false

        }

    }

    const iniciarSesion = async () => {

        if(validar()){

            const peticion = await fetch("http://localhost:8000/get/token/cliente/", {

                method: 'POST',
                body: JSON.stringify({

                    usuario: usuario.value,
                    password: password.value

                }),
                headers: {"content-type": "application/json"}

            })

            return peticion.json()

        }else{

            return false

        }

    }

    const ingresar = async () => {

        pinia.cargando = true

        try{

            const res = await iniciarSesion()

            if(res){

                localStorage.setItem("token", res.token)

                const token: string | null = localStorage.getItem("token")

                if(token != null && token != ""){

                    const tokenDecodificado: Codigo = jwtDecode(token)
                    pinia.idUsuario = tokenDecodificado.id
                    await pinia.traerInformacionUsuario()
                    pinia.sesionIniciada = true
                    pinia.cargando = false
                    enrutado.push('/')

                }else{

                    error.value = true
                    setTimeout(() => {

                        error.value = false

                    }, 3500)
                    pinia.cargando = false

                }



            }else{

                error.value = true
                setTimeout(() => {

                    error.value = false

                }, 3500)
                pinia.cargando = false

            }


        }catch(e){

            console.log(e)
            pinia.cargando = false

        }

    }

</script>

<style lang="scss" scoped>

    .iniciar-sesion-comp{

        width: 25%;
        height: max-content;
        padding: 15px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        background: linear-gradient(to top, #00588d, #0083d4, #2cbdff);

        h1{

            margin: 20px 0;
            font-size: 40px;

        }

        .error{

            color: #f05;
            margin: 0;
            margin-bottom: 10px;

        }

        &-content{

            width: 100%;
            height: max-content;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            label{

                margin: 15px 0;

            }

            input{

                border: 0;
                background: #eee;
                padding: 15px;
                border-radius: 15px;
                width: 90%;

            }

        }

        p{

            text-align: center;
            margin-top: 30px;
            font-size: 15px;

        }

        .enlace{

            text-decoration: none;
            color: #0af;

        }

        button{

            border: 0;
            border-radius: 15px;
            padding: 15px;
            color: #fff;
            font-weight: bold;
            background: #0af;
            cursor: pointer;
            margin: 15px 0;

        }

        button:hover{

            background: #09f;

        }

    }

    .error-enter-active, .error-leave-active{

        transition: all 1s ease;

    }

    .error-enter-from, .error-leave-to{

        opacity: 0;
        transform: translateY(-50px);

    }

</style>