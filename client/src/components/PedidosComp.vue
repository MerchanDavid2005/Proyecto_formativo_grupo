<template>

    <div class="pedidos-comp">
        
        <div class="pedidos-comp-item" v-for="(pedido, i) in pinia.listaPedidos" :key="i">

            <div class="pedidos-comp-item-img">
                <img :src="pedido.productos[0].img" alt="">
            </div>
            <p> Fecha: {{ pedido.fecha.slice(0, 10) }} -- {{ pedido.fecha.slice(11, 16) }} </p>
            <button @click="informacionPedido(pedido.id)"> Ver mas informacion del pedido </button>

        </div>

    </div>

</template>

<script lang="ts" setup>

    import { useStore } from '../store/pinia';
    import { useRouter } from 'vue-router';

    const enrutado = useRouter()
    const pinia = useStore()

    const informacionPedido = async (id: number) => {

        const peticion = await fetch(`http://localhost:8000/get/order/id/${id}/`)

        const res = await peticion.json()

        pinia.informacionPedido = res

        enrutado.push(`/pedido/${id}`)

    }

</script>

<style lang="scss" scoped>

    .pedidos-comp{

        width: 100%;
        height: max-content;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;

        &-item{

            width: 18%;
            height: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

            &-img{

                width: 100%;
                height: 60%;
                margin: 20px 0;
    
            }

            button{

                border: 0;
                padding: 15px;
                border-radius: 15px;
                background: #0af;
                color: #fff;
                font-weight: bold;
                cursor: pointer;

            }

        }

    }

</style>