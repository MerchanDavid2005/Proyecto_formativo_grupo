<template>

    <div class="body">
        
        <header :class="{'header': !pinia.cargando, 'header-none': pinia.cargando}">

            <EncabezadoComp />

        </header>

        <main class="content">

            <div class="content-data">

                <slot></slot>

            </div>

            <div class="content-carga">
                
                <ComponenteDeCargaVue v-show="pinia.cargando" />
                
            </div>

        </main>

    </div>

</template>

<script lang="ts" setup>

    import ComponenteDeCargaVue from "../components/ComponenteDeCarga.vue";
    import EncabezadoComp from "../components/EncabezadoComp.vue";

    import { useStore } from "../store/pinia";

    const pinia = useStore()

</script>

<style lang="scss" scoped>

    .body{

        width: 100%;
        height: 100vh;

        .header{

            width: 100%;
            height: 10%;

        }

        .header-none{

            width: 100%;
            height: 10%;
            pointer-events: none;

        }

        .content{

            width: 100%;
            height: 90%;
            display: flex;
            flex-direction: column;

            &-data{

                width: 100%;
                height: 100%;
                position: static;
                z-index: 10;

            }

            &-carga{

                width: 100%;
                height: 90%;
                position: absolute;
                overflow: hidden;

            }

        }

    }

</style>