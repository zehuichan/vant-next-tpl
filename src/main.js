// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import '@vant/touch-emulator'

import {createApp} from 'vue'

import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/less/index.less'

import App from './App.vue'
import store from './store'
import router from './router'

import FastClick from 'fastclick'

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
const app = createApp(App)

app.use(Vant)
app.use(store)
app.use(router)
app.mount('#app')
