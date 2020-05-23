<template>
  <div>
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
import BSimpleCard from '@/components/molecule/BSimpleCard'
export default {
  name: 'QuestionExistCard',
  components: {
    BSimpleCard
  },
  data () {
    return {
      cardItems:[
        { 
          cardText: '出札',
          routerPath: 'BaseQuestionWhichTake',
          callMethod: this.routeNext
        },
        { 
          cardText: '空札',
          routerPath: 'BaseQuestionExistOtetsuki',
          callMethod: [this.storeTakeCard, this.routeNext]
        }
      ]
    }
  },
  methods: {
    routeNext (routerPath) {
      this.$router.push({name: routerPath})
    },
    storeTakeCard () {
      this.$store.dispatch('updateTakeCard', {take_card: '空札'})
    }
  }
}
</script>
