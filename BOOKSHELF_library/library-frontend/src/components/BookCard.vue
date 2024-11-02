<template>
    <div class="book-card">
      <img :src="book.image" alt="Capa do livro" class="book-image" />
      <h3>{{ book.title }}</h3>
      <p><strong>Autor:</strong> {{ book.author }}</p>
      <p>{{ book.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      book: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .book-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    width: 400px; /* Largura do card */
    text-align: left;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .book-card h3 {
    margin-bottom: 0.5rem;
  }
  
  .book-card p {
    margin: 0.5rem 0;
  }
  
  .book-image {
    max-width: 100%; /* Faz com que a imagem não ultrapasse a largura do card */
    height: auto; /* Mantém a proporção da imagem */
    border-radius: 5px; /* Bordas arredondadas para a imagem */
  }
  </style>