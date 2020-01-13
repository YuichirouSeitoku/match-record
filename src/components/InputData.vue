<template>
    <div class="box">
        <div v-for="(card, index) in card_list[$route.params.id]" :key="index">
            <input-data-item :card='card.name' :id='card.next_id' v-on:fromChildValue="runMethods" ></input-data-item>
        </div>
    </div>
</template>

<script>
import InputDataItem from './InputDataItem'
import { mapState } from 'vuex'
export default {
  name: 'InputData',
  components: {
    InputDataItem
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['card_list'])
  },
  watch: {
    '$route' (to, from) {
      this.runMethods(to.params.id)
    }
  },
  methods: {
    runMethods (id, name) {
      if (id === 22 && typeof name !== 'undefined') {
        this.$store.dispatch('updateCurrentCard', { current_card: name })
      } else {
        this.$router.push({name: 'InputData', params: { id }})
      }
      if ((name === '空札') || (name === '自分') || (name === '相手')) {
        this.$store.dispatch('updateTakeCard', { take_card: name })
      } else if ((name === '攻めて取った')) {
        this.$store.dispatch('updatePlayerOffenseCount')
      } else if ((name === '守って取った')) {
        this.$store.dispatch('updatePlayerDefenseCount')
      }
      if (id === 27) {
        this.$store.dispatch('updateOtetsukiUser', {otetsuki_user: name})
        this.$router.push({name: 'TopMenu'})
      } else {
        this.$router.push({name: 'InputData', params: { id }})
      }
    }
  }
}
</script>
