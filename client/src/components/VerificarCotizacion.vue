<template>

    <div class="panel-verificar-cotizacion">

        <h1> Realizar cotizacion </h1>
        <p> ¿Estas seguro de querer realizar una cotizacion con estos productos? </p>
        <div class="panel-verificar-cotizacion-botones">
            <button @click="emits('cotizar')"> Cancelar </button>
            <button @click="cargarPagina"> Confirmar </button>
        </div>
        
    </div>

</template>

<script lang="ts" setup>

    import { defineEmits } from 'vue';
    import { useStore } from '../store/pinia';

    const pinia = useStore()
    const emits = defineEmits(['cotizar'])

    const realizarcotizacion = async () => {

        const peticion = await fetch("http://localhost:8000/api/Pedido/", {

            method: 'POST',
            body: JSON.stringify({

                usuario: pinia.informacionUsuario.id,
                productos: JSON.stringify(pinia.informacionUsuario.carrito)

            }),
            headers: {"content-type": "application/json"}

        })

        return peticion.json()

    }

    const vaciarCarrito = async () => {

        pinia.informacionUsuario.carrito = []

        const peticion = await fetch(`http://localhost:8000/api/Usuario/${pinia.informacionUsuario.id}/`, {

            method: 'PATCH',
            body: JSON.stringify({

                carrito: JSON.stringify(pinia.informacionUsuario.carrito)

            }),
            headers: {"content-type": "application/json"}

        })

        return peticion.json()

    }

    const cargarPagina = async () => {

        pinia.cargando = true

        try{

            await realizarcotizacion()
            await vaciarCarrito()
            await pinia.traerInformacionUsuario()
            emits('cotizar')
            pinia.cargando = false

        }catch(e){

            pinia.cargando = false
            emits('cotizar')

        }

    }

</script>

<style lang="scss" scoped>

    .panel-verificar-cotizacion{

        width: 35%;
        height: max-content;
        padding: 15px;
        border-radius: 15px;
        background: #0fa;
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