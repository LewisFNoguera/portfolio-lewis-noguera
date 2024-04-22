import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ModalView from './components/ModalView.vue'

createApp(App).component('ModalView', ModalView).use(router).mount('#app')
