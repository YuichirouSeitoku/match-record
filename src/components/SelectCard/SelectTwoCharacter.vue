<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('うら')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>うら</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('うか')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>うか</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('つく')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>つく</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('つき')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>つき</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('しの')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>しの</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('しら')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>しら</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('もも')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>もも</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('もろ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>もろ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('ゆう')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>ゆう</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('ゆら')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>ゆら</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SelectTwoCharacter',
  methods: {
    updateCurrentCard (value) {
      this.$store.dispatch('updateCurrentCard', {current_card: value})
    }
  }
}
</script>
