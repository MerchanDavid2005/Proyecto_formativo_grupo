<template>

    <div class="panel-verify">

        <div class="panel-verify-img">
            <img :src="pinia.productoParaVerificar.imagen" :alt="pinia.productoParaVerificar.nombre">
        </div>
        <div class="panel-verify-data">
            <h1 class="panel-verify-data-title"> {{ pinia.productoParaVerificar.nombre }} </h1>
            <p> Cantidad disponible: <strong> {{ pinia.productoParaVerificar.cantidad }} </strong> </p>
            <div class="panel-verify-data-compra">
                <p> Unidades a comprar:  <strong> {{ unidades }} </strong> </p>
                
                <button
                    @click="sumar"
                    v-show="unidades < pinia.productoParaVerificar.cantidad"
                    class="sumar"> +
                </button>

                <button 
                    @click="restar" 
                    v-show="unidades > 1" 
                    class="restar"> -
                </button>

            </div>
            <p> Valor total: <strong> {{ pinia.productoParaVerificar.precio }}  </strong> </p>
            <p class="panel-verify-data-descripcion"> {{ pinia.productoParaVerificar.descripcion }} </p>
            <div class="panel-verify-data-confirm">
                <button @click="emits('verificar'); unidades = 1"> Cancelar </button>
                <button v-show="pinia.sesionIniciada" @click="cargarDatos"> Confirmar </button>
                <button v-show="!pinia.sesionIniciada" @click="enrutado.push('/iniciar_sesion')"> Iniciar sesion </button>
            </div>
        </div>

    </div>

</template>

<script lang="ts" setup>

    import { ref, defineEmits } from 'vue';
    import { useStore } from '../store/pinia';
    import { useRouter } from 'vue-router';

    const enrutado = useRouter()
    const emits = defineEmits(['verificar'])
    const pinia = useStore()

    let unidades = ref(1)

    const sumar = () => {

        const precioNormal = pinia.precioProducto.replace(/[.]/g, '')
        const precioFormateado = parseFloat(precioNormal)

        unidades.value++
        const total = unidades.value * precioFormateado

        let opciones = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };
        pinia.productoParaVerificar.precio = total.toLocaleString('es-ES', opciones);

    }

    const restar = () => {

        const precioNormal = pinia.precioProducto.replace(/[.]/g, '')
        const precioFormateado = parseFloat(precioNormal)

        unidades.value--
        const total = unidades.value * precioFormateado

        let opciones = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };
        pinia.productoParaVerificar.precio = total.toLocaleString('es-ES', opciones);

    }

    const verificarCompra = async () => {

        let productoRepetido = false

        for(let i of pinia.carritoUsuario){

            if(i.id == pinia.productoParaVerificar.id){

                i.unidades += unidades.value
                productoRepetido = true
                break

            }

        }

        if(!productoRepetido){

            const precioNormal = pinia.precioProducto.replace(/[.]/g, '')
            const precioFormateado = parseFloat(precioNormal) * unidades.value

            pinia.carritoUsuario.push({

                "id": pinia.productoParaVerificar.id,
                "img": pinia.productoParaVerificar.imagen,
                "nombre": pinia.productoParaVerificar.nombre,
                "precio": precioFormateado.toString(),
                "unidades": unidades.value

            })       

        }

        pinia.carritoUsuario.forEach(prd => {

            const precioNormal = prd.precio.replace(/[.]/g, '')
            const precioFormateado = parseFloat(precioNormal).toString()

            prd.precio = precioFormateado

        })

        const peticion = fetch(`http://localhost:8000/api/Usuario/${pinia.informacionUsuario.id}/`, {

            method: 'PATCH',
            body: JSON.stringify({

                carrito: JSON.stringify(pinia.carritoUsuario)

            }),
            headers: {"content-type": "application/json"}

        })

        let opciones = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };
        pinia.precioTotalCarritoFormateado = pinia.precioTotalCarrito.toLocaleString('es-ES', opciones)

        unidades.value = 1

        return peticion

    }

    const cargarDatos = async () => {

        pinia.cargando = true

        try{

            await verificarCompra()
            await pinia.traerInformacionUsuario()
            emits('verificar')
            pinia.cargando = false

        }catch(e){

            pinia.cargando = true

        }

    }

</script>

<style lang="scss" scoped>

    .panel-verify{

        width: 50%;
        height: 80%;
        padding: 15px;
        border-radius: 15px;
        background: #fff;
        position: absolute;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        outline: 3px solid #000;

        &-img{

           width: 40%;
           height: 85%;
           padding: 15px;
           border-right: 2px solid #000;
           box-sizing: border-box;

        }

        &-data{

            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;

            &-title{

                text-align: center;
                margin: 50px 0;

            }

            p{

                font-size: 20px;
                margin: 10px 0;

            }

            &-compra{

                display: flex;
                align-items: center;

                .sumar{

                    font-size: 20px;
                    padding: 5px 10px;
                    border-radius: 10px;
                    color: #fff;
                    font-weight: bold;
                    background: #0fa;
                    border: 0;
                    margin: 10px;
                    cursor: pointer;
    
                }
    
                .restar{
    
                    font-size: 20px;
                    padding: 5px 10px;
                    border-radius: 10px;
                    color: #fff;
                    font-weight: bold;
                    background: #f05;
                    border: 0;
                    margin: 10px;
                    cursor: pointer;
    
                }

            }

            &-descripcion{

                height: 30%;
                overflow: auto;

            }

            &-confirm{

                height: max-content;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;

                button:nth-child(1){

                    padding: 15px;
                    border-radius: 15px;
                    border: 0;
                    background: #f05;
                    color: #fff;
                    font-weight: bold;
                    cursor: pointer;

                }

                button:nth-child(2){

                    padding: 15px;
                    border-radius: 15px;
                    border: 0;
                    background: #0fa;
                    color: #fff;
                    font-weight: bold;
                    cursor: pointer;

                }

                button:nth-child(3){

                    padding: 15px;
                    border-radius: 15px;
                    border: 0;
                    background: #0af;
                    color: #fff;
                    font-weight: bold;
                    cursor: pointer;

                }

            }
                
        }

    }

</style>