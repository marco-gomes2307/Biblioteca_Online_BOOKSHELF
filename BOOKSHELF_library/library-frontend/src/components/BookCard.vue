<template>
    <div class="book-card" @mouseover="hover = true" @mouseleave="hover = false" :class="{ 'hover': hover }">
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
    },
    data() {
      return {
        hover: false // Estado para controlar o efeito de hover
      };
    }
  }
  </script>
  
  <style scoped>
  .book-card {
    border: 1px solid #ccc;
    border-radius: 30px;
    padding: 2rem;
    margin: 3rem;
    width: 370px; /* Largura do card */
    text-align: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease; /* Adiciona uma transição suave */
  }
  
  .book-card.hover {
    transform: translateY(-10px); /* Move o card para cima ao passar o mouse */
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
    border-radius: 10px; /* Bordas arredondadas para a imagem */
  }
  </style>