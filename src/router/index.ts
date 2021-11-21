import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/tabs/Home.vue')
      },
      {
        path: 'chat',
        component: () => import('@/views/tabs/Chat.vue')
      },
      {
        path: 'matchs',
        component: () => import('@/views/tabs/Matchs.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/tabs/Profile.vue')
      }
    ]
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    component: () => import('@/views/Chat.vue')   
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
