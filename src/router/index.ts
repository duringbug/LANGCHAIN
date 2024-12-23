import { createRouter, createWebHistory } from 'vue-router'
import TestView from '@/views/TestView.vue'
import HomeView from '@/views/HomeView.vue'
import ChatView from '@/views/ChatView.vue'
import BeginView from '@/views/BeginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'chat', // 这个路径会嵌套在 / 路径下，形成 /chat
          name: 'chat',
          component: ChatView,
        },
        {
          path: '',
          name: 'begin',
          component: BeginView,
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    }
  ],
})

export default router
