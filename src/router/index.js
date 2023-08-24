import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ApplicationView from '../views/ApplicationView.vue'
import Portfolio from '../views/Portfolio.vue'
import AppmAll from '../views/AppmAll.vue'
import Blog from '../views/BlogView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/application',
    name: 'application',
    component: ApplicationView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/app-mall',
    name: 'app-mall',
    component: AppmAll
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
