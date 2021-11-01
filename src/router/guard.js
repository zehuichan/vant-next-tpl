import { useAppStore } from '@/store/modules/app'
import { useTitle } from '@/hooks/useTitle'

export function setupRouterGuard(router) {
  const appStore = useAppStore()

  router.beforeEach(async (to, from) => {

    // set page title
    document.title = useTitle(to.meta.title)

    appStore.setThemeMode(appStore.theme)
  })

  router.afterEach((to, from) => {

  })

  router.onError((error) => {
    console.log(error, '路由错误')
  })
}