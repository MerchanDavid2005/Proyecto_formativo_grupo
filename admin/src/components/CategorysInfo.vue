<template>
    <div class="categorys-info">

        <h1 class="categorys-info-title"> Categorias </h1>
        
        <table>

            <thead>

                <tr>

                    <th> Nombre </th>
                    <th> Actualizar </th>
                    <th> Eliminar </th>

                </tr>

            </thead>

            <tbody>

                <tr v-for="(category, i ) in pinia.listaCategoriasFilter" :key="i">

                    <td> {{ category.nombre }} </td>
                    <td>
                        <v-icon @click="editarCategoria(i)" class="update" name="bi-pencil-square" scale="2"></v-icon>
                    </td>
                    <td>
                        <v-icon @click="eliminar(category.id)" class="delete" name="md-deleteforever" scale="2"></v-icon>
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

    const editarCategoria = (id) => enrutado.push(`/edit/category/${id}`)

</script>

<style lang="scss" scoped>

    .categorys-info{

        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;

        &-title{

            margin-bottom: 5%;
            font-size: 50px;

        }

        table{

            width: 95%;
            height: max-content;

            td, td{

                @include celdas('30%')

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