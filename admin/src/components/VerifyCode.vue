<template>

    <div class="code">

        <h1 class="code-title"> Codigo de verificacion </h1>
        <transition name="error">
            <p class="error" v-if="error"> Codigo incorrecto </p>
        </transition>
        <p> Contactate con el administrador de la aplicacion para que te de el codigo de verificacion que le ha llegado al correo eletronico </p>
        <input v-model="codigo" type="password" maxlength="6" placeholder="XXXXX">
        <button @click="registrar"> Confirmar </button>

    </div>

</template>

<script setup>

    import { ref } from "vue";
    import { useStore } from '@/store/pinia';
    import { useRouter } from "vue-router";

    const pinia = useStore();
    const enrutado = useRouter();

    let codigo = ref("");

    let error = ref(false);

    const confirmar = async () => {

        if(codigo.value == pinia.codigoVerificacion){

            const peticion = await fetch("http://localhost:8000/api/Usuario/", {

                method: 'POST',
                body: pinia.datosUsuarioRegister

            })

            return peticion.json()

        }else{

            return "Error"

        }

    }

    const registrar = async () => {

        pinia.modoEspera = true

        try{

            const res = await confirmar()

            if(res != "Error"){

                pinia.modoEspera = false
                enrutado.push('/')
                pinia.usuarioCreado = true
                setTimeout(() => {

                    pinia.usuarioCreado = false

                }, 3500)

            }else{

                error.value = true
                setTimeout(() => {

                    error.value = false

                }, 3500)

            }

        }catch(e){

            pinia.modoEspera = false
            pinia.error = true
            setTimeout(() => {

                pinia.error = false
                
            }, 3500);

        }

    }

</script>

<style lang="scss" scoped>

    .code{

        width: 50%;
        height: max-content;
        padding: 20px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        z-index: 1000;
        background: #fff;

        &-title{

            margin: 20px 0;

        }

        .error{

            text-align: center;
            margin: 15px 0;
            color: #f00

        }

        input{

            @include inputs();
            text-align: center;
            margin: 20px 0;

        }

        button{

            @include botones($second-color)

        }

    }

    .error-enter-active, .error-leave-active{

        transition: all 1s ease;

    }

    .error-enter-from, .error-leave-to{

        transform: translateX(-50px);
        opacity: 0;

    }

</style>

