<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('こころに')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>こころに</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('こころあ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>こころあ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('この')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>この</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('これ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>これ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('こぬ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>こぬ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('こい')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>こい</p>
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
