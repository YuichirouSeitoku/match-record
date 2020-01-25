<template>
    <div>
        <div>
            <p>自分 or 相手がお手つきをした？</p>
        </div>
        <div class="columns">
            <div class="column">
                <RouterLink to ='/QuestionOtetsukiDetail'>
                    <div class="box">
                        <p>はい</p>
                    </div>
                </RouterLink>
            </div>

            <div class="column">
                <div @click="updateOtetsukiUser('なし')">
                    <RouterLink to = '/TopMenu'>
                        <div class="box">
                            <p>いいえ</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'QuestionExistOtetsuki',
  methods: {
    updateOtetsukiUser (value) {
      this.$store.dispatch('updateOtetsukiUser', {otetsuki_user: value})
    }
  }
}
</script>
