<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('いまは')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>いまは</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('いまこ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>いまこ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('いに')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>いに</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SelectThreeCharacterI',
  methods: {
    updateCurrentCard (value) {
      this.$store.dispatch('updateCurrentCard', {current_card: value})
    }
  }
}
</script>
