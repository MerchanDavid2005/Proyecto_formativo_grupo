<template>

    <div class="servicio-despues">
        
        <h1> Editar servicio </h1>
        <table>

            <thead>

                <tr>

                    <th> Nombre </th>
                    <th> Descripcion </th>
                    <th> Precio </th>    
                    <th> Actualizar </th>

                </tr>

            </thead>

            <tbody>

                <tr>

                    <td> 
                        <input v-model="nombre" type="text" placeholder="Nombre"> 
                    </td>
                    <td>
                        <input type="file" :onchange="valorImagen">
                    </td>
                    <td>
                        
                        <textarea v-model="descripcion" rows="5"></textarea>

                    </td>
                    <td>

                        <input v-model="precio" type="number" placeholder="Precio por unidad">

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
    let imagen = ref("")
    let descripcion = ref("Descripcion del producto")
    let precio = ref(1)

    const valorImagen = (file) => imagen.value = file.target.files[0] 

    async function editarServicio(){

        let service = pinia.listaServicios[ruta.params.id];

        let informacion = new FormData()

        informacion.append("nombre", nombre.value)
        informacion.append("imagen", imagen.value)
        informacion.append("descripcion", descripcion.value)
        informacion.append("precio", precio.value)

        const peticion = await fetch(`http://localhost:8000/api/Servicio/${service.id}/`, {

            method: 'PUT',
            body: informacion

        });

        return peticion

    }

    const cargarDatos = async () => {

        pinia.modoEspera = true

        try{

            await editarServicio();
            enrutado.push('/servicios');
            pinia.getServices();
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

    .servicio-despues{

        width: 100%;
        height: 35%;
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

                input{

                    @include inputs();

                }

            }

            td:nth-child(3), th:nth-child(3){

                @include celdas('40%');

                textarea{

                    @include inputs();
                    resize: none;
                    width: 100%;

                }

            }

            .update{

                color: $first-color;
                cursor: pointer;

            }

        }

    }

</style>