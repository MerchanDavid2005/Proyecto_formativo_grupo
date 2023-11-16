<template>

    <div class="carrito-none">

        <div class="carrito-none-content">

            <v-icon name="bi-cart-x-fill" scale="8"></v-icon>
            <h1> Para poder ver tu carrito de compras primero debes iniciar sesion </h1>
            <button @click="enrutado.push('/iniciar_sesion')"> Iniciar sesion </button>

        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import { useRouter } from 'vue-router';

    const enrutado = useRouter()

</script>

<style lang="scss" scoped>

    .carrito-none{

        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;

        &-content{

            margin-top: 5%;
            width: 50%;
            height: max-content;
            text-align: center;
            background: #eee;
            padding: 10px;
            border-radius: 25px;

            h1{

                margin: 40px 0;
                font-size: 20px;

            }

            button{

                border: 0;
                padding: 15px;
                border-radius: 15px;
                background: #0af;
                color: #fff;
                font-weight: bold;
                margin-bottom: 20px;
                cursor: pointer;

            }

        }

    }

</style>

