<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-left">
        <router-link to="/" class="navbar-item">Início</router-link>
      </div>
      <div class="navbar-center">
        <input type="text" placeholder="Pesquisar..." v-model="searchQuery" class="search-input" />
      </div>
      <div class="navbar-right">
        <router-link to="/login" class="navbar-item">Login</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #35495e;
  color: white;
}

.navbar-left, .navbar-right {
  flex: 1; /* Toma espaço igual */
}

.navbar-center {
  flex: 2; /* Toma mais espaço para centralizar o input de pesquisa */
  display: flex;
  justify-content: center; /* Centraliza o campo de pesquisa */
}

.navbar-item {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
}

.search-input {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  width: 60%; /* Ajuste o tamanho do campo de pesquisa */
}
</style>
