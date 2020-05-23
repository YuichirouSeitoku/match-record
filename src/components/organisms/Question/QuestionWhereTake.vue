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
  name: 'QuestionWhereTake',
  components: {
    BSimpleCard
  },
  data () {
    return {
      cardItems: [
        {
          cardText: '攻めてとった',
          routerPath: '/BaseQuestionExistOtetsuki',
          callMethod: [this.countPlayerOffense, this.routeNext]
        },
        {
          cardText: '守ってとった',
          routerPath: 'BaseQuestionExistOtetsuki',
          callMethod: [this.countPlayerDefense, this.routeNext]
        }
      ]
    }
  },
  methods: {
    countPlayerOffense () {
      this.$store.dispatch('updatePlayerOffenseCount')
    },
    countPlayerDefense () {
      this.$store.dispatch('updatePlayerDefenseCount')
    },
    routeNext (routerPath) {
      this.$router.push(routerPath)
    }
  }
}
</script>
