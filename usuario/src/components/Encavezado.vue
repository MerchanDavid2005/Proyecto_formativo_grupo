<template>
    <nav class="menu">
        <div class="menu-container">
            <ul>
                <li :class="{ 'active': $route.path === '/carritoC' }" class="nav-link" @click="navigateTo('/carritoC')">Pedidos</li>
                <li :class="{ 'active': $route.path === '/serviciosC' }" class="nav-link" @click="navigateTo('/serviciosC')">Servicios</li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.menu-container {
    display: flex;
    justify-content: center;
}

.menu ul {
    list-style: none;
    display: flex;
}

.menu li {
    display: inline-block;
    padding: 20px 24px;
    text-decoration: none;
    background-color: #ddd;
    color: black;
    border-radius: 10px;
    margin-right: 20px;
    cursor: pointer; /* Cambia el cursor al pasar el ratón sobre los elementos */
}

.menu li.active {
    background-color: #0af;
    color: white;
    border-radius: 10px;
}
</style>
