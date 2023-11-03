<template>

    <div class="producto-despues">
        
        <h1> Editar producto </h1>
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

    const valorImagen = (file) => imagen.value = file.target.files[0]

    async function editarProducto(){

        let prd = pinia.listaProductos[ruta.params.id];

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

    }

    const cargarDatos = async () => {

        pinia.modoEspera = true

        try{

            await editarProducto()
            enrutado.push('/productos');
            pinia.getProducts();
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

    .producto-despues{

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

                @include celdas('10%');

                input, select{

                    @include inputs();

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

</style>