<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('はなの')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>はなの</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('はなさ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>はなさ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('はるの')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>はるの</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('はるす')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>はるす</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SelectFourCharacterHa',
  methods: {
    updateCurrentCard (value) {
      this.$store.dispatch('updateCurrentCard', {current_card: value})
    }
  }
}
</script>
