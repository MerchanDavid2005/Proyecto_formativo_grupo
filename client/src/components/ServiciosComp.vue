<template>

    <div class="servicios-comp">

        <h1 class="servicios-comp-title"> Nuestros servicios </h1>
        <div 
        
            v-for="(service, i) in pinia.listaServicios" :key="i"
            :class="{'servicios-comp-one': i % 2 != 0, 'servicios-comp-two': i % 2 == 0}" 
        >
            
            <div class="servicios-comp-img">

                <img :src="service.imagen" :alt="service.nombre">

            </div>

            <div class="servicios-comp-data">

                <h1> {{ service.nombre }} </h1>
                <p class="servicios-comp-data-descrip"> {{ service.descripcion }} </p>
                <p class="servicios-comp-data-precio"> Precio: <strong> {{ service.precio }} </strong> </p>

            </div>

        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import { useStore } from '../store/pinia';

    const pinia = useStore()

</script>

<style lang="scss" scoped>

    .servicios-comp{

        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-title{

            font-size: 50px;
            margin: 20px 0;

        }

        &-one{

            width: 80%;
            height: 550px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin: 20px 0;
            padding: 20px;
            background: linear-gradient(to top left, #0068ab, #0083d4, #00aaff);
            border-radius: 15px;
            color: #fff;

        }

        &-two{

            width: 80%;
            height: 550px;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-between;
            margin: 20px 0;
            padding: 20px;
            background: linear-gradient(to top left, #00aaff, #0083d4, #0068ab);
            border-radius: 15px;
            color: #fff;

        }

        &-img{

            width: 40%;
            height: 100%;

        }

        &-data{

            width: 55%;
            height: 100%;
            display: flex;
            flex-direction: column;

            h1{

                text-align: center;
                margin: 20px 0;
                font-size: 40px;

            }

            &-descrip{

                width: 100%;
                height: 70%;
                overflow: auto;
                margin: 15px 0;
                font-size: 20px;

            }

            &-precio{

                font-size: 20px;

            }

        }

    }

</style>