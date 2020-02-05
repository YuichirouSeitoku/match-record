<template>
    <div>
        <div>
            <p class="has-text-weight-medium has-text-centered">とったのは？</p>
        </div>
        <div class="columns">
            <div @click="updateVuexValues('自分',1)" class="column">
                <RouterLink to ='/QuestionOffenseOrDefense'>
                    <div class="box">
                        <p class="has-text-weight-medium has-text-centered">自分</p>
                    </div>
                </RouterLink>
            </div>
            <div @click="updateVuexValues('相手',-1)" class="column">
                <RouterLink to = '/QuestionExistOtetsuki'>
                    <div class="box">
                        <p class="has-text-weight-medium has-text-centered">相手</p>
                    </div>
                </RouterLink>
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
