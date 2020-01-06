<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('ちは')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>ちは</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('ちぎりき')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>ちぎりき</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('ちぎりお')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>ちぎりお</p>
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
