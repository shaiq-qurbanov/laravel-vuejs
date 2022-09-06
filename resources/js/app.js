require('./bootstrap');
import { createApp } from 'vue'
import Welcome from './components/Welcome'
import router from "./router";


const app = createApp({})
app.component('welcome', Welcome)
app.use(router);
app.mount('#app')
