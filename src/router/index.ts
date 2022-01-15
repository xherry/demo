import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/hzScreen/home.vue')
  },
  {
    path: '/nunhu',
    name: 'nunhu',
    component: () => import(/* webpackChunkName: "about" */ '../views/nanhu.vue')
  },
  {
    path: '/sixYard',
    name: 'sixYard',
    component: () => import(/* webpackChunkName: "about" */ '../views/sixYard.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {
      keepAlive: true
    }
  },
  // 
  {
    path: '/transform',
    name: 'transform',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/transform.vue'),
    meta: {
      keepAlive: true
    }
  },
  // 
  {
    path: '/transform1',
    name: 'transform1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/transform1.vue')
  },
  {
    path: '/echarts',
    name: 'echarts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/echarts.vue')
  },
  {
    path: '/map',
    name: 'map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/map.vue')
  },
  {
    path: '/',
    name: 'junction',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/junction.vue')
  },//
  {
    path: '/wisdom',
    name: 'wisdom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/wisdom.vue')
  },//wisdom
]

const router = new VueRouter({
  routes,
  // mode: 'history',
  // base: '/dist'
})

export default router
