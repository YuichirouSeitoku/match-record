<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('みかき')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>みかき</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('みかの')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>みかの</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('みせ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>みせ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('みよ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>みよ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('みち')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>みち</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SelectFiveSixCharacterMi',
  methods: {
    updateCurrentCard (value) {
      this.$store.dispatch('updateCurrentCard', {current_card: value})
    }
  }
}
</script>
