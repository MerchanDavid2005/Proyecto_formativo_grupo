<template>
  <!-- <body> -->
    <nav class="navbar container">
      <ul class="nav-list">
        <li class="principio">
          <h1>Serviteca  |</h1> 
        </li>
        <li>
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li>
          <router-link to="/productos" class="nav-link">Productos</router-link>
        </li>
        <li>
          <router-link to="/ContactoU" class="nav-link">Contacto📲</router-link>
        </li>
        <li>
          <router-link to="/carrito" class="nav-link"><img width="20" height="20" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/shopping-cart--v2.png" alt="shopping-cart--v2"/>
          </router-link>
        </li>
      </ul>
    </nav>
    <br>
    <br>
    <router-view/>
  <!-- </body> -->
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box; 
}

.principio{
  display: inline-block;
  padding: 20px 24px;
  text-decoration: none;
  color: white;
}

.navbar {
  background-color: #131313;
  box-shadow: 0px 20px 30px -10px rgb(38, 57, 77);
  text-align: center;
}

.nav-list {
  list-style: none; /* Elimina los marcadores de lista */
  padding: 0;
  display: flex;
}

.nav-link {
  display: inline-block;
  padding: 20px 24px;
  text-decoration: none;
  color: white;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #ddd;
  color: black;
}


</style>
