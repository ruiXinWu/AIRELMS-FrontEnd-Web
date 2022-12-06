import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3009ce44 = () => interopDefault(import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _a4da7e48 = () => interopDefault(import('../pages/apply.vue' /* webpackChunkName: "pages/apply" */))
const _49375fa0 = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _7a5e9152 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _70943f2c = () => interopDefault(import('../pages/recruit.vue' /* webpackChunkName: "pages/recruit" */))
const _bc28fb86 = () => interopDefault(import('../pages/reset.vue' /* webpackChunkName: "pages/reset" */))
const _69e75066 = () => interopDefault(import('../pages/account/earnings.vue' /* webpackChunkName: "pages/account/earnings" */))
const _00c5d95a = () => interopDefault(import('../pages/account/order.vue' /* webpackChunkName: "pages/account/order" */))
const _de84f24a = () => interopDefault(import('../pages/account/reset.vue' /* webpackChunkName: "pages/account/reset" */))
const _b8dcab56 = () => interopDefault(import('../pages/account/study.vue' /* webpackChunkName: "pages/account/study" */))
const _62b902f1 = () => interopDefault(import('../pages/account/teacher/index.vue' /* webpackChunkName: "pages/account/teacher/index" */))
const _d1bd6e00 = () => interopDefault(import('../pages/account/teacher/add.vue' /* webpackChunkName: "pages/account/teacher/add" */))
const _aac697b2 = () => interopDefault(import('../pages/account/teacher/check.vue' /* webpackChunkName: "pages/account/teacher/check" */))
const _5ef63d8c = () => interopDefault(import('../pages/account/teacher/course.vue' /* webpackChunkName: "pages/account/teacher/course" */))
const _3d30df9c = () => interopDefault(import('../pages/account/teacher/period.vue' /* webpackChunkName: "pages/account/teacher/period" */))
const _d9fe03d8 = () => interopDefault(import('../pages/account/teacher/praxis.vue' /* webpackChunkName: "pages/account/teacher/praxis" */))
const _9557a3ea = () => interopDefault(import('../pages/terrace/_id.vue' /* webpackChunkName: "pages/terrace/_id" */))
const _59b87052 = () => interopDefault(import('../pages/view/_id.vue' /* webpackChunkName: "pages/view/_id" */))
const _0dadd780 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _3009ce44,
    name: "account"
  }, {
    path: "/apply",
    component: _a4da7e48,
    name: "apply"
  }, {
    path: "/list",
    component: _49375fa0,
    name: "list"
  }, {
    path: "/login",
    component: _7a5e9152,
    name: "login"
  }, {
    path: "/recruit",
    component: _70943f2c,
    name: "recruit"
  }, {
    path: "/reset",
    component: _bc28fb86,
    name: "reset"
  }, {
    path: "/account/earnings",
    component: _69e75066,
    name: "account-earnings"
  }, {
    path: "/account/order",
    component: _00c5d95a,
    name: "account-order"
  }, {
    path: "/account/reset",
    component: _de84f24a,
    name: "account-reset"
  }, {
    path: "/account/study",
    component: _b8dcab56,
    name: "account-study"
  }, {
    path: "/account/teacher",
    component: _62b902f1,
    name: "account-teacher"
  }, {
    path: "/account/teacher/add",
    component: _d1bd6e00,
    name: "account-teacher-add"
  }, {
    path: "/account/teacher/check",
    component: _aac697b2,
    name: "account-teacher-check"
  }, {
    path: "/account/teacher/course",
    component: _5ef63d8c,
    name: "account-teacher-course"
  }, {
    path: "/account/teacher/period",
    component: _3d30df9c,
    name: "account-teacher-period"
  }, {
    path: "/account/teacher/praxis",
    component: _d9fe03d8,
    name: "account-teacher-praxis"
  }, {
    path: "/terrace/:id?",
    component: _9557a3ea,
    name: "terrace-id"
  }, {
    path: "/view/:id?",
    component: _59b87052,
    name: "view-id"
  }, {
    path: "/",
    component: _0dadd780,
    name: "index"
  }, {
    path: "*",
    component: _0dadd780,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
