import Vue from 'vue'
import Router from 'vue-router'
import AddEvent from '@/components/main/addEvent'
import SuccEvent from '@/components/main/succEvent'
import PaddEvent from '@/components/main/paddEvent'
import CannEvent from '@/components/main/cannEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: AddEvent,
      name: 'AddEvent'
    },
    {
      path: '/succ',
      component: SuccEvent,
      name: 'SuccEvent'
    },
    {
      path: '/Padd',
      component: PaddEvent,
      name: 'PaddEvent'
    },
    {
      path: '/cann',
      component: CannEvent,
      name: 'CannEvent'
    }
  ]
})
