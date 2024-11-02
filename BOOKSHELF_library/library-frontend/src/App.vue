<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-brand">
        <h1>BOOKSHELF</h1>
      </div>
      <div class="navbar-search">
        <input type="text" v-model="searchQuery" placeholder="Pesquisar..." />
        <button @click="performSearch">Pesquisar</button>
      </div>
      <div class="navbar-menu">
        <a href="#" class="navbar-item">Home</a>
        <a href="#" class="navbar-item">Login</a>
      </div>
    </nav>
    <main>
      <h2>Bem-vindo ao Meu Site</h2>
      <p>Esta é uma página inicial simples usando Vue 3.</p>
      <div class="book-list">
        <BookCard
          v-for="book in books"
          :key="book.id"
          :book="book"
        />
      </div>
    </main>
  </div>
</template>

<script>
import BookCard from './components/BookCard.vue'; // Importa o componente BookCard

export default {
  components: {
    BookCard // Registra o componente
  },

  data() {
  return {
    searchQuery: '',
    books: [
      {
        id: 1,
        title: 'Harry potter 1997',
        author: 'J.R.R. Tolkien',
        description: 'Uma épica história de fantasia.',
        image: 'https://books.google.com.br/books/publisher/content?id=GjgQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U32CKE-XFfMvnbcz1qW0PS46Lg-Ew&w=1280' // Adicione a URL da imagem
      },
      {
        id: 2,
        title: 'Harry potter 1998',
        author: 'J.K. Rowling',
        description: 'Uma distopia sobre um futuro totalitário.',
        image: 'https://books.google.com.br/books/publisher/content?id=hjcQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0MuXkWY6t7UZcHk_zr0rBIUtBhwQ&w=1280' // Adicione a URL da imagem
      },
      {
        id: 3,
        title: 'Harry potter 1998',
        author: 'J.K. Rowling',
        description: 'Um romance sobre ciúmes e traições.',
        image: 'https://books.google.com.br/books/publisher/content?id=ZDgQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0u44NS8H0cOHCafDTnemDFuXgv7A&w=1280' // Adicione a URL da imagem
      },
      {
        id: 4,
        title: 'Harry potter 1998',
        author: 'J.K. Rowling',
        description: 'Um romance sobre ciúmes e traições.',
        image: 'https://books.google.com.br/books/publisher/content?id=ZDgQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0u44NS8H0cOHCafDTnemDFuXgv7A&w=1280' // Adicione a URL da imagem
      },
      // Adicione mais livros conforme necessário
    ]
  };
},

  methods: {
    performSearch() {
      alert(`Você pesquisou por: ${this.searchQuery}`);
      this.searchQuery = ''; // Limpa o campo de pesquisa após a busca
    }
  }
}

</script>

<style>
* {
  margin: 0; /* Remove a margem padrão de todos os elementos */
  padding: 0; /* Remove o preenchimento padrão de todos os elementos */
  box-sizing: border-box; /* Inclui o preenchimento e a borda na largura e altura total dos elementos */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #000000;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  padding: 1rem;
  color: white;
}

.navbar-brand h1 {
  margin: 0;
}

.navbar-search {
  flex: 1; /* Faz a barra de pesquisa ocupar o espaço restante */
  display: flex;
  justify-content: center; /* Centraliza o conteúdo da barra de pesquisa */
  padding: 5px;
}

.navbar-search input {
  padding: 0.5rem;
  margin-right: 0.5rem;
  text-align: center;
}

.navbar-search button {
  padding: 0.5rem;
  background-color: #5cb85c;
  color: white;
  border: none;
  cursor: pointer;
}

.navbar-search button:hover {
  background-color: #4cae4c;
}

.navbar-menu {
  display: flex;
  justify-content: flex-end; /* Alinha os itens do menu à direita */
}

.navbar-item {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
}

.navbar-item:hover {
  text-decoration: underline;
}

/* Estilos existentes... */

.book-list {
  display: flex;
  flex-wrap: wrap; /* Permite que os cards se ajustem em várias linhas */
  justify-content: center; /* Centraliza os cards */
}

.book-card {
  margin: 2rem; /* Margem entre os cards */
}
</style>