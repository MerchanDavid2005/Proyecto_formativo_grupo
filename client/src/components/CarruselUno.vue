<template>

    <div class="carrusel-uno-comp">

        <h1 class="carrusel-uno-comp-title"> Bienvenido a serviteca </h1>

        <div class="carrusel-uno-comp-carousel">

            <div class="carrusel-uno-comp-carousel-content">
                
                <img src="../assets/serviteca.jpeg" alt="">
                <img src="../assets/ServitecaDos.jpg" alt="">
                <img src="../assets/UnoAServiteca.jpg" alt="">
                <img src="../assets/serviteca.jpeg" alt="">
                <img src="../assets/ServitecaDos.jpg" alt="">

            </div>

        </div>
        
    </div>

</template>

<style lang="scss" scoped>

    .carrusel-uno-comp{

        width: 90%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10vh 0;
        background: #2cbdff;
        border-radius: 15px;

        &-title{

            margin-top: 5%;
            font-size: 50px;
            color: #fff;

        }

        &-carousel{

            width: 80%;
            height: 60vh;
            overflow: hidden;
            margin: 10vh 0;

            @keyframes carrusel {
                
                0%{

                    transform: translateX(0);

                }

                100%{

                    transform: translateX(-300%)

                }

            }

            &-content{

                width: 400%;
                height: 100%;
                display: flex;

                img{

                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    animation-name: carrusel;
                    animation-duration: 20s;
                    animation-timing-function: cubic-bezier(1,1,1,1);
                    animation-fill-mode: backwards;
                    animation-iteration-count: infinite;
    
    
                }

            }

        }

    }

</style>