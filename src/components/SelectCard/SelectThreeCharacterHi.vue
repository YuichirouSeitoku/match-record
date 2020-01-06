<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('ひとは')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>ひとは</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('ひとも')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>ひとも</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('ひさ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>ひさ</p>
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
