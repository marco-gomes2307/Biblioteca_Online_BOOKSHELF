<template>
  <div class="book-card" @mouseover="hover = true" @mouseleave="hover = false" :class="{ 'hover': hover }">
    <img :src="book.image" alt="Capa do livro" class="book-image" />
    <h3>{{ book.title }}</h3>
    <p><strong>Autor:</strong> {{ book.author }}</p>
    <p>{{ book.year }}</p>
    <button @click="reserveBook" class="reserve-button">Reservar</button>
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
},
methods: {
  reserveBook() {
    // Lógica para reservar o livro
    console.log(`Livro reservado: ${this.book.title}`);
    // Aqui você pode adicionar lógica adicional, como enviar uma requisição para um servidor
  }
}
}
</script>