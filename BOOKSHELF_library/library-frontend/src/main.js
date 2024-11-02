import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa o router

createApp(App)
  .use(router) // Usa o router
  .mount('#app');