import { createApp } from 'vue'
import App from './App.vue'

import 'vant/lib/index.css'
import './assets/less/index.less'
import './theme/dark.less'
import vant from 'vant'
import components from './components'

// import store from './store' // for vuex
import { setupStore } from './store'
import { setupRouter } from './router'

import './permission'

const app = createApp(App)

app.use(vant)
app.use(components)
// app.use(store) // for vuex
setupStore(app)
setupRouter(app)
app.mount('#app')