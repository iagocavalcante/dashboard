
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
      { path: 'list-pj', component: () => import('pages/client-pj/List.vue') },
      { path: 'create-pj', component: () => import('pages/client-pj/Client.vue') },
      { path: 'list-pf', component: () => import('pages/client-pf/List.vue') },
      { path: 'create-pf', component: () => import('pages/client-pf/Client.vue') }
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
