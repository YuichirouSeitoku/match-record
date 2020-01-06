<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('ながら')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>ながら</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('ながか')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>ながか</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('なげき')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>なげき</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('なげけ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>なげけ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('なにはが')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>わすら</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('なにはえ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>わすれ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('なにし')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>わび</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('なつ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>なつ</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SelectEightCharacter',
  methods: {
    updateCurrentCard (value) {
      this.$store.dispatch('updateCurrentCard', {current_card: value})
    }
  }
}
</script>
