<template>

    <div class="servicio-antes">
        
        <h1 class="servicio-antes-titulo"> Servicio sin editar </h1>
        <table>

            <thead>

                <tr>

                    <th> Nombre </th>
                    <th> Imagen </th> 
                    <th> Descripcion </th>
                    <th> Precio </th>    

                </tr>

            </thead>

            <tbody>

                <tr>

                    <td> {{ nombre }} </td>
                    <td>
                        <img :src="imagen" :alt="nombre">
                    </td>
                    <td> {{ descripcion }} </td>
                    <td> {{ precio }} </td>

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
    let imagen = ref("")
    let descripcion = ref("")
    let precio = ref("")

    onMounted(() => {

        nombre.value = pinia.listaServicios[ruta.params.id].nombre
        imagen.value = pinia.listaServicios[ruta.params.id].imagen
        descripcion.value = pinia.listaServicios[ruta.params.id].descripcion
        precio.value = pinia.listaServicios[ruta.params.id].precio

    })

</script>

<style lang="scss" scoped>

    .servicio-antes{

        width: 100%;
        height: 40%;
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

                @include celdas('20%');

            }

            td:nth-child(2), th:nth-child(2){

                @include celdas('5%');

            }

        }

    }

</style>