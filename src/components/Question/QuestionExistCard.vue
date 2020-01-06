<template>
    <div class="columns">
        <div class="column is-6">
            <RouterLink to ='/QuestionWhichTake'>
                <div class="box">
                    <p>出札？</p>
                </div>
            </RouterLink>
        </div>
        <div class="column is-6" @click=setEmptyCard >
            <RouterLink to = '/QuestionExistOtetsuki'>
                <div class="box">
                    <p>空札？</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
  name: 'QuestionExistCard',
  methods: {
    setEmptyCard () {
      this.$store.dispatch('updateTakeCard', {take_card: '空札'})
    }
  }
}
</script>
