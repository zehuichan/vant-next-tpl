import { createApp } from 'vue'
import App from './App.vue'

// global css
import './assets/less/index.less'
import './theme/dark.less'

import { setupVant } from './plugins/vant'
import { setupGlobComponents } from './components'

import { setupStore } from './store'
import { router, setupRouter } from './router'
import { setupRouterGuard } from './router/guard'

function bootstrap() {
  const app = createApp(App)

  setupVant(app)
  setupGlobComponents(app)
  setupStore(app)
  setupRouter(app)
  setupRouterGuard(router)
  app.mount('#app')
}

bootstrap()