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
// Importa o componente BookCard
import BookCard from './components/BookCard.vue'; 

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
          title: 'Harry Potter e o prisioneiro de Azkaban',
          author: 'J.K. Rowling',
          year: '1999',
          image: 'https://books.google.com.br/books/publisher/content?id=qDYQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0qQYW0uegAdEsHCpJk2ZmSwdZIfA&w=1280'
        },
        {
          id: 4,
          title: 'Harry Potter e o Cálice de Fogo',
          author: 'J.K. Rowling',
          year: '2000',
          image: 'https://books.google.com.br/books/publisher/content?id=ZDgQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0u44NS8H0cOHCafDTnemDFuXgv7A&w=1280'
        },
        {
          id: 5,
          title: 'Harry Potter e a Ordem da Fênix',
          author: 'J.K. Rowling',
          year: '2003',
          image: 'https://books.google.com.br/books/publisher/content?id=9TcQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2FKM9mfr_xa-lQhD1DS2VFo7EBWA&w=1280'
        },
        {
          id: 6,
          title: 'Harry Potter e o Enigma do Príncipe',
          author: 'J.K. Rowling',
          year: '2005',
          image: 'https://books.google.com.br/books/publisher/content?id=yjUQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U3IsCzNQPypdQetDvLvwev_U129_Q&w=1280'
        },
        {
          id: 7,
          title: 'Harry Potter e as Relíquias da Morte',
          author: 'J.K. Rowling',
          year: '2009',
          image: 'https://books.google.com.br/books/publisher/content?id=-DgQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2r7a71CgdDHa5vXleyiP3gzS4b2Q&w=1280'
        },
        {
          id: 8,
          title: 'Harry Potter e a Criança Amaldiçoada',
          author: 'J.K. Rowling',
          year: '2016',
          image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ50KWOufU7UQCYDKTcCqFNQ-7IV_rE-cnxv2vYTQ8KT1modPCR'
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