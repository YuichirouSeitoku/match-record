<template>
    <div>
        <div>
            <p class="text-center text--secondary font-weight-light">自分 or 相手がお手つきをした？</p>
        </div>
        <div>
            <div>
                <v-card
                    class="my-3 pt-3 elevation-1"
                    outlined
                    to="/QuestionOtetsukiDetail"
                >
                    <p class="text-center text--secondary font-weight-light">はい</p>
                </v-card>
            </div>
            <div @click="updateOtetsukiUser('なし')">
                <v-card
                    class="my-3 pt-3 elevation-1"
                    outlined
                    to="/BaseMenu"
                >
                        <p class="text-center text--secondary font-weight-light">いいえ</p>
                </v-card>
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
