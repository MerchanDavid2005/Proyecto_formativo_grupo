<template>

    <div class="panel-login">

        <h1 class="panel-login-title"> Registrarse </h1>
        <transition name="error">
            <p v-show="error" class="error"> Credenciales incorrectas </p>
        </transition>
        <div class="panel-login-body">
            <label> Ingresa tu usuario:  </label>
            <input v-model="usuario" type="text" placeholder="Usuario">
            <label> Ingresa tu contraseña:  </label>
            <input v-model="password" type="password" placeholder="Contraseña">
        </div>
        <p> Si no estas registrado puedes registrarte primero </p>
        <router-link style="margin: 10px 0;" to="/register"> click aqui </router-link>
        <button @click="iniciarSesion"> Iniciar sesion </button>

    </div>

</template>

<script setup>

    import { ref } from 'vue';
    import { useRouter } from 'vue-router'
    import { useStore } from '@/store/pinia';
    import jwt_decode from 'jwt-decode'
    
    const pinia = useStore()
    const enrutado = useRouter()

    let usuario = ref("")
    let password = ref("")

    let error = ref(false)

    async function token(){

        if(usuario.value != "" && password.value != ""){

            const data = await fetch("http://localhost:8000/get/token/administrador/", {

                method: 'POST',
                body: JSON.stringify({

                    usuario: usuario.value,
                    password: password.value

                }),
                headers: {"content-type": "application/json"}

            })

            return data.json()

        }else{

            return {token: ""}

        }

    }

    const iniciarSesion = async () => {

        let valorToken = await token()

        if(valorToken.token != ""){

            localStorage.setItem("token", JSON.stringify({"token": valorToken}))
            let tokenDecodificado = jwt_decode(localStorage.getItem("token"));
            pinia.getInfoUser(tokenDecodificado.id);
            enrutado.push("/productos")

        }else{

            error.value = true
            setTimeout(() => {

                error.value = false

            }, 3500)

        }

    }

    if(localStorage.getItem("token") != null && localStorage.getItem("token") != ""){

        enrutado.push("/productos")

    }

</script>

<style lang="scss" scoped>

    .panel-login{

        width: 30%;
        height: 60%;
        padding: 20px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;

        &-title{

            height: 20%;
            display: flex;
            justify-content: center;
            align-items: center;

        }

        .error{

            text-align: center;
            margin: 10px 0;
            color: #f05;

        }

        &-body{

            width: 100%;
            display: flex;
            flex-direction: column;

            input{

                @include inputs();
                margin: 15px 0;

            }

        }

        p{

            margin: 10px 0

        }

        button{

            @include botones($second-color);
            margin-top: 10px;
            width: max-content;

        }

    }

    .error-enter-active, .error-leave-active{

        transition: all 1s ease;

    }

    .error-enter-from, .error-leave-to{

        transform: translateX(-30px);
        opacity: 0;

    }

    @media(min-width: 1600px){

        .panel-login{

            width: 25%;
            height: 45%;

        }

    }

</style>