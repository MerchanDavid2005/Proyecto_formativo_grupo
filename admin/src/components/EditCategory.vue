<template>

    <div class="categoria-despues">
        
        <h1> Editar categoria </h1>
        <table>

            <thead>

                <tr>

                    <th> Nombre </th>
                    <th> Actualizar </th>

                </tr>

            </thead>

            <tbody>

                <tr>

                    <td> 
                        <input v-model="nombre" type="text" placeholder="Nombre"> 
                    </td>
                    <td>

                        <v-icon @click="cargarDatos" class="update" name="bi-pencil-square" scale="2"></v-icon>

                    </td>

                </tr>

            </tbody>

        </table>

    </div>

</template>

<script setup>

    import { useStore } from '@/store/pinia';
    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const enrutado = useRouter()
    const ruta = useRoute()
    const pinia = useStore()

    let nombre = ref("")

    async function editarCategoria(){

        let cate = pinia.listaCategorias[ruta.params.id];

        const peticion = await fetch(`http://localhost:8000/api/Categoria/${cate.id}/`, {

            method: 'PUT',
            body: JSON.stringify({

                nombre: nombre.value,

            }),
            headers: {"content-type": "application/json"}

        });

        return peticion

    }

    const cargarDatos = async () => {

        pinia.modoEspera = true

        try{

            await editarCategoria();
            enrutado.push('/categorias');
            pinia.getCategorys;
            pinia.modoEspera = false
            pinia.success = true
            setTimeout(() => {
                
                pinia.success = false

            }, 3000);

        }catch(e){

            pinia.modoEspera = false
            pinia.error = true
            setTimeout(() => {
                
                pinia.error = false

            }, 3000);

        }

    }

</script>

<style lang="scss" scoped>

    .categoria-despues{

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

                @include celdas('50%');

                input{

                    @include inputs();

                }

            }

            .update{

                color: $first-color;
                cursor: pointer;

            }

        }

    }

</style>