export const routes = [
    {
      path: '/home',
      component: () => import('@/pages/Summary.vue'),
      alias: '/',
      name: 'summary'
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
<<<<<<< HEAD
=======
    {
    path: '/requestPassword',
    component: () => import('@/pages/RequestPassword.vue'),
    name: 'requestPassword'      
    }
>>>>>>> a2c463f283f90184dccee8876c21c0da661a4fcd
  ]