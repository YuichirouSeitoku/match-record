<template>
  <div>
    <p class="text-center">対戦相手の名前を入力してください。</p>
    <v-form>
      <v-text-field 
        v-model="opponent_name_data"
        label="Name"
        outlined
        rounded
      ></v-text-field>
    </v-form>
    <v-row justify="center">
      <v-btn @click="SaveOpponentName">Ok</v-btn>
    </v-row>
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
      console.log("opponent_name_data")
      console.log(this.opponent_name_data)
      this.$store.dispatch('updateOpponentName', {opponent_name: this.opponent_name_data})
      this.$router.push('./ResultMatch')
    }
  }
}
</script>
<style scopoed>
</style>
