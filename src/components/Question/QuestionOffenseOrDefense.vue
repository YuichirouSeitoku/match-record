<template>
	<div class="main_container">
		<div @click="countPlayerOffense">
			<RouterLink to ='/QuestionExistOtetsuki'>
				<p>攻めてとった？</p>
			</RouterLink>
		</div>

		<div @click="countPlayerDefense">
			<RouterLink to = '/QuestionExistOtetsuki'>
				<p>守ってとった？</p>
			</RouterLink>
		</div>

	</div>
</template>
<script>
export default {
  name: 'QuestionExistCard',
  methods: {
    countPlayerOffense () {
      this.$store.dispatch('updatePlayerOffenseCount')
    },
    countPlayerDefense () {
      this.$store.dispatch('updatePlayerDefenseCount')
    }
  }
}
</script>
