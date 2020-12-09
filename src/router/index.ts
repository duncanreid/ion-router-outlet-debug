import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import About from '../views/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/search/:term?',
    name: 'search',
    component: Search
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]
/*
home: 
    1.) enter search term, click search button
search page: 
    1.) enter search term, click search button ( router.push current route )
    2.) click home button
home:
    1.) enter new search term, click search button
search page:
    1.) enter search term, click search button ( router.push current route )
    2.) click home button, nothing happens
*/
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
