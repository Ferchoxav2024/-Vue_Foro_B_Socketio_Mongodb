import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { io } from 'socket.io-client';

const token = localStorage.getItem('token');
const socket = io('http://localhost:3000', {
  auth: {
    token: token
  }
});

const app = createApp(App);
app.config.globalProperties.$socket = socket;

app.use(router);
app.mount('#app');
