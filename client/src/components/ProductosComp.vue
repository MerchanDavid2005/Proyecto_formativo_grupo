<template>

    <div class="productos-comp">
        
        <div class="productos-comp-filtrar">
            <input v-model="buscado" type="text" placeholder="Buscar producto">
            <button class="boton-buscar" @click="buscarProducto"> <v-icon name="bi-search" scale="1.3"></v-icon> </button>
            <select v-model="categoria">
                <option v-for="(cate,  i) in pinia.listaCategorias" :key="i" :value="cate.nombre">
                    {{ cate.nombre }}
                </option>
            </select>
            <button @click="mostrarTodo" class="boton-todo"> Todo </button>
        </div>

        <div class="productos-comp-productos">

            <h1 v-if="pinia.listaProductosFiltrar.length < 1"> No se han encontrado resultados de tu busqueda </h1>

            <div v-for="(prd, i) in pinia.listaProductosFiltrar" :key="i" class="productos-comp-productos-prd">

                <img :src="prd.imagen" :alt="prd.nombre">
                <p> <strong> Producto:  </strong> {{ prd.nombre }} </p>
                <p> <strong> Precio: </strong> <span style="color:#00ffaa"> $ </span> {{ prd.precio }} </p>
                <button @click="verificarProducto(prd.id)"> Agregar al carrito </button>

            </div>

        </div>

    </div>

</template>

<script lang="ts" setup>

    import { useStore } from '../store/pinia'
    import { ref, watch, defineEmits } from 'vue';

    const pinia = useStore()
    const emits = defineEmits(['verificar'])

    let buscado = ref("")
    let categoria = ref("Carro")

    const buscarProducto = () => {

        pinia.listaProductosFiltrar = pinia.listaProductos.filter(prd => 
        
            prd.nombre.toLowerCase().startsWith(buscado.value.toLowerCase())
            
        )

    }

    watch(categoria, () => {

        pinia.listaProductosFiltrar = pinia.listaProductos.filter(prd =>

            prd.categoria == categoria.value

        )

    })

    const mostrarTodo = () => {
        
        pinia.listaProductosFiltrar = pinia.listaProductos
        buscado.value = ""

    }

    const verificarProducto = async (id: number) => {

        try{

            await pinia.traerProductoPorId(id)
            await pinia.traerInformacionUsuario()
            emits('verificar')

        }catch(e){

            console.log(e)

        }

    }

</script>

<style lang="scss" scoped>

    .productos-comp{

        width: 100%;
        height: 100%;

        &-filtrar{

            width: 90%;
            height: max-content;
            display: grid;
            align-items: center;
            grid-template-columns: 40% 10% 40% 10%;
            margin: 5%;
            border-bottom: 5px solid #0af;

            input{

                height: max-content;
                padding: 15px;
                border-radius: 15px;
                border: 0;
                background: #eee;
                color: #000;

            }

            select{

                justify-self: center;
                height: max-content;
                padding: 15px;
                border-radius: 15px;
                border: 0;
                background: #eee;
                color: #000;
                width: 70%;

            }

            .boton-buscar{

                width: max-content;
                height: max-content;
                padding: 10px;
                border-radius: 100%;
                border: 0;
                background: #0af;
                color: #fff;
                font-weight: bold;
                margin: 20px;
                cursor: pointer;

            }

            .boton-todo{
            
                height: max-content;
                justify-self: flex-end;
                padding: 15px;
                border-radius: 15px;
                border: 0;
                background: #0af;
                color: #fff;
                font-weight: bold;
                cursor: pointer;

            }

        }

        &-productos{

            width: 100%;
            height: max-content;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;

            &-prd{

                width: 15%;
                height: 330px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                margin-bottom: 2%;

                img{

                    width: 100%;
                    height: 50%;
                    margin-bottom: 15px;

                }

                button{

                    padding: 15px;
                    border-radius: 15px;
                    color: #fff;
                    background: #0af;
                    font-weight: bold;
                    border: 0;
                    cursor: pointer;

                }

            }

        }

    }

</style>