<template>

    <div class="productos-view">
  
      <ProductosComp />
    
    </div>
  
</template>

<script lang="ts" setup>

    import ProductosComp from '../components/ProductosComp.vue';

</script>

<style lang="scss" scoped>

    .productos-view{

        width: 100%;
        height: 100%;
        overflow: auto;

    }

</style>
  