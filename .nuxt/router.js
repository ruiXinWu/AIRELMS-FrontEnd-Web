import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _903295d4 = () => interopDefault(import('..\\pages\\account\\index.vue' /* webpackChunkName: "pages/account/index" */))
const _1b6f8c6d = () => interopDefault(import('..\\pages\\apply.vue' /* webpackChunkName: "pages/apply" */))
const _a1da8fec = () => interopDefault(import('..\\pages\\companyInfo.vue' /* webpackChunkName: "pages/companyInfo" */))
const _2bba5def = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages/list" */))
const _30ad82e8 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _19076756 = () => interopDefault(import('..\\pages\\ProgramDetails copy.vue' /* webpackChunkName: "pages/ProgramDetails copy" */))
const _4b272b06 = () => interopDefault(import('..\\pages\\recruit.vue' /* webpackChunkName: "pages/recruit" */))
const _8ea74d18 = () => interopDefault(import('..\\pages\\recruit_backup.vue' /* webpackChunkName: "pages/recruit_backup" */))
const _ea822230 = () => interopDefault(import('..\\pages\\recruit copy.vue' /* webpackChunkName: "pages/recruit copy" */))
const _0fc84dce = () => interopDefault(import('..\\pages\\reset.vue' /* webpackChunkName: "pages/reset" */))
const _93769ed6 = () => interopDefault(import('..\\pages\\account\\earnings.vue' /* webpackChunkName: "pages/account/earnings" */))
const _5e9d14dc = () => interopDefault(import('..\\pages\\account\\order.vue' /* webpackChunkName: "pages/account/order" */))
const _60a92313 = () => interopDefault(import('..\\pages\\account\\reset.vue' /* webpackChunkName: "pages/account/reset" */))
const _737d468d = () => interopDefault(import('..\\pages\\account\\study.vue' /* webpackChunkName: "pages/account/study" */))
const _ab2beec8 = () => interopDefault(import('..\\pages\\account\\teacher\\index.vue' /* webpackChunkName: "pages/account/teacher/index" */))
const _2c1dbd6b = () => interopDefault(import('..\\pages\\account\\teacher\\add.vue' /* webpackChunkName: "pages/account/teacher/add" */))
const _1b648c5c = () => interopDefault(import('..\\pages\\account\\teacher\\check.vue' /* webpackChunkName: "pages/account/teacher/check" */))
const _0d65ed41 = () => interopDefault(import('..\\pages\\account\\teacher\\course.vue' /* webpackChunkName: "pages/account/teacher/course" */))
const _e0518032 = () => interopDefault(import('..\\pages\\account\\teacher\\period.vue' /* webpackChunkName: "pages/account/teacher/period" */))
const _4170adc9 = () => interopDefault(import('..\\pages\\account\\teacher\\praxis.vue' /* webpackChunkName: "pages/account/teacher/praxis" */))
const _53e35302 = () => interopDefault(import('..\\pages\\ProgramView\\_id.vue' /* webpackChunkName: "pages/ProgramView/_id" */))
const _a08a0b4e = () => interopDefault(import('..\\pages\\terrace\\_id.vue' /* webpackChunkName: "pages/terrace/_id" */))
const _04965cb4 = () => interopDefault(import('..\\pages\\view\\_id.vue' /* webpackChunkName: "pages/view/_id" */))
const _6705dfd1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _903295d4,
    name: "account"
  }, {
    path: "/apply",
    component: _1b6f8c6d,
    name: "apply"
  }, {
    path: "/companyInfo",
    component: _a1da8fec,
    name: "companyInfo"
  }, {
    path: "/list",
    component: _2bba5def,
    name: "list"
  }, {
    path: "/login",
    component: _30ad82e8,
    name: "login"
  }, {
    path: "/ProgramDetails%20copy",
    component: _19076756,
    name: "ProgramDetails copy"
  }, {
    path: "/recruit",
    component: _4b272b06,
    name: "recruit"
  }, {
    path: "/recruit_backup",
    component: _8ea74d18,
    name: "recruit_backup"
  }, {
    path: "/recruit%20copy",
    component: _ea822230,
    name: "recruit copy"
  }, {
    path: "/reset",
    component: _0fc84dce,
    name: "reset"
  }, {
    path: "/account/earnings",
    component: _93769ed6,
    name: "account-earnings"
  }, {
    path: "/account/order",
    component: _5e9d14dc,
    name: "account-order"
  }, {
    path: "/account/reset",
    component: _60a92313,
    name: "account-reset"
  }, {
    path: "/account/study",
    component: _737d468d,
    name: "account-study"
  }, {
    path: "/account/teacher",
    component: _ab2beec8,
    name: "account-teacher"
  }, {
    path: "/account/teacher/add",
    component: _2c1dbd6b,
    name: "account-teacher-add"
  }, {
    path: "/account/teacher/check",
    component: _1b648c5c,
    name: "account-teacher-check"
  }, {
    path: "/account/teacher/course",
    component: _0d65ed41,
    name: "account-teacher-course"
  }, {
    path: "/account/teacher/period",
    component: _e0518032,
    name: "account-teacher-period"
  }, {
    path: "/account/teacher/praxis",
    component: _4170adc9,
    name: "account-teacher-praxis"
  }, {
    path: "/ProgramView/:id?",
    component: _53e35302,
    name: "ProgramView-id"
  }, {
    path: "/terrace/:id?",
    component: _a08a0b4e,
    name: "terrace-id"
  }, {
    path: "/view/:id?",
    component: _04965cb4,
    name: "view-id"
  }, {
    path: "/",
    component: _6705dfd1,
    name: "index"
  }, {
    path: "*",
    component: _6705dfd1,
    name: "custom"
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
