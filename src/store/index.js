import { createPinia } from 'pinia'

const store = createPinia()

export function setupStore(app) {
  app.use(store)
}

export { useAppStore } from './modules/app'
export { useUserStore } from './modules/user'
export { useErrorLogStore } from './modules/errorLog'
export { store }