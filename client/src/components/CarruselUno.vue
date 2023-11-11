<template>

    <div class="carrusel-uno-comp">

        <h1 class="carrusel-uno-comp-title"> Bienvenido a serviteca </h1>

        <div class="carrusel-uno-comp-carousel">

            <div class="carrusel-uno-comp-carousel-content">
                
                <img v-for="(foto, i) in pinia.listaServicios" :key="i" :src="foto.imagen" :alt="foto.imagen">
                
                <img :src="pinia.listaServicios[0].imagen" :alt="pinia.listaServicios[0].nombre">
                <img :src="pinia.listaServicios[1].imagen" :alt="pinia.listaServicios[1].nombre">

            </div>

        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import { useStore } from '../store/pinia'

    const pinia = useStore()

</script>

<style lang="scss" scoped>

    .carrusel-uno-comp{

        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10vh;

        &-title{

            margin: 5% 0;
            font-size: 50px;
            color: #222;

        }

        &-carousel{

            width: 80%;
            height: 55vh;
            overflow: hidden;

            @keyframes carrusel {
                
                0%{

                    transform: translateX(0);

                }

                100%{

                    transform: translateX(-300%)

                }

            }

            &-content{

                width: 400%;
                height: 100%;
                display: flex;

                img{

                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    animation-name: carrusel;
                    animation-duration: 20s;
                    animation-timing-function: cubic-bezier(1,1,1,1);
                    animation-fill-mode: backwards;
                    animation-iteration-count: infinite;
    
    
                }

            }

        }

    }

</style>