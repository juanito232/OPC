export const routes = [
    {
      path: '/home',
      component: () => import('@/pages/HomeContent.vue'),
      alias: '/',
      name: 'Home-Content'
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
    },
    {
      path: '/expenses',
      component: () => import('@/pages/Expenses.vue'),
      name: 'expenses'      
    },
    {
      path: '/income',
      component: () => import('@/pages/Income.vue'),
      name: 'income'      
    },
    {
      path: '/requestPassword',
      component: () => import('@/pages/RequestPassword.vue'),
      name: 'requestPassword'      
    }
  ]