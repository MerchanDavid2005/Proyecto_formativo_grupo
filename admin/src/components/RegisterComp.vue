<template>

    <div class="panel-register">

        <h1 class="panel-register-title"> Registrarse </h1>
        <p style="color: #f00; margin: 10px 0;" v-if="errorContraseña"> Las contraseñas no coinciden </p>
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
                <label> Foto:  </label>
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

    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from '@/store/pinia';

    const pinia = useStore()
    const enrutado = useRouter()

    let usuario = ref("")
    let nombre = ref("")
    let email = ref("")
    let foto = ref("")
    let contraseña = ref("")
    let contraseñaVerificar = ref("")

    let errorContraseña = ref(false)

    const valorImagen = (img) => foto.value = img.target.files[0]

    async function crearUsuario(){

        let informacion = new FormData()

        if(contraseña.value == contraseñaVerificar.value){

            informacion.append("usuario", usuario.value)
            informacion.append("nombre", nombre.value)
            informacion.append("img", foto.value)
            informacion.append("email", email.value)
            informacion.append("password", contraseña.value)
            informacion.append("rol", "Administrador")

            const peticion = await fetch("http://localhost:8000/api/Usuario/", {

                method: "POST",
                body: informacion

            });

            return peticion

        }else{

            errorContraseña.value = true

            setTimeout(() => {

                errorContraseña.value = false
                    
            }, 4000)

            return "Error"

        }

    }

    async function cargarDatos(){

        try{

            const respuesta = await crearUsuario();

            if(respuesta !== "Error"){

                await pinia.getUsers();
                enrutado.push('/');

            }

        }catch(e){

            console.log(e)

        }


    }

</script>

<style lang="scss" scoped>

    .panel-register{

        width: 35%;
        height: 80%;
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

</style>