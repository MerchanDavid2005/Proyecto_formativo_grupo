<template>

    <MainDefault>

        <div class="body-edit-product">

            <ProductSelected />
            <EditProduct />

        </div>

    </MainDefault>

</template>

<script setup>

    import MainDefault from '@/layouts/MainDefault.vue';
    import ProductSelected from '@/components/ProductSelected.vue';
    import EditProduct from '@/components/EditProduct.vue';
    import { useRouter } from 'vue-router'

    const enrutado = useRouter()

    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){

        enrutado.push("/")

    }

</script>

<style lang="scss" scoped>

    .body-edit-product{

        width: 90%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 1%;
        position: static;
        z-index: 10;

    }

</style>