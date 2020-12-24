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
import BSimpleCard from '@/components/molecule/BSimpleCard'
import BCardText from '@/components/atoms/BCardText'
export default {
  name: 'QuestionExistOtetsuki',
  components: {
    BSimpleCard,
    BCardText
  },
  data () {
    return {
      sectionTitle: '自分 or 相手がお手つきをした',
      cardItems: [
        {
          cardText: 'はい',
          routerPath: '/BaseQuestionOtetsukiDetail',
          callMethod: this.routeNext
        },
        {
          cardText: 'いいえ',
          routerPath: '/BaseMenu',
          callMethod: [this.updateOtetsukiUser, this.routeNext]
        }
      ]
    }
  },
  methods: {
    updateOtetsukiUser () {
      this.$store.dispatch('updateOtetsukiUser', {otetsuki_user: 'いいえ'})
    },
    routeNext (routerPath) {
      this.$router.push(routerPath)
    }
  }
}
</script>
