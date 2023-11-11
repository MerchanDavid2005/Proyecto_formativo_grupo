<template>

    <div class="body">
        
        <header class="header">

            <EncabezadoComp />

        </header>

        <main class="content">

            <slot></slot>

            <div class="content-whatsapp">
                
                <a href="http://google.com" target="_blank"> 
                    
                    <v-icon name="bi-whatsapp" scale="3"></v-icon> 
                
                </a>
                
            </div>

        </main>

    </div>

</template>

<script lang="ts" setup>

    import EncabezadoComp from "../components/EncabezadoComp.vue";

</script>

<style lang="scss" scoped>

    .body{

        width: 100%;
        height: 100vh;

        .header{

            width: 100%;
            height: 10%;

        }

        .content{

            width: 100%;
            height: 90%;

            &-whatsapp{

                position: absolute;
                z-index: 1000;
                bottom: 3%;
                right: 2%;
                width: max-content;
                height: max-content;
                
                a{

                    color: #00ff00;

                }

                a:hover{

                    color: #009900;

                }

            }

        }

    }

</style>