import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '@/views/SignIn'
import SignUp from '@/views/SignUp'
import InputData from '@/components/InputData'
import BaseMenu from '@/views/BaseMenu'
import ShowChart from '@/views/ShowChart'
import BaseDatabase from '@/views/BaseDatabase'
import BaseQuestionExistCard from '@/views/Question/BaseQuestionExistCard'
import BaseQuestionWhichTake from '@/views/Question/BaseQuestionWhichTake'
import BaseQuestionWhereTake from '@/views/Question/BaseQuestionWhereTake'
import BaseQuestionExistOtetsuki from '@/views/Question/BaseQuestionExistOtetsuki'
import BaseQuestionOtetsukiDetail from '@/views/Question/BaseQuestionOtetsukiDetail'
import BaseConfirmFinishMatch from '@/views/Result/BaseConfirmFinishMatch'
import BaseInputOpponentName from '@/views/Result/BaseInputOpponentName'
import BaseResultMatch from '@/views/Result/BaseResultMatch'

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
      path: '/BaseQuestionExistCard',
      name: 'BaseQuestionExistCard',
      component: BaseQuestionExistCard
    },
    {
      path: '/BaseQuestionWhichTake',
      name: 'BaseQuestionWhichTake',
      component: BaseQuestionWhichTake
    },
    {
      path: '/BaseQuestionWhereTake',
      name: 'BaseQuestionWhereTake',
      component: BaseQuestionWhereTake
    },
    {
      path: '/BaseQuestionExistOtetsuki',
      name: 'BaseQuestionExistOtetsuki',
      component: BaseQuestionExistOtetsuki
    },
    {
      path: '/BaseQuestionOtetsukiDetail',
      name: 'BaseQuestionOtetsukiDetail',
      component: BaseQuestionOtetsukiDetail
    },
    {
      path: '/BaseConfirmFinishMatch',
      name: 'BaseConfirmFinishMatch',
      component: BaseConfirmFinishMatch
    },
    {
      path: '/BaseInputOpponentName',
      name: 'BaseInputOpponentName',
      component: BaseInputOpponentName
    },
    {
      path: '/BaseResultMatch',
      name: 'BaseResultMatch',
      component: BaseResultMatch
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
