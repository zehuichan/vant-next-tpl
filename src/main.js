// with polyfills
import 'regenerator-runtime/runtime'

// 兼容pc端手势插件
import '@vant/touch-emulator'

// 移动端click300ms延迟
import FastClick from 'fastclick'

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
  }, false)
}

// init
import {createApp} from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(Vant)

app.mount('#app')
