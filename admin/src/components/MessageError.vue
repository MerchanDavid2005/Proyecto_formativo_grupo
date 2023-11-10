<template>

    <div class="error">

        <h1> Error </h1>
        <p> Se ha producido un error, por favor revisa tu conexion a internet </p>

    </div>

</template>

<style lang="scss" scoped>

    .error{

        position: absolute;
        z-index: 10000000;
        top: 3%;
        right: 2%;
        width: 30%;
        height: max-content;
        padding: 15px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #fff;
        background: #f05;

        h1{

            margin: 5px 0;

        }

    }

</style>