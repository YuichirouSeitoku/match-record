<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('わがい')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>わがい</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('わがそ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>わがそ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('わたのはらこ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>わたのはらこ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('わたのはらや')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>わたのはらや</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('わすら')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>わすら</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('わすれ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>わすれ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('わび')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>わび</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SelectSevenCharacterWa',
  methods: {
    updateCurrentCard (value) {
      this.$store.dispatch('updateCurrentCard', {current_card: value})
    }
  }
}
</script>
