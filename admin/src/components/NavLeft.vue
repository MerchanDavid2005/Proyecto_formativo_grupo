<template>
    <div class="navLeft">
        
        <div class="navLeft-img">

            <img src="https://thumbs.dreamstime.com/z/pi%C3%B1a-con-gafas-de-sol-en-la-hermosa-playa-verano-divertida-268298070.jpg" alt="">

        </div>

        <div class="navLeft-data">

            <ul>

                <router-link class="url" to="/productos">
                    Productos
                    <v-icon style="color:#fff; margin:0 5px" name="bi-box-seam" scale="1.3"></v-icon> 
                </router-link>
                <router-link class="url" to="/categorias">
                    Categorias
                    <v-icon style="color:#fff; margin:0 5px" name="md-category" scale="1.3"></v-icon>
                </router-link>
                <router-link class="url" to="/servicios">
                    Servicios
                    <v-icon style="color:#fff; margin:0 5px" name="md-homerepairservice-round" scale="1.3"></v-icon> 
                </router-link>
                <router-link class="url" to="/pedidos">
                    Pedidos 
                    <v-icon style="color:#fff; margin:0 5px" name="bi-bag-check-fill" scale="1.3"></v-icon>
                </router-link>
                <router-link class="url" to="/usuarios">
                    Usuarios 
                    <v-icon style="color:#fff; margin:0 5px" name="fa-user-friends" scale="1.3"></v-icon>
                </router-link>
                
            </ul>

        </div>

        <div class="navLeft-tema">

            <v-icon style="color: #fff; margin: 0 10px" name="fa-lightbulb" scale="1.5"></v-icon>
            <div class="navLeft-tema-barra">
                <div class="navLeft-tema-barra-boton"></div>
            </div>
            <v-icon style="color: #fff; margin: 0 10px" name="md-darkmode-round" scale="1.5"></v-icon>

        </div>

    </div>
</template>

<style lang="scss" scoped>

    .navLeft{

        width: 15%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: #0af;
        position: static;
        z-index: 10;

        &-img{

            width: 50%;
            height: 30%;

        }

        &-data{

            width: 60%;
            height: 50%;
            border-top: 2px solid #fff;
            border-bottom: 2px solid #fff;

            ul{

                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                list-style: none;

                .url{

                    font-size: 18px;
                    text-decoration: none;
                    color: #fff;
                    transition: color 0.5s ease;

                }

                .url:hover{

                    color: #555;

                }

            }

        }

        &-tema{

            width: 100%;
            height: 20%;
            display: flex;
            align-items: center;
            justify-content: center;

            &-barra{

                width: 20%;
                height: 15px;
                border-radius: 30px;
                background: #eee;
                display: flex;
                align-items: center;
                justify-content: flex-start;

                &-boton{

                    width: 50%;
                    height: 30px;
                    border-radius: 100%;
                    background: #ddd;

                }

            }

        }

    }

</style>