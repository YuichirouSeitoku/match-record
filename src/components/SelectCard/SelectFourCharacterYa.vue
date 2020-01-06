<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('やまが')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>やまが</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('やまざ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>やまざ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('やす')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>やす</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('やえ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>やえ</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SelectFourCharacterYa',
  methods: {
    updateCurrentCard (value) {
      this.$store.dispatch('updateCurrentCard', {current_card: value})
    }
  }
}
</script>
