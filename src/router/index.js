import Vue from 'vue'
import Router from 'vue-router'
import InputData from '@/components/InputData'
import TopMenu from '@/components/TopMenu'
import ShowChart from '@/components/ShowChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopMenu',
      component: TopMenu
    },
    {
      path: '/InputData/:id',
      name: 'InputData',
      component: InputData
    },
    {
      path: '/ShowChart',
      name: 'ShowChart',
      component: ShowChart
    }
  ]
})
