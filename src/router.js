import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/menusnavigation',
      name: 'menusnavigation',
      redirect: 'diapers',
      component: () => import('./views/Menusnavigation.vue'),
      children: [{
          path: '/diapers',
          name: 'diapers',
          component: () => import('./components/productshow/diapers.vue')
        },
        {
          path: '/diapersquery',
          name: 'diapersquery',
          component: () => import('./components/productshow/diapersquery.vue')
        },
        {
          path: '/diapersupload',
          name: 'diapersupload',
          component: () => import('./components/productupload/diapersupload.vue')
        }
      ]
    }
  ]
})