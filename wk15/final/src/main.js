import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SfVueAnimatedCursor from 'sf-vue-animated-cursor'


import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(SfVueAnimatedCursor, { basic: false });

app.mount('#app')
