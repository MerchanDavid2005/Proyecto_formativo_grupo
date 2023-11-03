<template>
    <div class="products-info">

        <h1 class="products-info-title"> Productos </h1>
        
        <table>

            <thead>

                <tr>

                    <th> Nombre </th>
                    <th> Categoria </th>
                    <th> Descripcion </th>
                    <th> Cantidad </th>
                    <th> Precio </th>    
                    <th> Actualizar </th>
                    <th> Eliminar </th>

                </tr>

            </thead>

            <tbody>

                <tr v-for="(prd, i ) in pinia.listaProductosFilter" :key="i">

                    <td> {{ prd.nombre }} </td>
                    <td> {{ prd.categoria }} </td>
                    <td> {{ prd.descripcion }} </td>
                    <td> {{ prd.cantidad }} </td>
                    <td> {{ prd.precio }} </td>
                    <td>
                        <v-icon @click="editarProducto(i)" class="update" name="bi-pencil-square" scale="2"></v-icon>
                    </td>
                    <td>
                        <v-icon @click="eliminar(prd.id)" class="delete" name="md-deleteforever" scale="2"></v-icon>
                    </td>

                </tr>

            </tbody>

        </table>

    </div>
</template>

<script setup>

    import { useStore } from '@/store/pinia';
    import { defineEmits } from 'vue';
    import { useRouter } from 'vue-router';

    const enrutado = useRouter()
    const emits = defineEmits(['eliminar'])
    const pinia = useStore()

    function eliminar(id){

        pinia.idEliminar = id
        emits('eliminar')

    }

    const editarProducto = (id) => enrutado.push(`/edit/product/${id}`)

</script>

<style lang="scss" scoped>

    .products-info{

        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;

        &-title{

            margin-bottom: 5%;
            font-size: 40px;

        }

        table{

            width: 95%;
            height: max-content;

            td, th{

                @include celdas('12%');

            }

            td:nth-child(3), th:nth-child(3){

                @include celdas('28%');

            }

            .update{

                color: $first-color;
                cursor: pointer;

            }

            .delete{

                color: $third-color;
                cursor: pointer;

            }

        }

    }

</style>