<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('かぜそ')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>かぜそ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('かぜを')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>かぜを</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('かさ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>かさ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('かく')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>かく</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SelectFourCharacterKa',
  methods: {
    updateCurrentCard (value) {
      this.$store.dispatch('updateCurrentCard', {current_card: value})
    }
  }
}
</script>
