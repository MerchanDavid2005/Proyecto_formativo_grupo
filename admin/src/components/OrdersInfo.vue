<template>
    <div class="orders-info">

        <h1 class="orders-info-title"> Pedidos </h1>

        <div class="orders-info-search">

            <label> Buscar por usuario: </label>
            <input v-model="usuario" type="text" placeholder="Nombre de usuario">
            <button @click="filtrarUsuario"> Buscar </button>
            <label> Buscar por mes </label>
            <select v-model="mes">
                <option v-for="(mes, i) in meses" :key="i" :value="mes.id"> {{ mes.mes }} </option>
            </select>
            <label> Buscar por año </label>
            <select v-model="año">
                <option v-for="(year, i) in años" :key="i" :value="year"> {{ year }} </option>
            </select>
            <button @click="pinia.listaPedidosFilter = pinia.listaPedidos"> Todo </button>

        </div>
        
        <table>

            <thead>

                <tr>

                    <th> Fecha </th>
                    <th> Usuario </th>
                    <th> Lista productos </th>
                    <th> Precio </th>
                    <th> Estado </th>
                    <th> Entregar </th>

                </tr>

            </thead>

            <tbody>

                <tr v-for="(order, i ) in pinia.listaPedidosFilter" :key="i">

                    <td> 
                        {{ order.fecha.slice(0,10) }} --- {{ order.fecha.slice(11, 19) }} 
                    </td>
                    <td> {{ order.usuario }} </td>
                    <td>
                        <span v-for="(prd, i) in order.productos" :key="i">
                            {{ prd }},
                        </span>
                    </td>
                    <td>
                        {{ order.total }}
                    </td>
                    <td v-if="order.entregado">
                        Entregado
                    </td>
                    <td v-if="!order.entregado">
                        No entregado
                    </td>

                    <td v-if="!order.entregado">
                        <button @click="cargarDatos(order.id)"> Entregar </button> 
                    </td>

                    <td v-if="order.entregado">
                        Entregado
                    </td>

                </tr>

                <tr>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        Total: {{ ganancias }}
                    </td>
                    <td></td>
                    <td></td>

                </tr>

            </tbody>

        </table>

    </div>
</template>

<script setup>

    import { useStore } from '@/store/pinia'
    import { ref, watch, onMounted } from 'vue';

    const pinia = useStore()

    let usuario = ref("")
    let mes = ref("01")
    let año = ref("2022")
    let ganancias = ref(0)

    let meses = [

        {id: "01", mes: "Enero"},
        {id: "02", mes: "Febrero"},
        {id: "03", mes: "Marzo"},
        {id: "04", mes: "Abril"},
        {id: "05", mes: "Mayo"},
        {id: "06", mes: "Junio"},
        {id: "07", mes: "Julio"},
        {id: "08", mes: "Agosto"},
        {id: "09", mes: "Septiembre"},
        {id: "10", mes: "Octubre"},
        {id: "11", mes: "Noviembre"},
        {id: "12", mes: "Diciembre"},

    ];

    let años = ref([

        "2022",
        "2023",
        "2024",
        "2025",
        "2026"

    ]);

    const entregar = async (id) => {

        const peticion = await fetch(`http://127.0.0.1:8000/api/Pedido/${id}/`, {

            method: 'PATCH',
            body: JSON.stringify({

                entregado: true

            }),
            headers: {"content-type": "application/json"}

        })

        const respuesta = await peticion.json()

        return respuesta

    }

    const cargarDatos = async (id) => {

        pinia.modoEspera = true

        try{

            await entregar(id)
            pinia.getOrders()
            pinia.modoEspera = false
            pinia.success = true
            setTimeout(() => {

                pinia.success = false

            }, 3500)

        }catch(e){

            pinia.modoEspera = false
            pinia.error = true
            setTimeout(() => {

                pinia.error = false

            }, 3500)

        }

    }

    const filtrarUsuario = () => {

        pinia.listaPedidosFilter = pinia.listaPedidos.filter(order => 
        
            order.usuario.toLowerCase().startsWith(usuario.value.toLowerCase())

        )

    }

    watch(mes, () => {

        pinia.listaPedidosFilter = pinia.listaPedidos.filter(order => 
        
            order.fecha.slice(5, 7) == mes.value && order.fecha.slice(0, 4) == año.value 

        )

    })

    watch(año, () => {

        pinia.listaPedidosFilter = pinia.listaPedidos.filter(order => 

            order.fecha.slice(5, 7) == mes.value && order.fecha.slice(0, 4) == año.value 

        )

    })

    onMounted(() => {

        for(let i of pinia.listaPedidos){

            ganancias.value += i.total

        }

    })

</script>

<style lang="scss" scoped>

    .orders-info{

        width: 100%;
        height: 100%;
        padding: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;

        &-title{

            margin-bottom: 5%;
            font-size: 50px;

        }
        
        &-search{

            align-self: flex-start;
            display: flex;
            width: 100%;
            margin-bottom: 50px;
            align-items: center;

            label{

                margin: 0 10px

            }

            input{

                @include inputs();
                width: 20%

            }

            select{

                @include inputs();
                width: 10%

            }

            button{

                @include botones($second-color);
                margin-left: 10px;

            }

        }

        table{

            width: 95%;
            height: max-content;

            td, td{

                @include celdas('15%');

            }

            td:nth-child(1), td:nth-child(1){

                @include celdas('20%');

            }

            td:nth-child(3){

                text-align: left;
                overflow: auto;
                height: 100px;

            }

            td:nth-child(4), td:nth-child(4){

                @include celdas('12%');

            }

            td{

                button{

                    @include botones($first-color);
                    margin-left: 10px;
    
                }

            }

        }

    }

</style>