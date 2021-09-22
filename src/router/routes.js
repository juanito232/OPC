export const routes = [
    {
      path: '/home',
      component: () => import('@/pages/Home.vue'),
      alias: '/',
      name: 'home'
    },
    {
      path: '/login',
      component: () => import('@/pages/Login.vue'),
      name: 'login'
    },
    {
      path: '/registro',
      component: () => import('@/pages/Registro.vue'),
      name: 'registro'
    },
    {
      path: '/lostPassword',
      component: () => import('@/pages/LostPassword.vue'),
      name: 'lostPassword',
    },
    {
      path: '/wallet',
      component: () => import('@/pages/Wallet.vue'),
      name: 'wallet'
    },
    {
      path: '/movements',
      component: () => import('@/pages/Movements.vue'),
      name: 'movements'
    },
    {
      path: '/statistics',
      component: () => import('@/pages/Statistics.vue'),
      name: 'statistics'
    }
  ]