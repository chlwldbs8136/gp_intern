import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import DB from '@/views/DB.vue'
import Admin_server from '@/views/Admin_server.vue'
import Dist_server from '@/views/Dist_server.vue'
import Locator from '@/views/Locator.vue'
import License from '@/views/License.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/database',
      name: 'DB',
      component: DB
    },
    {
      path: '/admin_server',
      name: 'Admin_server',
      component: Admin_server
    },
    {
      path: '/dist_server',
      name: 'Dist_server',
      component: Dist_server
    },
    {
      path: '/locator',
      name: 'Locator',
      component: Locator
    },
    {
      path: '/license',
      name: 'License',
      component: License
    },
    
  ],

});

export default router
