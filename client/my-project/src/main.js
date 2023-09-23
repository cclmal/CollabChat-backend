import { createApp } from 'vue'
import './styles.css'
import App from './App.vue'
import io from 'socket.io-client';

const app = createApp(App);

const socket = io('http://localhost:3000');
export const socketSymbol = Symbol('socket');


app.provide(socketSymbol, socket);
app.mount('#app')
