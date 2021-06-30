
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/about',
        component: () => import('pages/About.vue')
      },
      {
        path: '/team',
        component: () => import('pages/Team.vue')
      },
      {
        path: '/project',
        component: () => import('pages/Projects.vue')
      },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
