<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('きみがためお')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>きみがためお</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('きみがためは')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>きみがためは</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('きり')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>きり</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SelectThreeCharacterTi',
  methods: {
    updateCurrentCard (value) {
      this.$store.dispatch('updateCurrentCard', {current_card: value})
    }
  }
}
</script>
