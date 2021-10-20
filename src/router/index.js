import { createRouter, createWebHashHistory } from 'vue-router'

// basic components
import BasicLayout from '@/layouts/BasicLayout'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

const WHITE_NAME_LIST = []

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/BasicLayout',
    component: BasicLayout,
    children: [
      {
        path: '/home',
        component: () => import('@/views/home'),
        meta: { title: '首页' },
      },
      {
        path: '/circle',
        component: () => import('@/views/circle'),
        meta: { title: '逛逛' },
      },
      {
        path: '/message',
        component: () => import('@/views/message'),
        meta: { title: '消息' },
      },
      {
        path: '/cart',
        component: () => import('@/views/cart'),
        meta: { title: '购物车' },
      },
      {
        path: '/center',
        component: () => import('@/views/center'),
        meta: { title: '我的' },
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !WHITE_NAME_LIST.includes(name)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

// config router
export function setupRouter(app) {
  app.use(router)
}
