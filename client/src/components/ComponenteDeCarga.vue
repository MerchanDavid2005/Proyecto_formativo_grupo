<template>

    <div class="componente-carga">

        <strong>

            <span> Cargando </span>
            <p> . </p>
            <p> . </p>
            <p> . </p>
            <p> . </p>
        
        </strong>
        
    </div>

</template>

<style lang="scss" scoped>

    .componente-carga{

        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #444;
        position: absolute;
        z-index: 1000000;
        color: #fff;
        overflow: hidden;

        @keyframes cargando {
            
            0%{

                transform: translateY(0);

            }

            100%{

                transform: translateY(-15px);

            }

        }

        strong{

            font-size: 60px;
            display: flex;

        }

        span{

            margin-right: 20px;

        }

        @for $i from 1 through 5{

            p:nth-child(#{$i}){

                font-size: 60px;
                margin: 5px;
                animation-name: cargando;
                animation-delay: $i * 0.1s;
                animation-duration: 0.35s;
                animation-iteration-count: infinite;
                animation-direction: alternate-reverse;
    
            }

        }

    }

</style>