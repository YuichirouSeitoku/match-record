import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import InputData from '@/components/InputData'
import TopMenu from '@/components/TopMenu'
import ShowChart from '@/components/ShowChart'
import TopDatabase from '@/components/TopDatabase'
import QuestionExistCard from '../components/Question/QuestionExistCard'
import QuestionWhichTake from '../components/Question/QuestionWhichTake'
import QuestionOffenseOrDefense from '../components/Question/QuestionOffenseOrDefense'
import QuestionExistOtetsuki from '../components/Question/QuestionExistOtetsuki'
import QuestionOtetsukiDetail from '../components/Question/QuestionOtetsukiDetail'
import ConfirmFinishMatch from '../components/Result/ConfirmFinishMatch'
import InputOpponentName from '../components/Result/InputOpponentName'
import ResultMatch from '../components/Result/ResultMatch'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/TopMenu',
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
      path: '/TopDatabase',
      name: 'TopDatabase',
      component: TopDatabase
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
})
