<template>

    <div class="carrusel-tres-comp">

        <h1 class="carrusel-tres-comp-title"> Algunos de nuestros servicios </h1>

        <div class="carrusel-tres-comp-carousel">

            <div class="carrusel-tres-comp-carousel-body">

                <div v-for="(prd, i) in pinia.listaServicios.slice(0, 3)" :key="i" :style="{transform: distancia}" class="carrusel-tres-comp-carousel-body-content">

                    <v-icon 
                    
                        v-show="i != 0"
                        class="flechita"
                        @click="cambiarCuadroIzquierda" 
                        name="bi-arrow-left-circle-fill" 
                        scale="2.5">
                
                    </v-icon>

                    <div class="carrusel-tres-comp-carousel-body-content-item">

                        <div class="carrusel-tres-comp-carousel-body-content-item-img">

                            <img :src="prd.imagen" :alt="prd.nombre">

                        </div>
                        <div class="carrusel-tres-comp-carousel-body-content-item-data">

                            <h1> {{ prd.nombre }} </h1>
                            <p> {{ prd.descripcion }} </p>
                            <p> Por solo: <strong> {{ prd.precio }} </strong> </p>

                        </div>
        
                    </div>

                    <v-icon 
                    
                        v-show="i != 2"
                        class="flechita"
                        @click="cambiarCuadroDerecha" 
                        name="bi-arrow-right-circle-fill" 
                        scale="2.5">
                    
                    </v-icon>
    
                </div>

            </div>

        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import { ref } from 'vue';
    import { useStore } from '../store/pinia'

    const pinia = useStore()

    let distancia = ref("translateX(0)")

    const cambiarCuadroDerecha = () => {

        if(distancia.value == "translateX(0)"){

            distancia.value = "translateX(-100%)"

        }else{

            distancia.value = "translateX(-200%)"

        }

    }

    const cambiarCuadroIzquierda = () => {

        if(distancia.value == "translateX(-200%)"){

            distancia.value = "translateX(-100%)"

        }else{

            distancia.value = "translateX(0)"

        }

    }

</script>

<style lang="scss" scoped>

    .carrusel-tres-comp{

        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10vh;

        &-title{

            margin: 5% 0;
            font-size: 40px;
            color: #222;

        }

        &-carousel{

            width: 100%;
            height: 50vh;
            overflow: hidden;

            &-body{

                width: 300%;
                height: 100%;
                display: flex;

                &-content{

                    width: 33%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    transition: transform 2s ease;

                    .flechita{

                        color: #0af;
                        cursor: pointer;
                        position: relative;
                        right: 0%;

                    }
    
                    &-item{
    
                        width: 85%;
                        height: 100%;
                        display: flex;
                        justify-content: space-evenly;

                        &-img{

                            width: 40%;
                            height: 100%;

                        }

                        &-data{

                            width: 40%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: space-between;

                            h1{
        
                                margin: 10px 0;
         
                            }
    
                            p{
    
                                font-size: 20px;
    
                            }

                        }
        
                    }
    
                }

            }

        }

    }

</style>