<!-- ProductosViews.vue -->
<template>
    <div>
        <center>
            <h1 class="prod"><span>Bienvenido</span> a nuetros productos</h1>
        </center>
        <br>
        <br>
        <hr>
        <center>
            <div class="buscador">
                <div class="search-bar input-container">
                    <input v-model="searchTerm" class="input" type="text" placeholder="Buscar productos" @input="filterProducts" />
                    <span class="icon"> 
                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </span>
                </div>
            </div>
        </center>
        <br>
        <hr>
        <div class="container">
            <div v-for="producto in productos" :key="producto.id" class="card shadow">
                <img :src=" producto.imagen" alt="imagen de {{ producto.name }}" class="imgP">
                <p class="p"><span>Producto:</span> {{ producto.nombre }}</p>
                <p class="p"><span>Precio: </span> <span class="pre">$</span> {{ formatPrice(producto.precio) }}</p>
                <button class="carrito" @click="agregarAlCarrito(producto)">Agregar al carrito</button>
            </div>
        </div>
        <Carrito class="oculto" ref="carrito" />

    </div>
</template>

<script>
    import axios from 'axios';
    import Carrito from './Carrito.vue';

    export default {
    data() {
        return {
            productos: [],
            searchTerm: '',
        };
    },
    mounted() {
        this.fetchProductos();
    },
    methods: {
        fetchProductos() {
            axios.get('http://127.0.0.1:8000/api/Producto/')
                .then(response => {
                    this.productos = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        filterProducts() {
            const searchTerm = this.searchTerm.toLowerCase();
            if (searchTerm === '') {
                this.fetchProductos();
            } else {
                this.productos = this.productos.filter(producto => {
                    return producto.nombre.toLowerCase().includes(searchTerm);
                });
            }
        },
        async fetchProductos() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/Producto/');
                this.productos = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        agregarAlCarrito(producto) {
            this.$refs.carrito.agregarAlCarrito(producto);
        },

        formatPrice(price) {
            // Formatear el precio con separadores de miles
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
    components:{
        Carrito,
    }
};
</script>

<style>

.prod{
    color: #E3AF61;
}

.oculto{
    display: none;
}

.p{
    color: white;
}

.imgP{
    border-radius: 5px; 
    width: 110px;
    height: 110px;
}

.card {
    width: 320px;
    background: #fff480;
    color: black;
    position: relative;
    border-radius: 2.5em;
    padding: 2em;
    transition: transform 0.4s ease;
    
  }
  
  .card .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5em;
    height: 100%;
    transition: transform 0.4s ease;
  }
  
  .card .card-top, .card .card-bottom {
    display: flex;
    justify-content: space-between;
  }
  
  .card .card-top p, .card .card-top .card-title, .card .card-bottom p, .card .card-bottom .card-title {
    margin: 0;
  }
  
  .card .card-title {
    font-weight: bold;
  }
  
  .card .card-top p, .card .card-bottom p {
    font-weight: 600;
  }
  
  .card .card-bottom {
    align-items: flex-end;
  }
  
  .card .card-image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    pointer-events: none;
  }
  
  .card .card-image svg {
    width: 4em;
    height: 4em;
    transition: transform 0.4s ease;
  }
  
  .card:hover {
    cursor: pointer;
    transform: scale(0.97);
  }
  
  .card:hover .card-content {
    transform: scale(0.96);
  }
  
  .card:hover .card-image svg {
    transform: scale(1.05);
  }
  
  .card:active {
    transform: scale(0.9);
  }

    .carrito{
        display: inline-block;
        padding: 10px 20px;
        margin-top: 20px;
        text-align: center;
        text-decoration: none;
        background-color: #E3AF61; 
        color: #fff;
        border-radius: 5px;
        border: 1px solid #E3AF61;

    }

    .carrito:hover{
        background-color: #A17245;
    }

    .buscador{
        padding: 1rem;
    }

    .btn{
        display: inline-block;
        padding: 10px 20px;
        margin-top: 20px;
        text-align: center;
        text-decoration: none;
        background-color: #007bff; 
        color: #fff;
        border-radius: 5px;
    }
    .btn-primary:hover{
        background-color: #0056b3;
    }
    .ver{
        display: inline-block;
        padding: 10px 20px;
        margin-top: 20px;
        text-align: center;
        text-decoration: none;
        background-color: #007bff; 
        color: #fff;
        border-radius: 5px;
    }
    .ver:hover{
        background-color: #0056b3;
    }

    .pre{
        color: red;
    }
    span{
        color: rgb(255, 255, 255);
    }
    .container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    <!-- .card{
        background-color: rgba(52, 52, 52, 0.701);
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px;
        text-align: center;
        width: 250px; 
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    } -->

    .input-container {
        width: 220px;
        position: relative;
    }

    .icon {
        position: absolute;
        right: 10px;
        top: calc(50% + 5px);
        transform: translateY(calc(-50% - 5px));
    }

    .input {
        width: 100%;
        height: 40px;
        padding: 10px;
        transition: .2s linear;
        border: 2.5px solid black;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .input:focus {
        outline: none;
        border: 0.5px solid black;
        box-shadow: -5px -5px 0px black;
    }

    .input-container:hover > .icon {
        animation: anim 1s linear infinite;
    }

    @keyframes anim {
        0%,
        100% {
            transform: translateY(calc(-50% - 5px)) scale(1);
        }

        50% {
            transform: translateY(calc(-50% - 5px)) scale(1.1);
        }
    }

</style>