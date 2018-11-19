
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/numbers',
    component: () => import('layouts/MyLayout.vue'),
    children: [{ path: '', component: () => import('pages/Numbers.vue') }]
  },
  {
    path: '/solution',
    component: () => import('layouts/MyLayout.vue'),
    children: [{ path: '', component: () => import('pages/Solution.vue') }]
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
