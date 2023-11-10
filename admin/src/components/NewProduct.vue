<template>
    <div class="new-product">
        
        <h1 class="new-product-title"> Registrar nuevo producto </h1>
        <transition name="error">
            <p v-if="error" class="error"> Por favor no dejes ningun campo vacio </p>
        </transition>
        <div class="new-product-campo">
            <label> Nombre del producto:  </label>
            <input v-model="nombre" type="text" placeholder="Nombre">
            <label> Categoria del producto:  </label>
            <select v-model="categoria">
                <option v-for="(cate, i) in pinia.listaCategorias" :key="i" :value="cate.id">
                    {{ cate.nombre }}
                </option>
            </select>
        </div>
        <div class="new-product-campo">
            <label> Foto del producto:  </label>
            <input type="file" :onchange="valorImagen">
        </div>
        <div class="new-product-campo-descripcion">
            <label> Descripcion del producto:  </label>
            <textarea v-model="descripcion" rows="5"></textarea>
        </div>
        <div class="new-product-campo">
            <label> Cantidad de unidades:  </label>
            <input v-model="cantidad" type="number" placeholder="Cantidad">
            <label> Precio del producto:  </label>
            <input v-model="precio" type="number" placeholder="Precio">
        </div>
        <div class="new-product-botones">
            <button @click="emits('ocultar')"> Cerrar </button>
            <button @click="recargar"> Crear </button>
        </div>

    </div>
</template>

<script setup>

    import { useStore } from '@/store/pinia';
    import { ref, defineEmits } from 'vue';

    const emits = defineEmits(['ocultar'])
    const pinia = useStore()

    let nombre = ref("")
    let categoria = ref("1")
    let imagen = ref("")
    let descripcion = ref("Descripcion")
    let cantidad = ref(1)
    let precio = ref(1)

    let error = ref(false)

    const valorImagen = (img) => imagen.value = img.target.files[0] 

    function validar(){

        let validacion = false

        if(nombre.value != "" && categoria.value != "" && imagen.value != "" && descripcion.value != "" && cantidad.value != "" && precio.value != ""){

            validacion = true

        }

        return validacion

    }

    async function crear(){

        if(validar()){

            let cuerpoInformacion = new FormData()

            cuerpoInformacion.append("nombre", nombre.value)
            cuerpoInformacion.append("categoria", categoria.value)
            cuerpoInformacion.append("descripcion", descripcion.value)
            cuerpoInformacion.append("cantidad", cantidad.value)
            cuerpoInformacion.append("precio", precio.value)
            cuerpoInformacion.append("imagen", imagen.value)

            const peticion = await fetch("http://localhost:8000/api/Producto/", {

                method: 'POST',
                body: cuerpoInformacion

            });

            return peticion

        }else{

            return "Error"

        }

    }

    async function recargar(){

        pinia.modoEspera = true

        try{

            const res = await crear();

            if(res != "Error"){

                emits('ocultar')
                pinia.getProducts();
                nombre.value = "";
                categoria.value = "1";
                imagen.value = "";
                descripcion.value = "Descripcion";
                cantidad.value = 1;
                precio.value = 1;
                pinia.modoEspera = false;
                pinia.success = true
                setTimeout(() => {
                    
                    pinia.success = false

                }, 3000);

            }else{

                pinia.modoEspera = false;
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

    .new-product{

        height: 90%;
        width: 50%;
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

        .error{

            text-align: center;
            margin: 15px 0;
            color: #f00

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

        &-campo-descripcion{

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
            height: 100%;
            display: flex;
            align-items: flex-end;
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

    @media(min-width:1600px){

        .new-product{

            height: 75%;

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