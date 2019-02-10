import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Leaderboard from '@/components/Leaderboard'
import Status from '@/components/Status'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        title: 'Pedlar'
      }
    },
    {
      
      path: '/home',
      component: Landing
    },
    {
      path: '/leaderboard',
      component: Leaderboard,
      props: {item: Object}

    },
    {
      path: '/status',
      component: Status
    }
  ]
})