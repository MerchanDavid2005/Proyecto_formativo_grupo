<template>

    <MainDefault>

        <div class="body-edit-category">

            <CategorySelected />
            <EditCategory />

        </div>

    </MainDefault>

</template>

<script setup>

    import MainDefault from '@/layouts/MainDefault.vue';
    import CategorySelected from '@/components/CategorySelected.vue';
    import EditCategory from '@/components/EditCategory.vue';
    import { useRouter } from 'vue-router'

    const enrutado = useRouter()

    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){

        enrutado.push("/")

    }

</script>

<style lang="scss" scoped>

    .body-edit-category{

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