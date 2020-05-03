<template>
    <div>
        <div @click="countPlayerOffense">
            <v-card
                class="my-3 pt-3 elevation-1"
                outlined
                to="/QuestionExistOtetsuki"
            >
                <p class="text-center text--secondary font-weight-light">攻めてとった？</p>
            </v-card>
        </div>

        <div @click="countPlayerDefense">
            <v-card
                class="my-3 pt-3 elevation-1"
                outlined
                to="/QuestionExistOtetsuki"
            >
                <p class="text-center text--secondary font-weight-light">守ってとった？</p>
            </v-card>
        </div>

    </div>
</template>
<script>
export default {
  name: 'QuestionExistCard',
  methods: {
    countPlayerOffense () {
      this.$store.dispatch('updatePlayerOffenseCount')
    },
    countPlayerDefense () {
      this.$store.dispatch('updatePlayerDefenseCount')
    }
  }
}
</script>
