<template>

    <div class="producto-despues">
        
        <h1 class="producto-despues-titulo"> Editar producto </h1>
        <transition name="error">
            <p v-if="error" class="error"> Por favor no dejes ningun campo vacio </p>
        </transition>
        <table>

            <thead>

                <tr>

                    <th> Nombre </th>
                    <th> Categoria </th>
                    <th> Foto </th>
                    <th> Descripcion </th>
                    <th> Cantidad </th>
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

                        <select v-model="categoria">

                            <option v-for="(cate, i) in pinia.listaCategorias" :value="cate.id" :key="i">

                                {{ cate.nombre }}

                            </option>

                        </select>

                    </td>
                    <td>
                        <input type="file" :onchange="valorImagen">
                    </td>
                    <td>
                        
                        <textarea v-model="descripcion" rows="5"></textarea>

                    </td>
                    <td>

                        <input v-model="cantidad" type="number" placeholder="Cantidad">

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
    let categoria = ref("1")
    let imagen = ref("")
    let descripcion = ref("Descripcion del producto")
    let cantidad = ref(1)
    let precio = ref(1)

    let error = ref(false)

    const valorImagen = (file) => imagen.value = file.target.files[0]

    function validar(){

        let validacion = false

        if(nombre.value != "" && categoria.value != "" && imagen.value != "" && descripcion.value != "" && cantidad.value != "" && precio.value != ""){

            validacion = true

        }

        return validacion

    }

    async function editarProducto(){

        if(validar()){

            let prd = pinia.listaProductos[ruta.params.id];

            await pinia.eliminarImagen(prd.id, "Producto")

            let informacion = new FormData()

            informacion.append("nombre", nombre.value)
            informacion.append("categoria", categoria.value)
            informacion.append("imagen", imagen.value)
            informacion.append("descripcion", descripcion.value)
            informacion.append("cantidad", cantidad.value)
            informacion.append("precio", precio.value)

            const peticion = await fetch(`http://localhost:8000/api/Producto/${prd.id}/`, {

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

            const res = await editarProducto()
            if(res != "Error"){

                enrutado.push('/productos');
                pinia.getProducts();
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

    .producto-despues{

        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

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

                @include celdas("10%");

                input, select{

                    @include inputs();
                    width: 100%;

                }

            }

            td:nth-child(4), th:nth-child(4){

                @include celdas('20%');

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