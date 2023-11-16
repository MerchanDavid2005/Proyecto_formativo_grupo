<template>
    <div class="services-info">

        <h1 class="services-info-title"> Servicios </h1>

        <div class="services-info-search">

            <label> Buscar por nombre del servicio: </label>
            <input v-model="nombre" type="text" placeholder="Nombre de servicio">
            <button @click="buscar"> Buscar </button>
            <button @click="pinia.listaServiciosFilter = pinia.listaServicios"> Todo </button>

        </div>
        
        <table>

            <thead>

                <tr>

                    <th> Nombre </th>
                    <th> Descripcion </th>
                    <th> Precio </th> 
                    <th> Actualizar </th>
                    <th> Eliminar </th>

                </tr>

            </thead>

            <tbody>

                <tr v-for="(service, i ) in pinia.listaServiciosFilter" :key="i">

                    <td> {{ service.nombre }} </td>
                    <div class="descripcion"> {{ service.descripcion }} </div>
                    <td> {{ service.precio }} </td>
                    <td>
                        <v-icon @click="editarServicio(i)" class="update" name="bi-pencil-square" scale="2"></v-icon>
                    </td>
                    <td>
                        <v-icon @click="eliminar(service.id)" class="delete" name="md-deleteforever" scale="2"></v-icon>
                    </td>

                </tr>

            </tbody>

        </table>

    </div>
</template>

<script setup>

    import { useStore } from '@/store/pinia';
    import { ref, defineEmits } from 'vue';
    import { useRouter } from 'vue-router';

    const enrutado = useRouter()
    const emits = defineEmits(['eliminar'])
    const pinia = useStore()

    let nombre = ref("")

    const buscar = () => {

        pinia.listaServiciosFilter = pinia.listaServicios.filter(

            i => i.nombre.toLowerCase().startsWith(nombre.value.toLowerCase())

        )

    }

    function eliminar(id){

        pinia.idEliminar = id
        emits('eliminar')

    }

    const editarServicio = (id) => enrutado.push(`/edit/service/${id}`)

</script>

<style lang="scss" scoped>

    .services-info{

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
            width: 100%;
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

                @include celdas('15%');

            }

            th:nth-child(2){

                @include celdas('40%');

            }

            .descripcion{

                @include celdas('100%');
                height: 200px;
                overflow: auto;

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