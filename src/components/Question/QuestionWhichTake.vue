<template>
	<div class="main_container">
        <div>
            <p>とったのは？</p>
        </div>
		<div @click="setTakeCard('自分')">
			<RouterLink to ='/QuestionExistOtetsuki'>
				<p>自分</p>
			</RouterLink>
		</div>

		<div @click="setTakeCard('相手')">
			<RouterLink to = '/QuestionExistOtetsuki'>
				<p>相手</p>
			</RouterLink>
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
