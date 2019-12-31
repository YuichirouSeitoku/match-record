<template>
	<div class="main_container">
        <div>
            <p>誰がお手つきをしたか</p>
        </div>
		<div>
			<RouterLink to ='/'>
				<p>自分 1枚</p>
			</RouterLink>
		</div>

		<div>
			<RouterLink to = '/'>
				<p>自分 ダブ</p>
			</RouterLink>
		</div>

		<div>
			<RouterLink to = '/'>
				<p>相手 1枚</p>
			</RouterLink>
		</div>
		<div>
			<RouterLink to = '/'>
				<p>相手 ダブ</p>
			</RouterLink>
		</div>
	</div>
</template>
<script>
export default {
  name: 'QuestionOtetsukiDetail'
}
</script>
