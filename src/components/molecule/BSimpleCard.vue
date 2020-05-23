<template>
  <v-card
    class="my-3 pt-3 elevation-1"
    outlined
    @click="clickedCard"
  >
    <b-card-text :cardText=cardText />
  </v-card>
</template>
<script>
import BCardText from '@/components/atoms/BCardText'
export default {
  name: 'BSimpleCard',
  components: {
    BCardText
  },
  props: {
    cardText: String,
    routerPath: String,
  },
  methods: {
    clickedCard () {
      this.$emit('fromBSimpleCard', this.routerPath)
    }
  }
}
</script>
