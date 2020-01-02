<template>
	<div class="main_container">
		<div>
			<RouterLink to ='/QuestionWhichTake'>
				<p>出札？</p>
			</RouterLink>
		</div>

		<div @click=setEmptyCard>
			<RouterLink to = '/QuestionExistOtetsuki'>
				<p>空札？</p>
			</RouterLink>
		</div>

	</div>
</template>
<script>
export default {
  name: 'QuestionExistCard',
  methods: {
    setEmptyCard () {
      this.$store.dispatch('updateTakeCard', {take_card: '空札'})
    }
  }
}
</script>
