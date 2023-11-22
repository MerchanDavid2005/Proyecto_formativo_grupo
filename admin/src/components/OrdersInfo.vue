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

                    <th> Usuario </th>
                    <th> Lista productos </th>
                    <th> Fecha </th>

                </tr>

            </thead>

            <tbody>

                <tr v-for="(order, i ) in pinia.listaPedidosFilter" :key="i">

                    <td> {{ order.usuario }} </td>
                    <td>
                        <span v-for="(prd, i) in order.productos" :key="i">
                            {{ prd }},
                        </span>
                    </td>
                    <td> 
                        {{ order.fecha.slice(0,10) }} --- {{ order.fecha.slice(11, 19) }} 
                    </td>

                </tr>

            </tbody>

        </table>

    </div>
</template>

<script setup>

    import { useStore } from '@/store/pinia'
    import { ref, onMounted, watch } from 'vue';

    const pinia = useStore()

    let usuario = ref("")
    let mes = ref("01")
    let año = ref("2022")

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

    ]

    let años = ref([

        "2022",

    ])

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

            let añoRepetido = false

            for(let a of años.value){

                (i.fecha.slice(0, 4) == a) ? (añoRepetido = true) : añoRepetido = false

            }

            if(!añoRepetido){
                
                años.value.push(i.fecha.slice(0, 4))

            }

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

                @include celdas('20%')

            }

            td:nth-child(2), th:nth-child(2){

                @include celdas('60%');

            }

            td:nth-child(2){

                text-align: left;

            }

        }

    }

</style>