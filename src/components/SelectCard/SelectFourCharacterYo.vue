<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('よも')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>よも</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('よを')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>よを</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('よのなかよ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>よのなかよ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('よのなかは')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>よのなかは</p>
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
