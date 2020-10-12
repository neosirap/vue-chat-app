import Vue from 'vue'
import Router from 'vue-router'

// Routes
import chatRoutes from '../apps/chat/routes'

Vue.use(Router)

export const routes = [{
  path: '/',
  redirect: '/apps/chat/channel/general'
}, {
  path: '/apps/chat',
  name: 'root',
  component: () => import(/* webpackChunkName: "apps-chat" */ '@/apps/chat/ChatApp.vue'),
  children: [
    ...chatRoutes
  ]
}, {
  path: '*',
  component: () => import(/* webpackChunkName: "" */ '@/pages/error/NotFoundPage.vue')
}]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes
})

/**
 * Before each route update
 */
router.beforeEach((to, from, next) => {
  return next()
})

/**
 * After each route update
 */
router.afterEach((to, from) => {
})

export default router
