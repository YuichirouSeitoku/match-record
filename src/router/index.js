import Vue from 'vue'
import Router from 'vue-router'
import InputData from '@/components/InputData'
import TopMenu from '@/components/TopMenu'
import ShowChart from '@/components/ShowChart'
import SelectCardTop from '../components/SelectCard/SelectCardTop'
import SelectOneCharacter from '../components/SelectCard/SelectOneCharacter'
import SelectTwoCharacter from '../components/SelectCard/SelectTwoCharacter'
import SelectThreeCharacter from '../components/SelectCard/SelectThreeCharacter'
import SelectThreeCharacterI from '../components/SelectCard/SelectThreeCharacterI'
import SelectThreeCharacterTi from '../components/SelectCard/SelectThreeCharacterTi'
import SelectThreeCharacterHi from '../components/SelectCard/SelectThreeCharacterHi'
import SelectThreeCharacterKi from '../components/SelectCard/SelectThreeCharacterKi'
import SelectFourCharacter from '../components/SelectCard/SelectFourCharacter'
import SelectFourCharacterHa from '../components/SelectCard/SelectFourCharacterHa'
import SelectFourCharacterYa from '../components/SelectCard/SelectFourCharacterYa'
import SelectFourCharacterKa from '../components/SelectCard/SelectFourCharacterKa'
import SelectFourCharacterYo from '../components/SelectCard/SelectFourCharacterYo'
import SelectFiveSixCharacter from '../components/SelectCard/SelectFiveSixCharacter'
import SelectFiveSixCharacterMi from '../components/SelectCard/SelectFiveSixCharacterMi'
import SelectFiveSixCharacterTa from '../components/SelectCard/SelectFiveSixCharacterTa'
import SelectFiveSixCharacterKo from '../components/SelectCard/SelectFiveSixCharacterKo'
import SelectSevenCharacter from '../components/SelectCard/SelectSevenCharacter'
import SelectSevenCharacterO from '../components/SelectCard/SelectSevenCharacterO'
import SelectSevenCharacterWa from '../components/SelectCard/SelectSevenCharacterWa'
import SelectEightCharacter from '../components/SelectCard/SelectEightCharacter'
import SelectSixteenCharacter from '../components/SelectCard/SelectSixteenCharacter'
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
      path: '/SelectTwoCharacter',
      name: 'SelectTwoCharacter',
      component: SelectTwoCharacter
    },
    {
      path: '/SelectThreeCharacter',
      name: 'SelectThreeCharacter',
      component: SelectThreeCharacter
    },
    {
      path: '/SelectThreeCharacterI',
      name: 'SelectThreeCharacterI',
      component: SelectThreeCharacterI
    },
    {
      path: '/SelectThreeCharacterTi',
      name: 'SelectThreeCharacterTi',
      component: SelectThreeCharacterTi
    },
    {
      path: '/SelectThreeCharacterHi',
      name: 'SelectThreeCharacterHi',
      component: SelectThreeCharacterHi
    },
    {
      path: '/SelectThreeCharacterKi',
      name: 'SelectThreeCharacterKi',
      component: SelectThreeCharacterKi
    },
    {
      path: '/SelectFourCharacter',
      name: 'SelectFourCharacter',
      component: SelectFourCharacter
    },
    {
      path: '/SelectFourCharacterHa',
      name: 'SelectFourCharacterHa',
      component: SelectFourCharacterHa
    },
    {
      path: '/SelectFourCharacterYa',
      name: 'SelectFourCharacterYa',
      component: SelectFourCharacterYa
    },
    {
      path: '/SelectFourCharacterKa',
      name: 'SelectFourCharacterKa',
      component: SelectFourCharacterKa
    },
    {
      path: '/SelectFourCharacterYo',
      name: 'SelectFourCharacterYo',
      component: SelectFourCharacterYo
    },
    {
      path: '/SelectFiveSixCharacter',
      name: 'SelectFiveSixCharacter',
      component: SelectFiveSixCharacter
    },
    {
      path: '/SelectFiveSixCharacterMi',
      name: 'SelectFiveSixCharacterMi',
      component: SelectFiveSixCharacterMi
    },
    {
      path: '/SelectFiveSixCharacterTa',
      name: 'SelectFiveSixCharacterTa',
      component: SelectFiveSixCharacterTa
    },
    {
      path: '/SelectFiveSixCharacterKo',
      name: 'SelectFiveSixCharacterKo',
      component: SelectFiveSixCharacterKo
    },
    {
      path: '/SelectSevenCharacter',
      name: 'SelectFiveSenvenCharacter',
      component: SelectSevenCharacter
    },
    {
      path: '/SelectSevenCharacterO',
      name: 'SelectFiveSenvenCharacterO',
      component: SelectSevenCharacterO
    },
    {
      path: '/SelectSevenCharacterWa',
      name: 'SelectFiveSenvenCharacterWa',
      component: SelectSevenCharacterWa
    },
    {
      path: '/SelectEightCharacter',
      name: 'SelectEightCharacter',
      component: SelectEightCharacter
    },
    {
      path: '/SelectSixteenCharacter',
      name: 'SelectSixteenCharacter',
      component: SelectSixteenCharacter
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
