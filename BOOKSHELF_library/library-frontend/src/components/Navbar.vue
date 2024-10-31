<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/bookshelf-logo.png" alt="Bookshelf Logo" />
      <span>BOOKSHELF</span>
    </div>
    <div class="nav-links">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Pesquisar..."
        class="search-bar"
      />
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearch() {
      console.log("Pesquisando por:", this.searchQuery);
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #2c3e50;
  color: white;
}
.logo {
  display: flex;
  align-items: center;
}
.logo img {
  height: 40px;
  margin-right: 10px;
}
.search-bar {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
