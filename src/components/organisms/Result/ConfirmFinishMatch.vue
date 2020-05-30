<template>
  <div>
    <b-card-text :cardText=sectionTitle />
    <b-simple-card
      v-for="(cardItem, index) in cardItems"
      :key=index
      :card-text=cardItem.cardText
      :router-path=cardItem.routerPath
      @fromBSimpleCard="routeNext"
    />
  </div>
</template>
<script>
import BSimpleCard from '@/components/molecule/BSimpleCard'
import BCardText from '@/components/atoms/BCardText'
export default {
  name: 'ConfirmFinishMatch',
  components: {
    BSimpleCard,
    BCardText
  },
  data () {
    return {
      sectionTitle: '試合を終了しますか？',
      cardItems:[
        {
          cardText: 'はい',
          routerPath: '/BaseInputOpponentName'
        },
        {
          cardText: 'いいえ',
          routerPath: '/BaseMenu'
        }
      ]
    }
  },
  methods: {
    routeNext (routerPath) {
      this.$router.push(routerPath)
    }
  }
}
</script>
