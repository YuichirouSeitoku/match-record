<template>
    <div>
        <div>
            <p>誰がお手つきをしたか</p>
        </div>
        <div class="columns">
            <div class="column" @click="updateOtetsukiUser('自分')">
                <RouterLink to ='/'>
                    <div class="box">
                        <p>自分 1枚</p>
                    </div>
                </RouterLink>
            </div>

            <div class="column" @click="updateOtetsukiUser('自分ダブ')">
                <RouterLink to = '/'>
                    <div class="box">
                        <p>自分 ダブ</p>
                    </div>
                </RouterLink>
            </div>

            <div class="column" @click="updateOtetsukiUser('相手')">
                <RouterLink to = '/'>
                    <div class="box">
                        <p>相手 1枚</p>
                    </div>
                </RouterLink>
            </div>
            <div class="column" @click="updateOtetsukiUser('相手ダブ')">
                <RouterLink to = '/'>
                    <div class="box">
                        <p>相手 ダブ</p>
                    </div>
                </RouterLink>
            </div>
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
