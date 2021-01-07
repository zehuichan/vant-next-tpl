import {createRouter, createWebHashHistory} from 'vue-router'

// basic components no-unused-vars
import BasicLayout from '@/layouts/BasicLayout'

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/',
    component: BasicLayout,
    children: [
      // tabs
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/tabs/home'),
        meta: { title: '首页' }
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('@/views/tabs/message'),
        meta: { title: '消息' }
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/tabs/mine'),
        meta: { title: '我的' }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router