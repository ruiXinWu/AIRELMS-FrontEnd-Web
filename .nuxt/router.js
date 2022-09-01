import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c603bdf = () => interopDefault(import('..\\pages\\account\\index.vue' /* webpackChunkName: "pages_account_index" */))
const _53428f84 = () => interopDefault(import('..\\pages\\apply.vue' /* webpackChunkName: "pages_apply" */))
const _0c7f1bf8 = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages_list" */))
const _688085ff = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _698b03d4 = () => interopDefault(import('..\\pages\\recruit.vue' /* webpackChunkName: "pages_recruit" */))
const _479b50e5 = () => interopDefault(import('..\\pages\\reset.vue' /* webpackChunkName: "pages_reset" */))
const _7f1e6da8 = () => interopDefault(import('..\\pages\\account\\earnings.vue' /* webpackChunkName: "pages_account_earnings" */))
const _f5aa074a = () => interopDefault(import('..\\pages\\account\\order.vue' /* webpackChunkName: "pages_account_order" */))
const _1522a9dc = () => interopDefault(import('..\\pages\\account\\reset.vue' /* webpackChunkName: "pages_account_reset" */))
const _27f6cd56 = () => interopDefault(import('..\\pages\\account\\study.vue' /* webpackChunkName: "pages_account_study" */))
const _2cf113f3 = () => interopDefault(import('..\\pages\\account\\teacher\\index.vue' /* webpackChunkName: "pages_account_teacher_index" */))
const _ca649afc = () => interopDefault(import('..\\pages\\account\\teacher\\add.vue' /* webpackChunkName: "pages_account_teacher_add" */))
const _74d4c529 = () => interopDefault(import('..\\pages\\account\\teacher\\check.vue' /* webpackChunkName: "pages_account_teacher_check" */))
const _487f666c = () => interopDefault(import('..\\pages\\account\\teacher\\course.vue' /* webpackChunkName: "pages_account_teacher_course" */))
const _5e319f70 = () => interopDefault(import('..\\pages\\account\\teacher\\period.vue' /* webpackChunkName: "pages_account_teacher_period" */))
const _0fcb0d52 = () => interopDefault(import('..\\pages\\account\\teacher\\praxis.vue' /* webpackChunkName: "pages_account_teacher_praxis" */))
const _e56cc13c = () => interopDefault(import('..\\pages\\terrace\\_id.vue' /* webpackChunkName: "pages_terrace__id" */))
const _4673fc4b = () => interopDefault(import('..\\pages\\view\\_id.vue' /* webpackChunkName: "pages_view__id" */))
const _c24e3a30 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _6c603bdf,
    name: "account"
  }, {
    path: "/apply",
    component: _53428f84,
    name: "apply"
  }, {
    path: "/list",
    component: _0c7f1bf8,
    name: "list"
  }, {
    path: "/login",
    component: _688085ff,
    name: "login"
  }, {
    path: "/recruit",
    component: _698b03d4,
    name: "recruit"
  }, {
    path: "/reset",
    component: _479b50e5,
    name: "reset"
  }, {
    path: "/account/earnings",
    component: _7f1e6da8,
    name: "account-earnings"
  }, {
    path: "/account/order",
    component: _f5aa074a,
    name: "account-order"
  }, {
    path: "/account/reset",
    component: _1522a9dc,
    name: "account-reset"
  }, {
    path: "/account/study",
    component: _27f6cd56,
    name: "account-study"
  }, {
    path: "/account/teacher",
    component: _2cf113f3,
    name: "account-teacher"
  }, {
    path: "/account/teacher/add",
    component: _ca649afc,
    name: "account-teacher-add"
  }, {
    path: "/account/teacher/check",
    component: _74d4c529,
    name: "account-teacher-check"
  }, {
    path: "/account/teacher/course",
    component: _487f666c,
    name: "account-teacher-course"
  }, {
    path: "/account/teacher/period",
    component: _5e319f70,
    name: "account-teacher-period"
  }, {
    path: "/account/teacher/praxis",
    component: _0fcb0d52,
    name: "account-teacher-praxis"
  }, {
    path: "/terrace/:id?",
    component: _e56cc13c,
    name: "terrace-id"
  }, {
    path: "/view/:id?",
    component: _4673fc4b,
    name: "view-id"
  }, {
    path: "/",
    component: _c24e3a30,
    name: "index"
  }, {
    path: "*",
    component: _c24e3a30,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
