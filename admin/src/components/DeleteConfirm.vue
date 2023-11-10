<template>

    <div class="panel-eliminar">
        
        <h1 class="panel-eliminar-titulo"> Eliminar </h1>
        <p class="panel-eliminar-mensaje"> ¿Estas seguro de querer eliminar {{ props.mensaje }}? </p>
        <div class="panel-eliminar-botones">
            <button @click="cargarDatos(props.modelo)"> Aceptar </button>
            <button @click="emits('ocultar')"> Cancelar </button>
        </div>

    </div>

</template>

<script setup>

    import { defineEmits, defineProps } from 'vue';
    import { useStore } from '@/store/pinia'

    const pinia = useStore()
    const props = defineProps(['mensaje', 'modelo'])
    const emits = defineEmits(['ocultar'])

    const eliminar = async (modelo) => {

        const peticion = await pinia.eliminarRegistro(modelo);

        return peticion

    }

    const cargarDatos = async (modelo) => {

        try{

            const res = await eliminar(modelo)

            try{

                if(res != "Error"){

                    if(modelo == "Producto"){

                        pinia.getProducts();

                    }else if(modelo == "Categoria"){

                        pinia.getCategorys();

                    }else if(modelo == "Servicio"){

                        pinia.getServices()

                    }else if(modelo == "Pedido"){

                        pinia.getOrders();

                    }else{

                        pinia.getUsers();

                    }

                    emits('ocultar')
                    pinia.modoEspera = false
                    pinia.success = true

                    setTimeout(() => {
                        
                        pinia.success = false

                    }, 3000);

                }else{

                    pinia.modoEspera = false
                    pinia.error = true
                    setTimeout(() => {
                        
                        pinia.error = false

                    }, 3000);
                    emits('ocultar')

                }
                
            }catch(e){

                console.log("Error")

            }

        }catch(e){

            pinia.modoEspera = false
            pinia.error = true
            setTimeout(() => {
                    
                pinia.error = false

            }, 3000);
            emits('ocultar')

        }

    }

</script>

<style lang="scss" scoped>

    .panel-eliminar{

        width: 25%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        z-index: 10000;
        background: #f05;
        color: #fff;
        border-radius: 15px;

        &-titulo{

            margin: 20px 0;

        }

        &-botones{

            width: 100%;
            height: max-content;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 20px 0;

            button:nth-child(1){

                @include botones($forth-color);
                font-weight: lighter;
                margin-left: 10px;
                color: #000;

            }

            button:nth-child(2){

                @include botones($forth-color);
                font-weight: lighter;
                margin-left: 10px;
                color: #000;

            }

        }

    }

</style>