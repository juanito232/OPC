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
    }
  ]