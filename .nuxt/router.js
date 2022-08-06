import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _19e01596 = () => interopDefault(import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _be8814d8 = () => interopDefault(import('../pages/apply.vue' /* webpackChunkName: "pages/apply" */))
const _138e9830 = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _940c27e2 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3e4325e4 = () => interopDefault(import('../pages/recruit.vue' /* webpackChunkName: "pages/recruit" */))
const _d5d69216 = () => interopDefault(import('../pages/reset.vue' /* webpackChunkName: "pages/reset" */))
const _11898015 = () => interopDefault(import('../pages/account/earnings.vue' /* webpackChunkName: "pages/account/earnings" */))
const _32aad612 = () => interopDefault(import('../pages/account/order.vue' /* webpackChunkName: "pages/account/order" */))
const _7abaf8da = () => interopDefault(import('../pages/account/reset.vue' /* webpackChunkName: "pages/account/reset" */))
const _5512b1e6 = () => interopDefault(import('../pages/account/study.vue' /* webpackChunkName: "pages/account/study" */))
const _5f11c7a9 = () => interopDefault(import('../pages/account/teacher/index.vue' /* webpackChunkName: "pages/account/teacher/index" */))
const _75d3dbb8 = () => interopDefault(import('../pages/account/teacher/add.vue' /* webpackChunkName: "pages/account/teacher/add" */))
const _b2150e42 = () => interopDefault(import('../pages/account/teacher/check.vue' /* webpackChunkName: "pages/account/teacher/check" */))
const _2493e058 = () => interopDefault(import('../pages/account/teacher/course.vue' /* webpackChunkName: "pages/account/teacher/course" */))
const _7027627a = () => interopDefault(import('../pages/account/teacher/period.vue' /* webpackChunkName: "pages/account/teacher/period" */))
const _21c0d05c = () => interopDefault(import('../pages/account/teacher/praxis.vue' /* webpackChunkName: "pages/account/teacher/praxis" */))
const _a17e0e7a = () => interopDefault(import('../pages/terrace/_id.vue' /* webpackChunkName: "pages/terrace/_id" */))
const _41e6609a = () => interopDefault(import('../pages/view/_id.vue' /* webpackChunkName: "pages/view/_id" */))
const _275b6e10 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _19e01596,
    name: "account"
  }, {
    path: "/apply",
    component: _be8814d8,
    name: "apply"
  }, {
    path: "/list",
    component: _138e9830,
    name: "list"
  }, {
    path: "/login",
    component: _940c27e2,
    name: "login"
  }, {
    path: "/recruit",
    component: _3e4325e4,
    name: "recruit"
  }, {
    path: "/reset",
    component: _d5d69216,
    name: "reset"
  }, {
    path: "/account/earnings",
    component: _11898015,
    name: "account-earnings"
  }, {
    path: "/account/order",
    component: _32aad612,
    name: "account-order"
  }, {
    path: "/account/reset",
    component: _7abaf8da,
    name: "account-reset"
  }, {
    path: "/account/study",
    component: _5512b1e6,
    name: "account-study"
  }, {
    path: "/account/teacher",
    component: _5f11c7a9,
    name: "account-teacher"
  }, {
    path: "/account/teacher/add",
    component: _75d3dbb8,
    name: "account-teacher-add"
  }, {
    path: "/account/teacher/check",
    component: _b2150e42,
    name: "account-teacher-check"
  }, {
    path: "/account/teacher/course",
    component: _2493e058,
    name: "account-teacher-course"
  }, {
    path: "/account/teacher/period",
    component: _7027627a,
    name: "account-teacher-period"
  }, {
    path: "/account/teacher/praxis",
    component: _21c0d05c,
    name: "account-teacher-praxis"
  }, {
    path: "/terrace/:id?",
    component: _a17e0e7a,
    name: "terrace-id"
  }, {
    path: "/view/:id?",
    component: _41e6609a,
    name: "view-id"
  }, {
    path: "/",
    component: _275b6e10,
    name: "index"
  }, {
    path: "*",
    component: _275b6e10,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
