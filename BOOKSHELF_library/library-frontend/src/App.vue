<template>
  <div id="app">
    
      <nav class="navbar">

      <div class="navbar-brand">
      <a class="navbar-brand" href="App.vue">BOOKSHELF</a>
      </div>
      
      <div class="navbar-search">
        <input type="text" v-model="searchQuery" placeholder="Título" />
        <button @click="performSearch">Pesquisar</button>
      </div>

      <div class="nav-login">
      <a class="nav-login" href="Login.vue">Login</a>
      
      </div>

    </nav>

    <main>
      <div class="book-list">
        <BookCard
          v-for="book in filteredBooks"
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
      searchQuery: '', // Adiciona a propriedade searchQuery
      books: [
        {
          id: 1,
          title: 'Harry Potter e a Pedra Filosofal',
          author: 'J.K. Rowling',
          year: '1997',
          image: 'https://books.google.com.br/books/publisher/content?id=GjgQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U32CKE-XFfMvnbcz1qW0PS46Lg-Ew&w=1280'
        },
        {
          id: 2,
          title: 'Harry Potter e a Câmara Secreta',
          author: 'J.K. Rowling',
          year: '1998',
          image: 'https://books.google.com.br/books/publisher/content?id=hjcQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0MuXkWY6t7UZcHk_zr0rBIUtBhwQ&w=1280'
        },
        {
          id: 3,
          title: 'Harry Potter e o Cálice de Fogo',
          author: 'J.K. Rowling',
          year: '2000',
          image: 'https://books.google.com.br/books/publisher/content?id=ZDgQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0u44NS8H0cOHCafDTnemDFuXgv7A&w=1280'
        },
        {
          id: 4,
          title: 'Harry Potter e a Ordem da Fênix',
          author: 'J.K. Rowling',
          year: '2003',
          image: 'https://books.google.com.br/books/publisher/content?id=9TcQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2FKM9mfr_xa-lQhD1DS2VFo7EBWA&w=1280'
        },
      ]
    };
  },

  computed: {
    filteredBooks() {
      // Retorna os livros que contêm a searchQuery no título (case insensitive)
      return this.books.filter(book => 
        book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },

  methods: {
    performSearch() {
      alert(`Você pesquisou por: ${this.searchQuery}`);
      this.searchQuery = ''; // Limpa o campo de pesquisa após a busca
    }
  }
}
</script>

