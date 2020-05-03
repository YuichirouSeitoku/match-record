<template>
    <div>
        <div>
            <p class="text-center text--secondary font-weight-light">誰がお手つきをしたか</p>
        </div>
        <div class="columns">
            <div @click="updateVuexValues('自分',-2);countPlayerOtetsuki()">
                <v-card
                     class="my-3 pt-3 elevation-1"
                     outlined
                     to="/BaseMenu"
                >
                    <p class="text-center text--secondary font-weight-light">自分 1枚</p>
                </v-card>
            </div>
            <div @click="updateVuexValues('自分ダブ',-3);countPlayerDabu()">
                <v-card
                    class="my-3 pt-3 elevation-1"
                    outlined
                    to="/BaseMenu"
                >
                        <p class="text-center text--secondary font-weight-light">自分 ダブ</p>
                </v-card>
            </div>
            <div @click="updateVuexValues('相手',+2);countOpponentOtetsuki()">
                <v-card
                    class="my-3 pt-3 elevation-1"
                    outlined
                    to="/BaseMenu"
                >
                    <p class="text-center text--secondary font-weight-light">相手 1枚</p>
                </v-card>
            </div>
            <div @click="updateVuexValues('相手ダブ',+3);countOpponentDabu()">
                <v-card
                    class="my-3 pt-3 elevation-1"
                    outlined
                    to="/BaseMenu"
                >
                    <p class="text-center text--secondary font-weight-light">相手 ダブ</p>
                </v-card>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'QuestionOtetsukiDetail',
  data () {
    return {
      difference_list: [],
      pop_value: ''
    }
  },
  mounted () {
    this.difference_list = this.$store.state.card_difference_list
    console.log(this.difference_list)
    this.pop_value = this.difference_list.pop()
  },
  computed: {
    ...mapState(['card_difference_list'])
  },
  methods: {
    updateVuexValues (val1, val2) {
      this.$store.dispatch('updateOtetsukiUser', {otetsuki_user: val1})
      this.difference_list.push(this.pop_value + val2)
      this.$store.dispatch('updateCardDifferenceList', {card_difference_list: this.difference_list})
    },
    countPlayerOtetsuki () {
      this.$store.dispatch('updatePlayerOtetsukiCount')
    },
    countPlayerDabu () {
      this.$store.dispatch('updatePlayerDabuCount')
    },
    countOpponentOtetsuki () {
      this.$store.dispatch('updateOpponentOtetsukiCount')
    },
    countOpponentDabu () {
      this.$store.dispatch('updateOpponentDabuCount')
    }
  }
}
</script>
