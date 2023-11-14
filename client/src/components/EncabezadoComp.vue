<template>

    <div class="header-comp">
        
        <div class="header-comp-title">

            <h1> Serviteca </h1>

        </div>

        <div class="header-comp-url">

            <ul>

                <li>

                    <router-link class="url" to="/"> Inicio </router-link>

                </li>

                <li>

                    <router-link class="url" to="/productos"> Productos </router-link>
                    
                </li>

                <li>

                    <router-link class="url" to="/productos"> Servicios </router-link>
                    
                </li>

                <li>

                    <router-link class="url" to="/contacto"> Contacto </router-link>
                    
                </li>

                <li class="cart">

                    <router-link class="url" to="/carrito"> <v-icon name="md-shoppingcart" scale="1.3"></v-icon> </router-link>
                    
                </li>

                <li>

                    <router-link class="url" to="/"> 
                        
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bnFxG9BRaMl2_J9i0uIYO0OwySZ2gvNqCfoPwgc&s" alt=""> 
                    
                    </router-link>
                    
                </li>

            </ul>

        </div>

    </div>

</template>

<script lang="ts" setup>



</script>

<style lang="scss" scoped>

    .header-comp{

        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background: #0af;
        color: #fff;

        &-title{

            width: 25%;
            height: 60%;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            border-right: 3px solid #fff;

            h1{

                font-size: 40px;

            }

        }

        &-url{

            width: 65%;
            height: 100%;

            ul{

                width: 100%;
                height: 100%;
                display: grid;
                justify-items: center;
                align-items: center;
                list-style: none;
                grid-template-columns: repeat(4, 20%) 15% 5%;

                .url{

                    font-size: 22px;
                    color: #fff;
                    text-decoration: none;
                    
                    img{

                        border-radius: 100%;

                    }

                }

                .url:hover{

                    color: #444;

                }

                .cart{

                    justify-self: end;
                    padding-right: 25%;

                }

            }

        }

    }

</style>
