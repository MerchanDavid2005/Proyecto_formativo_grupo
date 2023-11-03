<template>
    <div class="orders-info">

        <h1 class="orders-info-title"> Pedidos </h1>

        <div class="orders-info-search">

            <label> Buscar por usuario: </label>
            <input type="text" placeholder="Nombre de usuario">
            <button> Buscar </button>
            <button @click="pinia.listaServiciosFilter = pinia.listaServicios"> Todo </button>

        </div>
        
        <table>

            <thead>

                <tr>

                    <th> Usuario </th>
                    <th> Lista productos </th>
                    <th> Fecha </th>

                </tr>

            </thead>

            <tbody>

                <tr v-for="(order, i ) in pinia.listaPedidos" :key="i">

                    <td> {{ order.usuario }} </td>
                    <td> {{ order.productos }} </td>
                    <td> {{ order.fecha }} </td>

                </tr>

            </tbody>

        </table>

    </div>
</template>

<script setup>

    import { useStore } from '@/store/pinia'

    const pinia = useStore()

</script>

<style lang="scss" scoped>

    .orders-info{

        width: 100%;
        height: 100%;
        padding: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;

        &-title{

            margin-bottom: 5%;
            font-size: 50px;

        }
        
        &-search{

            align-self: flex-start;
            display: flex;
            width: 50%;
            margin-bottom: 50px;
            align-items: center;

            input{

                @include inputs();
                margin: 0 10px;
                width: 40%

            }

            button{

                @include botones($second-color);
                margin-left: 10px;

            }

        }

        table{

            width: 95%;
            height: max-content;

            td, td{

                @include celdas('20%')

            }

            td:nth-child(2), th:nth-child(2){

                @include celdas('60%');

            }

            td:nth-child(2){

                text-align: left;

            }

        }

    }

</style>