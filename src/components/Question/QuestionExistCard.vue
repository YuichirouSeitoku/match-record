<template>
	<div class="main_container">
		<div>
			<RouterLink to ='/QuestionWhichTake'>
				<p>出札？</p>
			</RouterLink>
		</div>

		<div>
			<RouterLink to = '/QuestionWhichTake'>
				<p>空札？</p>
			</RouterLink>
		</div>

	</div>
</template>
<script>
export default {
  name: 'QuestionExistCard'
}
</script>
