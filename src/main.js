import { createApp } from 'vue'
import App from './App.vue'

// global css
import './assets/less/index.less'
import './theme/dark.less'

import { setupGlobComponents } from './components'
import { setupStore } from './store'
import { router, setupRouter } from './router'
import { setupRouterGuard } from './router/guard'
import { setupI18n } from '@/lang'



async function bootstrap() {
  const app = createApp(App)

  setupGlobComponents(app)
  setupStore(app)
  setupRouter(app)
  setupRouterGuard(router)
  setupI18n(app)
  app.mount('#app')
}

void bootstrap()
