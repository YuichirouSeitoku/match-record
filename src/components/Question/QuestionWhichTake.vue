<template>
	<div class="main_container">
        <div>
            <p>とったのは？</p>
        </div>
		<div>
			<RouterLink to ='/QuestionExistOtetsuki'>
				<p>自分</p>
			</RouterLink>
		</div>

		<div>
			<RouterLink to = '/QuestionExistOtetsuki'>
				<p>相手</p>
			</RouterLink>
		</div>

	</div>
</template>
<script>
export default {
  name: 'QuestionWhichTake'
}
</script>
