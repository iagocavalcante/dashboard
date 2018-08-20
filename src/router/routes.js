
const routes = [
  {
    path: '/',
    component: () => import('layouts/Login.vue'),
    children: [
      { path: '', component: () => import('pages/auth/Login') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: 'list', component: () => import('pages/List.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
