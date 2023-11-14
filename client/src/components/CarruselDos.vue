<template>

    <div class="carrusel-dos-comp">

        <h1 class="carrusel-dos-comp-title"> Nuevos productos </h1>

        <div class="carrusel-dos-comp-carousel">

            <div class="carrusel-dos-comp-carousel-body">

                <div :style="{transform: distancia}" class="carrusel-dos-comp-carousel-body-content">

                    <div class="carrusel-dos-comp-carousel-body-content-item" v-for="(prd, i) in pinia.listaProductos.slice(0, 4)" :key="i">
    
                        <img :src="prd.imagen" :alt="prd.nombre">
                        <h1> {{ prd.nombre }} </h1>
                        <p> Por solo: <strong> {{ prd.precio }} </strong> </p>
        
                    </div>

                    <v-icon 
                    
                        class="flechita"
                        @click="cambiarCuadroDerecha" 
                        name="bi-arrow-right-circle-fill" 
                        scale="2.5">
                    
                    </v-icon>
    
                </div>
    
                <div :style="{transform: distancia}" class="carrusel-dos-comp-carousel-body-content">

                    <v-icon 
                    
                        class="flechita"
                        @click="cambiarCuadroIzquierda" 
                        name="bi-arrow-left-circle-fill" 
                        scale="2.5">
                    
                    </v-icon>
    
                    <div class="carrusel-dos-comp-carousel-body-content-item" v-for="(prd, i) in pinia.listaProductos.slice(4, 8)" :key="i">
    
                        <img :src="prd.imagen" :alt="prd.nombre">
                        <h1> {{ prd.nombre }} </h1>
                        <p> Por solo: <strong> {{ prd.precio }} </strong> </p>
        
                    </div>

                    <v-icon 
                    
                        class="flechita"
                        @click="cambiarCuadroDerecha" 
                        name="bi-arrow-right-circle-fill" 
                        scale="2.5">
                    
                    </v-icon>
    
                </div>
    
                <div :style="{transform: distancia}" class="carrusel-dos-comp-carousel-body-content">

                    <v-icon 
                    
                        class="flechita"
                        @click="cambiarCuadroIzquierda" 
                        name="bi-arrow-left-circle-fill" 
                        scale="2.5">
                    
                    </v-icon>
    
                    <div class="carrusel-dos-comp-carousel-body-content-item" v-for="(prd, i) in pinia.listaProductos.slice(8, 12)" :key="i">
    
                        <img :src="prd.imagen" :alt="prd.nombre">
                        <h1> {{ prd.nombre }} </h1>
                        <p> Por solo: <strong> {{ prd.precio }} </strong> </p>
        
                    </div>
    
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

    .carrusel-dos-comp{

        width: 90%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10vh 0;
        background: #2cbdff;
        border-radius: 15px;

        &-title{

            margin-top: 5%;
            font-size: 40px;
            color: #fff;
            font-weight: bold;

        }

        &-carousel{

            width: 100%;
            height: 50vh;
            overflow: hidden;
            margin: 10vh 0;

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

                        color: #fff;
                        cursor: pointer;
                        position: relative;
                        right: 0%;

                    }
    
                    &-item{
    
                        width: 20%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-evenly;
                        color: #fff;

                        img{

                            width: 100%;
                            height: 50%;

                        }
        
                        h1{
        
                            margin: 10px 0;
                            text-align: center;
        
                        }

                        p{

                            font-size: 20px;

                        }
        
                    }
    
                }

            }

        }

    }

</style>