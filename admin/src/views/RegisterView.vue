<template>

    <div class="cuerpo-register">

        <div :class="{'cuerpo-register-content': !codigo, 'cuerpo-register-content-none': codigo}">

            <RegisterComp @codigo="mostrarCode" />
        
        </div>

        <div class="cuerpo-register-code">
        
            <transition name="codigo">
            
                <VerifyCode v-show="codigo" />

            </transition>
        
        </div>

        <div class="cuerpo-register-error">
        
            <transition name="error">
            
                <MessageError v-show="pinia.error" />

            </transition>
        
        </div>

    </div>

</template>

<script setup>

    import RegisterComp from '@/components/RegisterComp.vue';
    import VerifyCode from '@/components/VerifyCode.vue';
    import MessageError from '@/components/MessageError.vue';

    import { ref } from 'vue';
    import { useStore } from '@/store/pinia';

    const pinia = useStore()
    let codigo = ref(false)

    const mostrarCode = () => codigo.value = !codigo.value

</script>

<style lang="scss" scoped>

    .cuerpo-register{

        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background: linear-gradient(to top left, #ddd, #0ff, #fff);

        &-content{

            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: static;
            z-index: 10;

        }

        &-content-none{

            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: static;
            z-index: 10;
            pointer-events: none;
            background: #444;
            filter: brightness(20%);

        }

        &-code{

            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;

        }

        &-error{

            width: 100%;
            height: 100%;
            position: absolute;
            box-sizing: border-box;
            padding: 2%;
            display: flex;
            justify-content: flex-end;
            overflow: hidden;

        }

    }

    @keyframes mensajeError{

        0%{

            transform: translateX(600px);

        }

        50%{

            transform: translateX(-50px);

        }

        100%{

            transform: translateX(0);

        }

    }

    .codigo-enter-active, .codigo-leave-active{

        transition: transform 1s ease;

    }

    .codigo-enter-from, .codigo-leave-to{

        transform: scale(0);

    }

    .error-enter-active{

        animation: mensajeError 1s;

    }

    .error-leave-active{

        animation: mensajeError 1s reverse;

    }

</style>