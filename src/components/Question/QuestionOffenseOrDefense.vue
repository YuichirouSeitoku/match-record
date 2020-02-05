<template>
    <div class="columns">
        <div @click="countPlayerOffense" class="column">
            <RouterLink to ='/QuestionExistOtetsuki'>
                <div class="box">
                    <p class="has-text-weight-medium has-text-centered">攻めてとった？</p>
                </div>
            </RouterLink>
        </div>

        <div @click="countPlayerDefense" class="column">
            <RouterLink to = '/QuestionExistOtetsuki'>
                <div class="box">
                    <p class="has-text-weight-medium has-text-centered">守ってとった？</p>
                </div>
            </RouterLink>
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
