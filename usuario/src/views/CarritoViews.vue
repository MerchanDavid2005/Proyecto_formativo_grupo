<!-- VistaProductos.vue -->
<template>
        <div>
            <encabezado />
            <router-view/>
        </div>
</template>

<script>
import Encabezado from '@/components/Encavezado.vue';

export default {
    components: {
        Encabezado,
    },
};
</script>

<style>
/* Estilos adicionales si es necesario */
</style>
