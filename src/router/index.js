import Vue from 'vue'
import Router from 'vue-router'
import Root from '../components/Root'
import Home from '../components/Home'
import Explorer from '../components/Explorer'
import Cart from '../components/Cart'
import Profile from '../components/Profile'
import Question from '../components/algorithm/question'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'explorer',
          name: 'Explorer',
          component: Explorer
        },
        {
          path: 'cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: 'algorithm/question/:title_slug',
          name: 'question',
          component: Question
        }
      ]
    }
  ]
})
