import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b1cafcf = () => interopDefault(import('..\\pages\\Post.vue' /* webpackChunkName: "pages/Post" */))
const _0bcfafca = () => interopDefault(import('..\\pages\\Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _7bed2e5c = () => interopDefault(import('..\\pages\\Register.vue' /* webpackChunkName: "pages/Register" */))
const _24c27aec = () => interopDefault(import('..\\pages\\postpage\\_id.vue' /* webpackChunkName: "pages/postpage/_id" */))
const _2c22e0d3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Post",
    component: _1b1cafcf,
    name: "Post"
  }, {
    path: "/Profile",
    component: _0bcfafca,
    name: "Profile"
  }, {
    path: "/Register",
    component: _7bed2e5c,
    name: "Register"
  }, {
    path: "/postpage/:id?",
    component: _24c27aec,
    name: "postpage-id"
  }, {
    path: "/",
    component: _2c22e0d3,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
