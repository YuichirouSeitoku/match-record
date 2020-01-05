export default {
  methods: {
    CardDifference: function (value) {
        this.$store.dispatch('setCardDifference', {card_difference: value})
    }
  }
}

