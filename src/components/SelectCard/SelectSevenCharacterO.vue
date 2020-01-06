<template>
    <div class="columns">
        <div class="column" @click="updateCurrentCard('おおけ')">
            <RouterLink to ='/QuestionExistCard'>
                <div class="box">
                    <p>おおけ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('おおこ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>おおこ</p>
                </div>
            </RouterLink>
        </div>

        <div class="column" @click="updateCurrentCard('おおえ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>おおえ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('おも')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>おも</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('おと')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>おと</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('おぐ')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>おぐ</p>
                </div>
            </RouterLink>
        </div>
        <div class="column" @click="updateCurrentCard('おく')">
            <RouterLink to = '/QuestionExistCard'>
                <div class="box">
                    <p>おく</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SelectSevenCharacterO',
  methods: {
    updateCurrentCard (value) {
      this.$store.dispatch('updateCurrentCard', {current_card: value})
    }
  }
}
</script>
