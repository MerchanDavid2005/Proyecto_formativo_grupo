<template>

    <div class="producto-antes">
        
        <h1 class="producto-antes-titulo"> Producto sin editar </h1>
        <table>

            <thead>

                <tr>

                    <th> Nombre </th>
                    <th> Categoria </th>
                    <th> Imagen </th>
                    <th> Descripcion </th>
                    <th> Cantidad </th>
                    <th> Precio </th>    

                </tr>

            </thead>

            <tbody>

                <tr>

                    <td> {{ nombre }} </td>
                    <td> {{ categoria }} </td>
                    <td>
                        <img :src="imagen" :alt="nombre">
                    </td>
                    <td> {{ descripcion }} </td>
                    <td> {{ cantidad }} </td>
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
    let categoria = ref("")
    let imagen = ref("")
    let descripcion = ref("")
    let cantidad = ref("")
    let precio = ref("")

    onMounted(() => {

        nombre.value = pinia.listaProductos[ruta.params.id].nombre
        categoria.value = pinia.listaProductos[ruta.params.id].categoria
        imagen.value = pinia.listaProductos[ruta.params.id].imagen
        descripcion.value = pinia.listaProductos[ruta.params.id].descripcion
        cantidad.value = pinia.listaProductos[ruta.params.id].cantidad
        precio.value = pinia.listaProductos[ruta.params.id].precio

    })

</script>

<style lang="scss" scoped>

    .producto-antes{

        width: 100%;
        height: 60%;
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


                @include celdas('15%');


            }

            td:nth-child(4), th:nth-child(4){

                @include celdas('20%');

            }

        }

    }

</style>