import { createApp } from 'vue'
import App from './App.vue'

import 'vant/lib/index.css';
import './assets/less/index.less'
import './theme/light.less'
import './theme/dark.less'
import vant from 'vant'

import store from './store'
import router from './router'

import './permission'

const app = createApp(App)

app.use(vant)
app.use(store)
app.use(router)
app.mount('#app')
