<template>

    <div class="cuerpo-login">

        <div class="cuerpo-login-content">

            <LoginComp />

        </div>

        <div class="cuerpo-login-message">

            <transition name="success">
                <MessageRegister v-show="pinia.usuarioCreado" />
            </transition>

        </div>

    </div>

</template>

<script setup>

    import { useStore } from '@/store/pinia';

    import LoginComp from '@/components/LoginComp.vue';
    import MessageRegister from '@/components/MessageRegister.vue'

    const pinia = useStore()

</script>

<style lang="scss" scoped>

    .cuerpo-login{

        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(to top left, #ddd, #0ff, #0af);

        &-content{

            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: static;
            z-index: 10;

        }

        &-message{

            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 2%;
            display: flex;
            justify-content: flex-end;
            position: absolute;
            overflow: hidden;

        }

    }

    @keyframes mensajeCreado{

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

    .success-enter-active{

        animation: mensajeCreado 1s;

    }

    .success-leave-active{

        animation: mensajeCreado 1s reverse;

    }

</style>