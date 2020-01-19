<template>
    <div>
        <div>
            <p>とったのは？</p>
        </div>
        <div class="columns">
            <div @click="setTakeCard('自分')" class="column">
                <RouterLink to ='/QuestionOffenseOrDefense'>
                    <div class="box">
                        <p>自分</p>
                    </div>
                </RouterLink>
            </div>
            <div @click="setTakeCard('相手')" class="column">
                <RouterLink to = '/QuestionExistOtetsuki'>
                    <div class="box">
                        <p>相手</p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'QuestionWhichTake',
  methods: {
    setTakeCard (value) {
      this.$store.dispatch('updateTakeCard', {take_card: value})
    }
  }
}
</script>
