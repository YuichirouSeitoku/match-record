<template>
    <div>
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
    '$route' (to) {
      this.runMethods(to.params.id)
    }
  },
  methods: {
    runMethods (id, name) {
      if (id === 22) {
        this.$store.dispatch('updateCurrentCard', { current_card: name })
        this.$router.push({name: 'QuestionExistCard'})
      } else {
        this.$router.push({name: 'InputData', params: { id }})
      }
    }
  }
}
</script>
