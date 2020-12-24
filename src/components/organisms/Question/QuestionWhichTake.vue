<template>
  <div>
    <b-card-text :cardText=sectionTitle />
    <b-simple-card
      v-for="(cardItem, index) in cardItems"
      :key=index
      :card-text=cardItem.cardText
      :router-path=cardItem.routerPath
      @fromBSimpleCard=cardItem.callMethod
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BSimpleCard from '@/components/molecule/BSimpleCard'
import BCardText from '@/components/atoms/BCardText'
export default {
  name: 'QuestionWhichTake',
  components: {
    BSimpleCard,
    BCardText
  },
  data () {
    return {
      fluctuationList: [],
      pushValue: '',
      sectionTitle: 'とったのは？',
      cardItems:[
        { 
          cardText: '自分', 
          routerPath: '/BaseQuestionWhereTake',
          callMethod: [this.clickedPlayerCard, this.routeNext]
        },
        { 
          cardText: '相手',
          routerPath: '/BaseQuestionExistOtetsuki',
          callMethod: [this.clickedOpponentCard, this.routeNext]
        }
      ]
    }
  },
  mounted () {
    this.fluctuationList = this.$store.state.card_difference_list
  },
  computed: {
    ...mapState(['card_difference_list'])
  },
  methods: {
    storeTakeCard (val) {
      this.$store.dispatch('updateTakeCard', {take_card: val})
    },
    storeFluctuationList (val) {
      this.pushValue = this.fluctuationList[this.fluctuationList.length - 1] + val
      this.fluctuationList.push(this.pushValue)
      this.$store.dispatch('updateCardDifferenceList', {card_difference_list: this.fluctuationList})
    },
    clickedPlayerCard () {
      this.storeTakeCard('自分')
      this.storeFluctuationList(1)
    },
    clickedOpponentCard () {
      this.storeTakeCard('相手')
      this.storeFluctuationList(-1)
    },
    routeNext (routerPath) {
      this.$router.push(routerPath)
    }
  }
}
</script>
