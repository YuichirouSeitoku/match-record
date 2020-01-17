import Vue from 'vue'
import Router from 'vue-router'
import InputData from '@/components/InputData'
import TopMenu from '@/components/TopMenu'
import ShowChart from '@/components/ShowChart'
import QuestionExistCard from '../components/Question/QuestionExistCard'
import QuestionWhichTake from '../components/Question/QuestionWhichTake'
import QuestionOffenseOrDefense from '../components/Question/QuestionOffenseOrDefense'
import QuestionExistOtetsuki from '../components/Question/QuestionExistOtetsuki'
import QuestionOtetsukiDetail from '../components/Question/QuestionOtetsukiDetail'

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
    },
    {
      path: '/QuestionExistCard',
      name: 'QuestionExistCard',
      component: QuestionExistCard
    },
    {
      path: '/QuestionWhichTake',
      name: 'QuestionWhichTake',
      component: QuestionWhichTake
    },
    {
      path: '/QuestionOffenseOrDefense',
      name: 'QuestionOffenseOrDefense',
      component: QuestionOffenseOrDefense
    },
    {
      path: '/QuestionExistOtetsuki',
      name: 'QuestionExistOtetsuki',
      component: QuestionExistOtetsuki
    },
    {
      path: '/QuestionOtetsukiDetail',
      name: 'QuestionOtetsukiDetail',
      component: QuestionOtetsukiDetail
    }
  ]
})
