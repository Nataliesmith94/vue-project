import Vue from 'vue'
import Router from 'vue-router'

const HomePage = () => import('@/pages/HomePage')
const YourDetails = () => import('@/pages/YourDetailsPage')
const Interests = () => import('@/pages/Interests')
const Movies = () => import('@/pages/MoviePage')

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
    },
    {
      path: '/my-vue-app/movies',
      name: 'Movies',
      component: Movies,
      step: true
    }
  ],
  mode: 'history',
  scrollBehavior () {
    return {x: 0, y: 0}
  }
})
