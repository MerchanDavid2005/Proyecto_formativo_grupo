<template>
    <div class="new-service">
        
        <h1 class="new-service-title"> Registrar nuevo servicio </h1>
        <div class="new-service-campo">
            <label> Nombre del servicio:  </label>
            <input v-model="nombre" type="text" placeholder="Nombre">
        </div>
        <div class="new-service-campo">
            <label> Foto del servicio:  </label>
            <input type="file" :onchange="valorImagen">
        </div>
        <div class="new-service-campo">
            <label> Descripcion del servicio:  </label>
            <textarea v-model="descripcion" rows="5"></textarea>
        </div>
        <div class="new-service-campo">
            <label> Precio del servicio:  </label>
            <input v-model="precio" type="number" placeholder="Precio">
        </div>
        <div class="new-service-botones">
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
    let imagen = ref("")
    let descripcion = ref("Descripcion")
    let precio = ref(1)

    const valorImagen = (img) => imagen.value = img.target.files[0]

    async function crear(){

        let informacionServicio = new FormData();

        informacionServicio.append("nombre", nombre.value);
        informacionServicio.append("imagen", imagen.value);
        informacionServicio.append("descripcion", descripcion.value);
        informacionServicio.append("precio", precio.value);

        const peticion = await fetch("http://localhost:8000/api/Servicio/", {

            method: 'POST',
            body: informacionServicio

        });

        return peticion

    }

    async function cargar(){

        pinia.modoEspera = true

        try{

            await crear();
            emits('ocultar')
            pinia.getServices();
            nombre.value = "";
            imagen.value = "";
            descripcion.value = "Descripcion";
            precio.value = 1;
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

    .new-service{

        height: 75%;
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

        &-campo:nth-child(4){

            display: flex;
            flex-direction: column;
            align-items: flex-start;

            textarea{

                @include inputs();
                resize: none;
                margin: 10px 0;
                width: 100%;

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