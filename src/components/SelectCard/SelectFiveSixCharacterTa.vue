<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('たか')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>たか</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('たき')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>たき</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('たち')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>たち</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('たれ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>たれ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('たご')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>たご</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('たま')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>たま</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SelectFiveSixCharacterTa',
  methods: {
    updateCurrentCard (value) {
      this.$store.dispatch('updateCurrentCard', {current_card: value})
    }
  }
}
</script>
