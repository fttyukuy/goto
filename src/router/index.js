import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import City from '@/pages/city'
import Detail from '@/pages/Detail'
import Search from '@/pages/search'
import Category from '@/pages/category'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/category',
      name: 'Category',
      component: Category
    }

  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
