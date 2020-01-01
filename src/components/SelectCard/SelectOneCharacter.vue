<template>
	<div class="main_container">
		<div @click="updateCurrentCard('む')">
			<RouterLink to ='/QuestionExistCard'>
				<p>む</p>
			</RouterLink>
		</div>

		<div @click="updateCurrentCard('す')">
			<RouterLink to = '/QuestionExistCard'>
				<p>す</p>
			</RouterLink>
		</div>

		<div @click="updateCurrentCard('め')">
			<RouterLink to = '/QuestionExistCard'>
				<p>め</p>
			</RouterLink>
		</div>

		<div @click="updateCurrentCard('ふ')">
			<RouterLink to = '/QuestionExistCard'>
				<p>ふ</p>
			</RouterLink>
		</div>

		<div @click="updateCurrentCard('さ')">
			<RouterLink to = '/QuestionExistCard'>
				<p>さ</p>
			</RouterLink>
		</div>

		<div @click="updateCurrentCard('ほ')">
			<RouterLink to = '/QuestionExistCard'>
				<p>ほ</p>
			</RouterLink>
		</div>

		<div @click="updateCurrentCard('せ')">
			<RouterLink to = '/QuestionExistCard'>
				<p>せ</p>
			</RouterLink>
		</div>
	</div>
</template>
<script>
export default {
  name: 'SelectOneCharacter',
  methods: {
    updateCurrentCard (value) {
      this.$store.dispatch('updateCurrentCard', {current_card: value})
    }
  }
}
</script>
