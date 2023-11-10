<template>

    <div class="servicio-despues">
        
        <h1> Editar servicio </h1>
        <transition name="error">
            <p v-if="error" class="error"> Por favor no dejes ningun campo vacio </p>
        </transition>
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

    let error = ref(false)

    const valorImagen = (file) => imagen.value = file.target.files[0]

    const validar = () => {

        let validado = false

        if(nombre.value != "" && imagen.value != "" && descripcion.value != "" && precio.value != ""){

            validado = true

        }

        return validado

    }

    async function editarServicio(){

        if(validar()){

            let service = pinia.listaServicios[ruta.params.id];

            await pinia.eliminarImagen(service.id, "Servicio")

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

        }else{

            return "Error"

        }

    }

    const cargarDatos = async () => {

        pinia.modoEspera = true

        try{

            const res = await editarServicio();
            if(res != "Error"){

                enrutado.push('/servicios');
                pinia.getServices();
                pinia.modoEspera = false
                pinia.success = true
                setTimeout(() => {
                    
                    pinia.success = false

                }, 3000);

            }else{

                pinia.modoEspera = false
                error.value = true
                setTimeout(() => {

                    error.value = false

                }, 3500)

            }

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
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        &-titulo{

            height: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;

        }

        .error{

            text-align: center;
            margin: 15px 0;
            color: #f00

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

    .error-enter-active, .error-leave-active{

        transition: all 1s ease;

    }

    .error-enter-from, .error-leave-to{

        transform: translateX(-50px);
        opacity: 0;

    }

</style>