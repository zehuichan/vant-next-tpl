import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { useTitle } from '@/hooks'

export function setupRouterGuard(router) {
  const appStore = useAppStore()
  const userStore = useUserStore()

  router.beforeEach(async (to, from) => {

    // set page title
    document.title = useTitle(to.meta.title)

    appStore.setThemeMode(appStore.theme)

    const hasInfo = userStore.userinfo

    if (hasInfo) {

    } else {
      try {
        // 拉取基本信息
        userStore.getUserInfo()
      } catch (error) {
        console.log('error', error)
        userStore.resetUserInfo()
        return '/500'
      }
    }

  })

  router.afterEach((to, from) => {

  })

  router.onError((error) => {
    console.log(error, '路由错误')
  })
}