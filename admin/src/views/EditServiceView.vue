<template>

    <MainDefault>

        <div class="body-edit-service">

            <ServiceSelected />
            <EditService />

        </div>

    </MainDefault>

</template>

<script setup>

    import MainDefault from '@/layouts/MainDefault.vue';
    import ServiceSelected from '@/components/ServiceSelected.vue';
    import EditService from '@/components/EditService.vue';
    import { useRouter } from 'vue-router'

    const enrutado = useRouter()
    
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){

        enrutado.push("/")

    }

</script>

<style lang="scss" scoped>

    .body-edit-service{

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