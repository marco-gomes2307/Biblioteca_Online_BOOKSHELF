// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa o router
import './assets/card.css';  // Importa o CSS do card
import './assets/navbar.css'; // Importa o CSS da navbar

createApp(App)
  .use(router) // Usa o router
  .mount('#app');