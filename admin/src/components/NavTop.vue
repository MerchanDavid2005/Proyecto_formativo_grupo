<template>
    <div class="navTop">
        
        <div class="navTop-titulo">

            <h1> Serviteca admin </h1>

        </div>

        <div class="navTop-data">

            <ul class="navTop-data-ul">

                <li>
                    <v-icon style="margin-left: 10px;" name="co-external-link" scale="1.5"></v-icon>
                    Ir a serviteca la estacion
                </li>
                <li @click="emits('panel')"> 
                    <v-icon style="margin-left: 10px;" name="md-fibernew" scale="1.5"></v-icon>
                    Nuevo 
                </li>
                <div @click="panelUsuario = !panelUsuario">
                    <img :src="pinia.informacionUsuario.foto" alt="">
                    <p> {{ pinia.informacionUsuario.usuario }} </p>
                    <div class="panel-usuario" @click="cerrarSesion" v-show="panelUsuario">
                        <v-icon name="co-account-logout" scale="1.5"></v-icon>
                        <p> Cerrar sesion </p>
                    </div>
                </div>
                
            </ul>

        </div>

    </div>
</template>

<script setup>

    import { ref, defineEmits } from 'vue'
    import { useRouter } from 'vue-router'
    import { useStore } from '@/store/pinia'

    const pinia = useStore()
    const enrutado = useRouter()
    const emits = defineEmits(['panel'])

    let panelUsuario = ref(false)



    const cerrarSesion = () => {

        localStorage.removeItem("token")
        enrutado.push("/")

    }

</script>

<style lang="scss" scoped>

    .navTop{

        width: 100%;
        height: 10%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #0af;
        position: static;
        z-index: 1000000;

        &-titulo{

            width: 40%;
            height: 60%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-right: 3px solid #fff;
            color: #fff;
            font-size: 20px;
            
        }

        &-data{

            width: 50%;
            height: 60%;
            display: flex;
            align-items: center;

            &-ul{

                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                list-style: none;

                li{

                    color: #fff;
                    font-size: 20px;
                    cursor: pointer;
                    transition: color 0.5s ease;
                    height: 100%;
                    display: flex;
                    flex-direction: row-reverse;
                    justify-content: space-between;
                    align-items: center;
                    
                }

                li:hover{

                    color: #555;

                }
    
                div{
    
                    width: 20%;
                    height: 9vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    cursor: pointer;
                    color: #fff;

                    img{

                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        margin: 10px 0;

                    }
    
                }
    

            }

        }

        .panel-usuario{

            position: fixed;
            z-index: 100000;
            top: 10vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: max-content;
            width: max-content;
            padding: 15px;
            align-items: center;
            background: #0af;
            color: #fff;
            border-radius: 0;
            font-size: 15px;
            border-radius: 0 0 10px 10px;

        }

        .panel-usuario:hover{

            color: #555;

        }

    }

</style>