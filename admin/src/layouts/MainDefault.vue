<template>

    <div class="all">

        <div class="interfaz-carga">
    
            <LoaderComp v-show="pinia.modoEspera" />

        </div>

        <div :class="{'main': !pinia.modoEspera, 'main-none': pinia.modoEspera}">

            <NavTop @panel="mostrarPanel" />
    
            <div class="interfaz-panel">
    
                <transition>
                    <PanelTables v-show="panel" @ocultar="ocultarPanel" @nuevo="mostrarTabla" />
                </transition>
    
                <transition>
                    <NewProduct v-show="product" @ocultar="ocultarTablas" />
                </transition>
                
                <transition>
                    <NewCategory v-show="category" @ocultar="ocultarTablas" />
                </transition>
    
                <transition>
                    <NewService v-show="service" @ocultar="ocultarTablas" />
                </transition>

                <transition name="messages">

                    <MessageError v-show="pinia.error" />

                </transition>

                <transition name="messages">

                    <MessageSuccess v-show="pinia.success" />

                </transition>
    
            </div>
            
            <div class="main-cuerpo">
    
                <NavLeft />
                <slot></slot>
    
            </div>
    
        </div>

    </div>

</template>

<script setup>

    import NavTop from "@/components/NavTop.vue";
    import NavLeft from "@/components/NavLeft.vue";
    import PanelTables from "@/components/PanelTables.vue";
    import NewProduct from "@/components/NewProduct.vue";
    import NewCategory from "@/components/NewCategory.vue";
    import NewService from "@/components/NewService.vue";
    import LoaderComp from "@/components/LoaderComp.vue";
    import MessageSuccess from "@/components/MessageSuccess.vue";
    import MessageError from "@/components/MessageError.vue";

    import { ref } from "vue";
    import { useStore } from '../store/pinia'

    const pinia = useStore()

    let panel = ref(false)

    let product = ref(false)
    let service = ref(false)
    let category = ref(false)

    const mostrarPanel = () => panel.value = true
    const ocultarPanel = () => panel.value = false

    function mostrarTabla(tabla){

        if(tabla == "producto"){

            product.value = true
            service.value = false
            category.value = false

        }else if(tabla == "servicio"){

            product.value = false
            service.value = true
            category.value = false

        }else{

            product.value = false
            service.value = false
            category.value = true

        }

        ocultarPanel()

    }

    function ocultarTablas(){

        
        product.value = false
        service.value = false
        category.value = false

    }

</script>

<style lang="scss" scoped>

    .all{

        width: 100%;
        height: 100vh;
        display: flex;
        
        .interfaz-carga{
    
            position: absolute;
            width: 100%;
            height: 100%;

        }

        .main{

            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 10;
    
            &-cuerpo{
    
                width: 100%;
                height: 90%;
                display: flex;
                justify-content: space-between;
                position: static;
                z-index: 10000;
            }
    
            .interfaz-panel{
    
                position: absolute;
                width: 100%;
                height: 90vh;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
    
            }
    
    
        }
    
        .main-none{
    
            width: 100%;
            height: 100vh;
            background: #444;
            filter: brightness(20%);
            pointer-events: none;
            position: absolute;
            z-index: 10;
    
            &-cuerpo{
    
                width: 100%;
                height: 90%;
                display: flex;
                justify-content: space-between;
                position: static;
                z-index: 100000;
            }

            .interfaz-panel{
    
                position: absolute;
                width: 100%;
                height: 90vh;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
    
            }
    
        }

    }

    @keyframes mensaje {
        
        0%{

            transform: translateX(500px);

        }

        50%{

            transform: translateX(-50px);

        }

        100%{

            transform: translateX(0);

        }

    }

    .v-enter-active, .v-leave-active{

        transition: transform 0.5s ease-in-out;

    }

    .v-enter-from, .v-leave-to{

        transform: scale(0.1);

    }

    .messages-enter-active{

        animation: mensaje 1s ease;

    }

    .messages-leave-active{

        animation: mensaje 1s ease reverse;

    }


</style>