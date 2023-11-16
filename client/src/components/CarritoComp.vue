<template>

    <div class="carrito-comp">

        <div class="carrito-comp-title">
            <h1> Carrito de compras </h1>
            <h1> Precio total del carrito: <span> $ </span> <span> {{ pinia.precioTotalCarritoFormateado }} </span> </h1>
        </div>
        <div class="carrito-comp-button">
            <button @click="emits('cotizar')"> Realizar cotizacion </button>
        </div>
        <table>
            <thead>
                <tr>
                    <th> Producto </th>
                    <th> Nombre </th>
                    <th> Precio total </th>
                    <th> Cantidad </th>
                    <th> Eliminar </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(prd, i) in pinia.informacionUsuario.carrito" :key="i">
                    <td>
                        <img :src="prd.img" :alt="prd.nombre">
                    </td>
                    <td>
                        {{ prd.nombre }}
                    </td>
                    <td>
                        {{ prd.precio }}
                    </td>
                    <td>
                        {{ prd.unidades }}
                    </td>
                    <td>
                        <v-icon @click="eliminar(prd.id)" style="color:#f00; cursor:pointer;" name="md-deleteforever" scale="3.5"></v-icon>
                    </td>
                </tr>
            </tbody>
        </table>
        <h1 style="margin:2% 0" v-if="pinia.informacionUsuario.carrito.length < 1"> No tienes productos en el carrito </h1>
        
    </div>

</template>

<script lang="ts" setup>

    import { defineEmits } from 'vue';
    import { useStore } from '../store/pinia'

    const emits = defineEmits(['verificar', 'cotizar'])
    const pinia = useStore()

    const eliminar = (id: number) => {

        pinia.idProductoEliminar = id
        emits('verificar')

    }

</script>

<style lang="scss" scoped>

    .carrito-comp{

        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-title{

            width: 100%;
            height: max-content;
            display: grid;
            grid-template-columns: repeat(2, 50%);
            margin: 5% 0 2% 0;

            h1{

                padding-left: 5%;

            }

        }

        &-button{

            width: 100%;
            height: max-content;
            padding-left: 2.5%;
            margin-bottom: 15px;
            box-sizing: border-box;

            button{

                border: 0;
                border-radius: 15px;
                padding: 15px;
                background: #0af;
                color: #fff;
                font-weight: bold;
                cursor: pointer;

            }

            button:hover{

                background: #09f;
    
            }

        }

        table{

            width: 100%;
            height: max-content;

            th{

                padding: 10px;
                background: #0af;
                color: #fff;

            }

            td{

                height: 150px;
                margin: 10px 0;
                text-align: center;

            }

        }

    }

</style>