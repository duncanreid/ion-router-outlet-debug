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
    1.) click home button, 
        - url changes but view does not
    2.) click about button
    3.) on about page click search button, go to back to search page
    4.) enter search term and click search
    5.) click about button again, url changes but view does not.
    6.) none of the buttons on the search page should do anything at this point except change the URL, and there should be about 7 ion-pages in the router outlet stack.

have tried 5.5.1 and 5.6.0-dev.202012091649.c699e16 for both @ionic/vue and @ionic/vue-router and have the same result.
*/
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
