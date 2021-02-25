// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import '@vant/touch-emulator'

import {createApp} from 'vue'

import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/less/index.less'

import VComponents from '@/constants/vcomponents' // global components

import App from './App.vue'
import store from './store'
import router from './router'

import './permission'

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

if (process.env.NODE_ENV !== 'production') {
  const vConsole = require('vconsole')
  new vConsole()
}

console.log('vue', `v${app.version}`)
console.log('vant', `v${Vant.version}`)

app.use(Vant)
app.use(VComponents)
app.use(store)
app.use(router)
app.mount('#app')
