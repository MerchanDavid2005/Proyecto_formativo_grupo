<template>
    <div class="filter">
        
        <div class="filter-search">

            <h1> Filtrar por busqueda </h1>
            <div>
                <input v-model="nombre" type="text" placeholder="Nombre">
                <button @click="buscar"> Buscar </button>        
            </div>

        </div>

        <div class="filter-category">

            <h1> Filtrar por categoria </h1>
            <ul>
                <li @click="pinia.listaCategoriasFilter = pinia.listaCategorias, pinia.listaProductosFilter = pinia.listaProductos"> Todas </li>
                <li @click="filtrar(cate.nombre)" v-for="(cate, i) in pinia.listaCategorias" :key="i">
                    {{ cate.nombre }}
                </li>
            </ul>

        </div>

    </div>
</template>

<script setup>

    import { useStore } from '@/store/pinia'
    import { ref } from 'vue'

    let nombre = ref("")
    const pinia = useStore()

    const buscar = () => {

        pinia.listaProductosFilter = pinia.listaProductos.filter(

            i => i.nombre.toLowerCase().startsWith(nombre.value.toLowerCase())

        )

        pinia.listaCategoriasFilter = pinia.listaCategorias.filter(

            i => i.nombre.toLowerCase().startsWith(nombre.value.toLowerCase())

        )


    }

    const filtrar = (categoria) => {

        pinia.listaCategoriasFilter = pinia.listaCategorias.filter(i => i.nombre == categoria)
        pinia.listaProductosFilter = pinia.listaProductos.filter(i => i.categoria == categoria)

    }

</script>

<style lang="scss" scoped>

    .filter{

        width: 20%;
        height: 100%;
        background: #0af;
        color: #fff;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        border-radius: 15px;

        &-search{

            width: 80%;
            padding: 10px;
            height: 35%;
            border-bottom: 2px solid #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

            h1{

                font-size: 30px;
                text-align: center;
                margin: 20px 0;

            }

            input{

                @include inputs();
                width: 55%;
                margin-right: 10px;

            }

            input:focus{

                outline: 0

            }

            button{

                @include botones($first-color);
                width: 35%;

            }

        }

        &-category{

            width: 80%;
            padding: 10px;
            overflow: auto;
            height: 65%;

            h1{

                font-size: 30px;
                text-align: center;
                margin: 20px 0;                

            }

            ul{

                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                list-style: none;

                li{

                    font-size: 20px;
                    margin: 15px 0;

                }

                li:hover{

                    color: #ddd;
                    cursor: pointer;

                }

            }

        }

    }

</style>