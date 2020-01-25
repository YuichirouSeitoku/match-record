<template>
    <div>
        <div>
            <p>誰がお手つきをしたか</p>
        </div>
        <div class="columns">
            <div class="column" @click="updateVuexValues('自分',-2)">
                <RouterLink to ='/TopMenu'>
                    <div class="box">
                        <p>自分 1枚</p>
                    </div>
                </RouterLink>
            </div>
            <div class="column" @click="updateVuexValues('自分ダブ',-3)">
                <RouterLink to = '/TopMenu'>
                    <div class="box">
                        <p>自分 ダブ</p>
                    </div>
                </RouterLink>
            </div>
            <div class="column" @click="updateVuexValues('相手',+2)">
                <RouterLink to = '/TopMenu'>
                    <div class="box">
                        <p>相手 1枚</p>
                    </div>
                </RouterLink>
            </div>
            <div class="column" @click="updateVuexValues('相手ダブ',+3)">
                <RouterLink to = '/TopMenu'>
                    <div class="box">
                        <p>相手 ダブ</p>
                    </div>
                </RouterLink>
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
      console.log(this.difference_list)
      this.$store.dispatch('updateCardDifferenceList', {card_difference_list: this.difference_list})
    }
  }
}
</script>
