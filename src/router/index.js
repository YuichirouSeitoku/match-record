import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '@/views/SignIn'
import SignUp from '@/views/SignUp'
import InputData from '@/components/InputData'
import BaseMenu from '@/views/BaseMenu'
import ShowChart from '@/views/ShowChart'
import BaseDatabase from '@/views/BaseDatabase'
import QuestionExistCard from '../components/Question/QuestionExistCard'
import QuestionWhichTake from '../components/Question/QuestionWhichTake'
import QuestionOffenseOrDefense from '../components/Question/QuestionOffenseOrDefense'
import QuestionExistOtetsuki from '../components/Question/QuestionExistOtetsuki'
import QuestionOtetsukiDetail from '../components/Question/QuestionOtetsukiDetail'
import ConfirmFinishMatch from '../components/Result/ConfirmFinishMatch'
import InputOpponentName from '../components/Result/InputOpponentName'
import ResultMatch from '../components/Result/ResultMatch'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/BaseMenu',
      name: 'BaseMenu',
      component: BaseMenu
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
      path: '/BaseDatabase',
      name: 'BaseDatabase',
      component: BaseDatabase
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
    },
    {
      path: '/ConfirmFinishMatch',
      name: 'ConfirmFinishMatch',
      component: ConfirmFinishMatch
    },
    {
      path: '/InputOpponentName',
      name: 'InputOpponentName',
      component: InputOpponentName
    },
    {
      path: '/ResultMatch',
      name: 'ResultMatch',
      component: ResultMatch
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
