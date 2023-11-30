<template>

    <div class="contacto-view">

        <div class="contacto-view-content">

            <ContactoComp @exito="mensajeExito" @error="mensajeError" />

        </div>

        <div class="contacto-view-whatsapp">
                
            <a href="https://w.app/ApWXCU " target="_blank"> 
                
                <v-icon class="icono-whatsapp" name="bi-whatsapp" scale="3"></v-icon> 
            
            </a>
            
        </div>

        <div class="productos-view-mensaje">

            <transition name="mensaje">
            
                <MensajeExito v-show="exito" titulo="Enviado" :texto="textoExito" />

            </transition>

            <transition name="mensaje">

                <MensajeError v-show="error" texto="Ha habido un error, por favor revisa tu conexion a internet" />

            </transition>

        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import ContactoComp from '../components/ContactoComp.vue'

    import { ref } from 'vue';

    let exito = ref(false)
    let error = ref(false)

    let textoExito = "El mensaje se ha enviado correctamente"

    const mensajeExito = () => exito.value = !exito.value

    const mensajeError = () => error.value = !error.value

</script>

<style lang="scss" scoped>

    .contacto-view{

        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        &-content{

            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: static;
            z-index: 10;

        }

        &-whatsapp{

            width: 100%;
            height: 90%;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            position: absolute;
            box-sizing: border-box;
            padding: 2%;

            a{

                position: absolute;
                z-index: 1000;

                .icono-whatsapp{

                    color: #0f0;
                    cursor: pointer;
    
                }

                .icono-whatsapp:hover{

                    color: #090;
                    cursor: pointer;
    
                }

            }

        }

    }

</style>