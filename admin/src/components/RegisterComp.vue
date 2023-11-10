<template>

    <div class="panel-register">

        <h1 class="panel-register-title"> Registrarse </h1>
        <transition name="error">
            <p style="color: #f00; margin: 10px 0;" v-if="errorContraseña"> Las contraseñas no coinciden </p>
        </transition>
        <transition name="error">
            <p style="color: #f00; margin: 10px 0;" v-if="errorCampos"> Por favor no dejes campos vacios </p>
        </transition>
        <div class="panel-register-body">
            <div class="panel-register-body-row">
                <div class="panel-register-body-row-column">
                    <label> Nombre de usuario:  </label>
                    <input v-model="usuario" type="text" placeholder="Usuario">
                </div>
                <div class="panel-register-body-row-column">
                    <label> Nombre:  </label>
                    <input v-model="nombre" type="text" placeholder="Nombre">
                </div>
            </div>
            <div class="panel-register-body-email">
                <label> Correo:  </label>
                <input v-model="email" type="text" placeholder="Correo">
            </div>
            <div class="panel-register-body-email">
                <label> Foto (opcinal):  </label>
                <input type="file" :onchange="valorImagen">
            </div>
            <div class="panel-register-body-row">
                <div class="panel-register-body-row-column">
                    <label> Contraseña:  </label>
                    <input v-model="contraseña" type="password" placeholder="Contraseña">
                </div>
                <div class="panel-register-body-row-column">
                    <label> Confirmar contraseña:  </label>
                    <input v-model="contraseñaVerificar" type="password" placeholder="Verificar contraseña">
                </div>
            </div>
            <div class="panel-register-body-button">
                <p> Si ya estas registrado puedes iniciar sesion directamente </p>
                <router-link style="margin: 10px 0;" to="/"> click aqui </router-link>
                <button @click="cargarDatos"> Registrarse </button>
            </div>
        </div>

    </div>

</template>

<script setup>

    import { ref, defineEmits } from 'vue';
    import { useStore } from '@/store/pinia';

    const pinia = useStore()
    const emits = defineEmits(['codigo'])

    let usuario = ref("")
    let nombre = ref("")
    let email = ref("")
    let foto = ref("")
    let contraseña = ref("")
    let contraseñaVerificar = ref("")

    let errorContraseña = ref(false)
    let errorCampos = ref(false)

    const valorImagen = (img) => foto.value = img.target.files[0]

    const validar = () => {

        if(usuario.value != "" && nombre.value != "" && email.value != "" && contraseña.value != ""){

            return true

        }else{

            return false

        }

    }

    async function crearUsuario(){

        pinia.datosUsuarioRegister = new FormData()

        if(validar()){

            if(contraseña.value == contraseñaVerificar.value){

                pinia.datosUsuarioRegister.append("usuario", usuario.value)
                pinia.datosUsuarioRegister.append("nombre", nombre.value)
                pinia.datosUsuarioRegister.append("foto", foto.value)
                pinia.datosUsuarioRegister.append("email", email.value)
                pinia.datosUsuarioRegister.append("contraseña", contraseña.value)
                pinia.datosUsuarioRegister.append("rol", "Administrador")

                emits('codigo')

                const peticion = await fetch("http://localhost:8000/send/email/Administrador/", {

                    method: 'POST',
                    body: JSON.stringify({

                        usuario: usuario.value,
                        email: email.value

                    }),
                    headers: {"content-type": "application/json"}

                })

                const res = await peticion.json()
                pinia.codigoVerificacion = res.Codigo
                return "Correcto"

            }else{

                errorContraseña.value = true
                setTimeout(() => {

                    errorContraseña.value = false
                        
                }, 4000)

                return "Error"

            }

        }else{

            errorCampos.value = true
            setTimeout(() => {

                errorCampos.value = false

            }, 3500)

            return "Error"

        }

    }

    async function cargarDatos(){

        try{

            await crearUsuario();

        }catch(e){

            emits('codigo')
            pinia.error = true
            setTimeout(() => {
                
                pinia.error = false

            }, 3000);

        }

    }

</script>

<style lang="scss" scoped>

    .panel-register{

        width: 35%;
        height: 85%;
        padding: 20px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;

        &-title{

            height: 15%;
            display: flex;
            justify-content: center;
            align-items: center;

        }

        .error{

            text-align: center;
            margin: 15px 0;
            color: #f00

        }

        &-body{

            height: 80%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            &-row{

                width: 100%;
                height: max-content;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &-column{

                    width: 45%;
                    height: max-content;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    input{

                        @include inputs();
                        width: 100%;
                        margin: 10px 0;

                    }

                }

            }

            &-email{

                width: 100%;
                height: max-content;
                display: flex;
                flex-direction: column;

                input{

                    @include inputs();
                    margin: 10px 0;

                }

            }

            &-button{

                width: 100%;
                height: max-content;
                display: flex;
                flex-direction: column;
                align-items: center;

                p{

                    margin: 10px 0;

                }

                button{

                    @include botones($second-color);
                    width: max-content;
                    margin-top: 10px 0;

                }

            }

        }

    }

    @media(min-width: 1600px){

        .panel-register{

            width: 30%;
            height: 70%;

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