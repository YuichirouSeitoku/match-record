<template>
	<div class="main_container">
        <div>
            <p>自分 or 相手がお手つきをした？</p>
        </div>
		<div>
			<RouterLink to ='/QuestionOtetsukiDetail'>
				<p>はい</p>
			</RouterLink>
		</div>

		<div>
			<RouterLink to = '/TopMenu'>
				<p>いいえ</p>
			</RouterLink>
		</div>

	</div>
</template>
<script>
export default {
  name: 'QuestionExistOtetsuki'
}
</script>
