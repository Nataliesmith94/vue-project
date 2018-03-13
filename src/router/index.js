import Vue from 'vue'
import Router from 'vue-router'

const HomePage = () => import('@/pages/HomePage')
const YourDetails = () => import('@/pages/YourDetailsPage')
const Interests = () => import('@/pages/Interests')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'my-vue-app/',
      redirect: {name: HomePage}
    },
    {
      path: '/my-vue-app/home-page',
      name: 'Home Page',
      component: HomePage,
      step: true
    },
    {
      path: '/my-vue-app/your-details',
      name: 'Your Details',
      component: YourDetails,
      step: true
    },
    {
      path: '/my-vue-app/interests',
      name: 'Interests',
      component: Interests,
      step: true
    }
  ],
  mode: 'history',
  scrollBehavior () {
    return {x: 0, y: 0}
  }
})
