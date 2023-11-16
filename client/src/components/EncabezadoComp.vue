<template>

    <div class="header-comp">
        
        <div class="header-comp-title">

            <h1> Serviteca </h1>

        </div>

        <div class="header-comp-url">

            <ul>

                <li>

                    <router-link class="url" to="/"> Inicio </router-link>

                </li>

                <li>

                    <router-link class="url" to="/productos"> Productos </router-link>
                    
                </li>

                <li>

                    <router-link class="url" to="/servicios"> Servicios </router-link>
                    
                </li>

                <li>

                    <router-link class="url" to="/contacto"> Contacto </router-link>
                    
                </li>

                <li class="cart">

                    <router-link class="url" to="/carrito"> <v-icon name="md-shoppingcart" scale="1.3"></v-icon> </router-link>
                    
                </li>

                <li class="url-panel">

                    <router-link v-show="!pinia.sesionIniciada" class="url" to="/iniciar_sesion"> 
                        
                        <img src="../assets/usuario-sin-foto.png" alt=""> 
                    
                    </router-link>

                    <div @click="panel = !panel" v-show="pinia.sesionIniciada" class="url"> 
                        
                        <img :src="pinia.informacionUsuario.foto" alt=""> 
                    
                    </div>

                    <div class="panel" v-show="panel">

                        <ul>

                            <li @click="enrutado.push('/perfil'); panel = false">
                                Cuenta
                            </li>
                            <li @click="enrutado.push('/pedidos'); panel = false">
                                Pedidos
                            </li>
                            <li @click="cerrarSesion">
                                Cerrar sesion
                            </li>

                        </ul>

                    </div>
                    
                </li>

            </ul>

        </div>

    </div>

</template>

<script lang="ts" setup>

    import { useStore } from '../store/pinia'
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const enrutado = useRouter()
    const pinia = useStore()

    let panel = ref(false)

    const cerrarSesion = () => {

        pinia.informacionUsuario = {

            id: 1,
            nombre: "XXX",
            usuario: "XXX",
            email: "XXX",
            foto: "XXX",
            password: "XXX",
            carrito: []

        }

        panel.value = false
        pinia.sesionIniciada = false
        localStorage.removeItem("token")
        enrutado.push('/')

    }

</script>

<style lang="scss" scoped>

    .header-comp{

        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background: #0af;
        color: #fff;

        &-title{

            width: 25%;
            height: 60%;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            border-right: 3px solid #fff;

            h1{

                font-size: 40px;

            }

        }

        &-url{

            width: 65%;
            height: 100%;

            ul{

                width: 100%;
                height: 100%;
                display: grid;
                justify-items: center;
                align-items: center;
                list-style: none;
                grid-template-columns: repeat(4, 20%) 15% 5%;

                .url{

                    font-size: 22px;
                    color: #fff;
                    text-decoration: none;
                    cursor: pointer;

                    img{

                        border-radius: 100%;

                    }

                }

                .url:hover{

                    color: #444;

                }

                .cart{

                    justify-self: end;
                    padding-right: 25%;

                }

                .url-panel{

                    display: flex;
                    justify-content: center;

                    .panel{

                        width: 10%;
                        box-sizing: border-box;
                        position: absolute;
                        z-index: 10000;
                        top: 10vh;
                        color: #000;
                        background: #0af;

                        ul{

                            display: flex;
                            flex-direction: column;

                            li{

                                text-align: center;
                                width: 100%;
                                line-height: 60px;
                                color: #fff;
                                cursor: pointer;

                            }

                            li:hover{

                                background: #09f;

                            }

                        }
    
                    }
    

                }

            }

        }

    }

</style>
