import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * name:'router-name'            the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    navbar: object               detail see: https://vant-contrib.gitee.io/vant/#/zh-CN/nav-bar#api
    tabbar: boolean              if set true, will always show the tabbar
  }
 */

// basic components
import Layout from '@/layout/index.vue'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/BasicLayout',
    component: Layout,
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          navbar: {
            showTitle: false,
            leftArrow: false,
          },
          tabbar: true,
        },
      },
      {
        path: '/circle',
        component: () => import('@/views/circle/index.vue'),
        meta: {
          title: '逛逛',
          navbar: {
            showTitle: false,
            leftArrow: false,
          },
          tabbar: true,
        },
      },
      {
        path: '/message',
        component: () => import('@/views/message/index.vue'),
        meta: {
          title: '消息',
          navbar: {
            showTitle: false,
            leftArrow: false,
          },
          tabbar: true,
        },
      },
      {
        path: '/cart',
        component: () => import('@/views/cart/index.vue'),
        meta: {
          title: '购物车',
          navbar: {
            showTitle: false,
            leftArrow: false,
          },
          tabbar: true,
        },
      },
      {
        path: '/center',
        component: () => import('@/views/center/index.vue'),
        meta: {
          title: '关于我',
          tabbar: true,
        },
      },
      {
        path: '/mockjs',
        component: () => import('@/views/home/mockjs.vue'),
        name: 'Mockjs',
        meta: {
          title: 'Mockjs',
          navbar: {
            showTitle: false,
          },
          tabbar: false
        }
      },
    ]
  },
  { path: '/:path(.*)*', redirect: '/404' }
]

// init router
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  strict: true,
  // scrollBehavior: () => ({ left: 0, top: 0 }),
})

// config router
export function setupRouter(app) {
  app.use(router)
}