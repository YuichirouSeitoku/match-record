import Vue from 'vue'
import Router from 'vue-router'
import TopMenu from '@/components/TopMenu'
import SelectCardTop from '../components/SelectCard/SelectCardTop'
import SelectOneCharacter from '../components/SelectCard/SelectOneCharacter'
import QuestionExistCard from '../components/Question/QuestionExistCard'
import QuestionWhichTake from '../components/Question/QuestionWhichTake'
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
      path: '/SelectCardTop',
      name: 'SeletcCardTop',
      component: SelectCardTop
    },
    {
      path: '/SelectOneCharacter',
      name: 'SelectOneCharacter',
      component: SelectOneCharacter
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
