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
  name: 'QuestionOtetsukiDetail',
  components: {
    BSimpleCard,
    BCardText
  },
  data () {
    return {
      fluctuationList: [],
      popValue: '',
      sectionTitle: "誰がお手つきをしたか",
      cardItems: [
        {
          cardText: '自分 1枚',
          routerPath: '/BaseMenu',
          callMethod: [
            this.countPlayerOtetsuki,
            this.routeNext
          ]
        },
        {
          cardText: '自分 ダブ',
          routerPath: '/BaseMenu',
          callMethod: [
            this.countPlayerDabu,
            this.routeNext
          ]
        },
        {
          cardText: '相手 1枚',
          routerPath: '/BaseMenu',
          callMethod: [
            this.countOpponentOtetsuki,
            this.routeNext
          ]
        },
        {
          cardText: '相手 2枚',
          routerPath: '/BaseMenu',
          callMethod: [
            this.countOpponentDabu,
            this.routeNext
          ]
        }
      ]
    }
  },
  mounted () {
    this.fluctuationList = this.$store.state.card_difference_list
    this.popValue = this.fluctuationList.pop()
  },
  computed: {
    ...mapState(['card_difference_list'])
  },
  methods: {
    storeFluctuationList (val) {
      this.fluctuationList.push(this.popValue + val)
      this.$store.dispatch('updateCardDifferenceList', {card_difference_list: this.fluctuationList})
    },
    storeOtetsukiUser (val) {
      this.$store.dispatch('updateOtetsukiUser', {otetsuki_user: val})
    },
    countPlayerOtetsuki () {
      this.storeFluctuationList(-2)
      this.storeOtetsukiUser('自分')
      this.$store.dispatch('updatePlayerOtetsukiCount')
    },
    countPlayerDabu () {
      this.storeFluctuationList(-3)
      this.storeOtetsukiUser('自分ダブ')
      this.$store.dispatch('updatePlayerDabuCount')
    },
    countOpponentOtetsuki () {
      this.storeFluctuationList(+2)
      this.storeOtetsukiUser('相手')
      this.$store.dispatch('updateOpponentOtetsukiCount')
    },
    countOpponentDabu () {
      this.storeFluctuationList(+3)
      this.storeOtetsukiUser('相手ダブ')
      this.$store.dispatch('updateOpponentDabuCount')
    },
    routeNext (routerPath) {
      this.$router.push(routerPath)
    }
  }
}
</script>
