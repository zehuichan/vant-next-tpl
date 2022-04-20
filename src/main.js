import { createApp } from 'vue'
import App from './App.vue'

// global css
import './assets/less/index.less'

import { setupVant } from './plugins/vant'
import { setupStore } from './store'
import { router, setupRouter } from './router'
import { setupRouterGuard } from './router/guard'
import { setupI18n } from './lang'
import { registerComponents } from './components'
import { setupErrorLog } from './plugins/error-log'

async function bootstrap() {
  const app = createApp(App)

  // Configure store
  setupStore(app)

  // Configure vant-ui
  setupVant(app)

  // Register global components
  registerComponents(app)

  // Configure routing
  setupRouter(app)

  // router-guard
  setupRouterGuard(router)
  setupI18n(app)
  setupErrorLog(app)
  app.mount('#app')
}

void bootstrap()
