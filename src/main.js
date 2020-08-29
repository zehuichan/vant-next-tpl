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
    FastClick.attach(document.body)
  }, false)
}

// init
import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)

import {Toast, Dialog, Notify} from 'vant'

app.use(Toast)
app.use(Dialog)
app.use(Notify)

app.mount('#app')
