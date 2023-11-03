<template>
    <div class="users-info">

        <h1 class="users-info-title"> Usuarios </h1>

        <div class="users-info-search">

            <label> Buscar por usuario: </label>
            <input v-model="usuario" type="text" placeholder="Nombre de usuario">
            <button @click="buscarUsuario"> Buscar </button>
            <label> Buscar por nombre: </label>
            <input v-model="nombre" type="text" placeholder="Nombre de nombre">
            <button @click="buscarNombre"> Buscar </button>
            <button @click="pinia.listaUsuariosFilter = pinia.listaUsuarios"> Todo </button>

        </div>
        
        <table>

            <thead>

                <tr>

                    <th> Usuario </th>
                    <th> Nombre </th>
                    <th> Email </th>
                    <th> Eliminar </th>

                </tr>

            </thead>

            <tbody>

                <tr v-for="(user, i ) in pinia.listaUsuariosFilter" :key="i">

                    <td> {{ user.usuario }} </td>
                    <td> {{ user.nombre }} </td>
                    <td> {{ user.email }} </td>
                    <td>
                        <v-icon @click="eliminar(user.id)" class="delete" name="md-deleteforever" scale="2"></v-icon>
                    </td>

                </tr>

            </tbody>

        </table>

    </div>
</template>

<script setup>

    import { useStore } from '@/store/pinia';
    import { ref, defineEmits } from 'vue';

    const emits = defineEmits(['eliminar'])
    const pinia = useStore()

    let usuario = ref("")
    let nombre = ref("")

    const buscarUsuario = () => {

        pinia.listaUsuariosFilter = pinia.listaUsuarios.filter(

            i => i.usuario.toLowerCase().startsWith(usuario.value.toLowerCase())

        )

    }

    const buscarNombre = () => {

        pinia.listaUsuariosFilter = pinia.listaUsuarios.filter(

            i => i.nombre.toLowerCase().startsWith(nombre.value.toLowerCase())

        )

    }

    function eliminar(id){

        pinia.idEliminar = id
        emits('eliminar')

    }

</script>

<style lang="scss" scoped>

    .users-info{

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
                width: 20%

            }

            button{

                @include botones($second-color);
                margin: 0 20px 0 0;

            }

        }

        table{

            width: 100%;
            height: max-content;

            td, td{

                @include celdas('20%')

            }

            td:nth-child(3), th:nth-child(3){

                @include celdas('40%');

            }

            .delete{

                color: $third-color;
                cursor: pointer;

            }

        }

    }

</style>