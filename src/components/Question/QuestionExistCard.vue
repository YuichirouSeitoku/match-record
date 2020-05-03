<template>
    <div>
        <div>
            <v-card 
                class="my-3 pt-3 elevation-1"
                outlined
                to="/QuestionWhichTake"
            >
                <p class="text-center text--secondary font-weight-light">出札</p>
            </v-card>
        </div>
        <div @click="updateVuexValues()">
            <v-card
                class="my-3 pt-3 elevation-1"
                outlined
                to="/QuestionExistOtetsuki"
            >
            <p class="text-center text--secondary font-weight-light">空札</p>
            </v-card>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'QuestionExistCard',
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
    updateVuexValues () {
      this.push_value = this.difference_list[this.difference_list.length - 1]
      this.difference_list.push(this.push_value)
      this.$store.dispatch('updateCardDifferenceList', {card_difference_list: this.difference_list})
      this.$store.dispatch('updateTakeCard', {take_card: '空札'})
    }
  }
}
</script>
