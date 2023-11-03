<template>
    <div class="new-category">
        
        <h1 class="new-category-title"> Registrar nueva categoria </h1>
        <div class="new-category-campo">
            <label> Nombre de la categoria:  </label>
            <input v-model="nombre" type="text" placeholder="Nombre">
        </div>
        <div class="new-category-botones">
            <button @click="emits('ocultar')"> Cerrar </button>
            <button @click="cargar"> Crear </button>
        </div>

    </div>
</template>

<script setup>

    import { useStore } from '@/store/pinia';
    import { ref, defineEmits } from 'vue';

    const emits = defineEmits(['ocultar'])
    const pinia = useStore()

    let nombre = ref("")

    async function crear(){

        const peticion = await fetch("http://localhost:8000/api/Categoria/", {

            method: 'POST',
            body: JSON.stringify({

                nombre: nombre.value,

            }),
            headers: {"content-type" : "application/json"}

        });

        return peticion

    }

    async function cargar(){

        pinia.modoEspera = true

        try{

            await crear();
            emits('ocultar')
            pinia.getCategorys();
            nombre.value = "";
            pinia.modoEspera = false;
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

    .new-category{

        height: 40%;
        width: 30%;
        padding: 15px;
        border-radius: 10px;
        background: #fff;
        color: #000;
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 100000;
        outline: 2px solid #000;

        &-title{

            text-align: center;
            margin: 30px 0;

        }

        &-campo{

            display: flex;
            margin: 10px 0;
            align-items: center;

            input, select{

                @include inputs();
                margin: 0 10px;

            }

        }

        &-botones{

            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;

            button:nth-child(1){

                @include botones($third-color)

            }

            button:nth-child(2){

                @include botones($first-color)

            }

        }

    }

</style>