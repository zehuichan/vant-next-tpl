import { useUserStore } from '@/store/modules/user'
import { useTitle } from '@vueuse/core'

export function setupRouterGuard(router) {
  const userStore = useUserStore()

  router.beforeEach(async (to, from, next) => {
    // set page title
    useTitle(to.meta.title)

    const hasInfo = userStore.userinfo

    if (hasInfo) {
      next()
    } else {
      try {
        // 拉取基本信息
        userStore.getUserInfo()
        next({ ...to, replace: true })
      } catch (error) {
        console.log('error', error)
        userStore.resetUserInfo()
        next('/500')
      }
    }

  })

  router.afterEach((to, from) => {

  })

  router.onError((error) => {
    console.log(error, '路由错误')
  })
}