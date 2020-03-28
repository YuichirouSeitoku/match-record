<template>
    <div>
        <div class="box">
            <p>対戦相手の名前を入力してください。</p>
            <b-field>
                <b-input placeholder="Name" v-model="opponent_name_data"></b-input>
            </b-field>
            <b-button @click="SaveOpponentName">Ok</b-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InputOpponentName',
  data () {
    return {
      opponent_name_data: ''
    }
  },
  methods: {
    SaveOpponentName () {
      this.$store.dispatch('updateOpponentName', {opponent_name: this.opponent_name_data})
      this.$router.push('./ResultMatch')
    }
  }
}
</script>
<style scopoed>
</style>
