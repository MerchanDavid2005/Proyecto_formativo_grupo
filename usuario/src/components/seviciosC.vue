<template>
    <div>
        <encabezado />
        <center>
            <div>
                <h1>soy Servicios</h1>
            </div>
        </center>
    </div>
</template>
<script>
import Encabezado from '@/components/Encavezado.vue';

export default {
    components: {
            Encabezado,
            
        
    },
    data(){
        return {
            servicios:[]
        }
    },
    methods:{
        fetchProductos() {
            axios.get('http://127.0.0.1:8000/api/Servicio/')
                .then(response => {
                    this.servicios = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
    }
};
</script>