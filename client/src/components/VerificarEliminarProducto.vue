<template>

    <div class="panel-verificar-eliminar">

        <h1> Eliminar </h1>
        <p> ¿Estas seguro de querer eliminar este producto? </p>
        <div class="panel-verificar-eliminar-botones">
            <button @click="emits('verificar')"> Cancelar </button>
            <button @click="cargarPagina"> Confirmar </button>
        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import { defineEmits } from 'vue';
    import { useStore } from '../store/pinia'

    const emits = defineEmits(['verificar'])
    const pinia = useStore()

    const eliminar = async () => {

        pinia.carritoUsuario = pinia.informacionUsuario.carrito.filter(prd => prd.id != pinia.idProductoEliminar)

        const peticion = fetch(`http://localhost:8000/api/Usuario/${pinia.informacionUsuario.id}/`, {

            method: 'PATCH',
            body: JSON.stringify({

                carrito: JSON.stringify(pinia.carritoUsuario)

            }),
            headers: {"content-type": "application/json"}

        })

        return peticion

    }

    const cargarPagina = async () => {

        try{

            await eliminar()
            await pinia.traerInformacionUsuario()
            emits('verificar')

        }catch(e){

            console.log(e)

        }

    }

</script>

<style lang="scss" scoped>

    .panel-verificar-eliminar{

        width: 35%;
        height: max-content;
        padding: 15px;
        border-radius: 15px;
        background: #f05;
        color: #fff;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 1000000;

        h1{

            margin: 15px 0;

        }


        &-botones{

            width: 100%;
            height: max-content;
            display: flex;

            button{

                border: 0;
                padding: 15px;
                border-radius: 15px;
                background: #fff;
                font-weight: lighter;
                margin: 20px 10px 0 0;
                cursor: pointer;

            }

        }

    }

</style>