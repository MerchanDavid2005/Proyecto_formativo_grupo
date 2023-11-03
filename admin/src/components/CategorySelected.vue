<template>

    <div class="categoria-antes">
        
        <h1 class="categoria-antes-titulo"> Categoria sin editar </h1>
        <table>

            <thead>

                <tr>

                    <th> Nombre </th>

                </tr>

            </thead>

            <tbody>

                <tr>

                    <td> {{ nombre }} </td>

                </tr>

            </tbody>

        </table>

    </div>

</template>

<script setup>

    import { ref, onMounted } from 'vue';
    import { useStore } from '@/store/pinia'
    import { useRoute } from 'vue-router';

    const pinia = useStore()
    const ruta = useRoute()

    let nombre = ref("")

    onMounted(() => {

        nombre.value = pinia.listaCategorias[ruta.params.id].nombre

    })

</script>

<style lang="scss" scoped>

    .categoria-antes{

        width: 100%;
        height: 45%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        &-titulo{

            height: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;

        }

        table{

            height: 50%;
            width: 100%;

            th, td{


                @include celdas('100%');


            }

        }

    }

</style>