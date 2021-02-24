import {createRouter, createWebHashHistory} from 'vue-router'

// basic components no-unused-vars
import BasicLayout from '@/layouts/BasicLayout'

const routes = [
  { path: '/', redirect: '/components' },
  {
    path: '/',
    component: BasicLayout,
    children: [
      // tabs
      {
        path: '/components',
        name: 'components',
        component: () => import('@/views/tabs/components'),
        meta: { title: 'components' }
      },
      {
        path: '/api',
        name: 'api',
        component: () => import('@/views/tabs/api'),
        meta: { title: 'api' }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/tabs/about'),
        meta: { title: 'about' }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router