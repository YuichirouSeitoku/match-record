<template>
	<div class="main_container">
        <div>
            <p>誰がお手つきをしたか</p>
        </div>
		<div @click="updateOtetsukiUser('自分')">
			<RouterLink to ='/'>
				<p>自分 1枚</p>
			</RouterLink>
		</div>

		<div @click="updateOtetsukiUser('自分ダブ')">
			<RouterLink to = '/'>
				<p>自分 ダブ</p>
			</RouterLink>
		</div>

		<div @click="updateOtetsukiUser('相手')">
			<RouterLink to = '/'>
				<p>相手 1枚</p>
			</RouterLink>
		</div>
		<div @click="updateOtetsukiUser('相手ダブ')">
			<RouterLink to = '/'>
				<p>相手 ダブ</p>
			</RouterLink>
		</div>
	</div>
</template>
<script>
export default {
  name: 'QuestionOtetsukiDetail',
  methods: {
    updateOtetsukiUser (value) {
      this.$store.dispatch('updateOtetsukiUser', {otetsuki_user: value})
    }
  }
}
</script>
