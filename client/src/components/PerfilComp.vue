<template>

    <div class="perfil-comp">

        <div class="perfil-comp-img">

            <img :src="pinia.informacionUsuario.foto" :alt="pinia.informacionUsuario.nombre">

        </div>

        <div class="perfil-comp-data">

            <h1> {{ pinia.informacionUsuario.usuario }} </h1>
            <div class="perfil-comp-data-info">
                <p> <strong> Usuario:  </strong> {{ pinia.informacionUsuario.usuario }} </p>
                <p> <strong> Nombre:  </strong> {{ pinia.informacionUsuario.nombre }} </p>
                <p> <strong> Correo:  </strong> {{ pinia.informacionUsuario.email }} </p>
            </div>

        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import { useStore } from '../store/pinia';

    const pinia = useStore()

</script>

<style lang="scss" scoped>

    .perfil-comp{

        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        &-img{

            width: 40%;
            height: 100%;

        }

        &-data{

            width: 55%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            h1{

                margin: 5% 0;
                font-size: 50px;

            }

            &-info{

                width: 100%;
                height: 30%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-size: 20px;

            }

        }

    }

</style>