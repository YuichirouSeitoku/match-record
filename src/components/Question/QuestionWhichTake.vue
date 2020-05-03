<template>
    <div>
        <div>
            <p class="text-center text--secondary font-weight-light">とったのは？</p>
        </div>
        <div>
            <div @click="updateVuexValues('自分',1)">
                <v-card
                    class="my-3 pt-3 elevation-1"
                    outlined
                    to="/QuestionOffenseOrDefense"
                >
                    <p class="text-center text--secondary font-weight-light">自分</p>
                </v-card>
            </div>
            <div @click="updateVuexValues('相手',-1)">
                <v-card 
                    class="my-3 pt-3 elevation-1"
                    outlined
                    to="/QuestionExistOtetsuki"
                >
                    <p class="text-center text--secondary font-weight-light">相手</p>
                </v-card>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'QuestionWhichTake',
  data () {
    return {
      difference_list: [],
      push_value: ''
    }
  },
  mounted () {
    this.difference_list = this.$store.state.card_difference_list
  },
  computed: {
    ...mapState(['card_difference_list'])
  },
  methods: {
    updateVuexValues (val1, val2) {
      this.$store.dispatch('updateTakeCard', {take_card: val1})
      this.push_value = this.difference_list[this.difference_list.length - 1] + val2
      this.difference_list.push(this.push_value)
      this.$store.dispatch('updateCardDifferenceList', {card_difference_list: this.difference_list})
    }
  }
}
</script>
