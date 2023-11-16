<template>

    <div class="informacion-pedido">

        <div class="informacion-pedido-item" v-for="(prd, i) in pinia.informacionPedido.productos" :key="i">

            <h1> {{ prd.nombre }} </h1>
            <div class="informacion-pedido-item-img">
                <img :src="prd.img" :alt="prd.nombre">
            </div>
            <p> <strong> Unidades:  </strong> {{ prd.unidades }} </p>
            <p> <strong> Total:  </strong> {{ prd.precio }} </p>

        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import { useStore } from '../store/pinia';

    const pinia = useStore()

</script>

<style lang="scss" scoped>

    .informacion-pedido{

        width: 100%;
        height: max-content;
        display: flex;
        justify-content: space-evenly;

        &-item{

            width: 18%;
            height: 400px;
            display: flex;
            flex-direction: column;

            h1{

                margin: 15px 0;
                text-align: center;

            }

            &-img{

                width: 100%;
                height: 60%;
                
            }

            p{

                margin: 10px 0;

            }

        }

    }

</style>

