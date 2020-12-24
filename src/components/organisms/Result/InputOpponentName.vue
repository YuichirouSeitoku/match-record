<template>
  <div>
    <b-card-text :cardText=sectionTitle />
    <b-simple-form :formLabel=formLabelName @fromBSimpleForm="updateOpponentName"/>
    <v-row justify="center">
      <b-button :buttonName=buttonName @clickedBButton="saveOpponentName"/>
    </v-row>
  </div>
</template>
<script>
import BCardText from '@/components/atoms/BCardText'
import BSimpleForm from '@/components/atoms/BSimpleForm'
import BButton from '@/components/atoms/BButton'
export default {
  name: 'BaseInputOpponentName',
  components: {
    BCardText,
    BSimpleForm,
    BButton
  },
  data () {
    return {
      sectionTitle: '対戦相手の名前を入力してください。',
      formLabelName: 'Name',
      opponentName: '',
      buttonName: 'ok'
    }
  },
  methods: {
    saveOpponentName () {
      this.$store.dispatch('updateOpponentName', {opponent_name: this.opponentName})
      this.$router.push('./BaseResultMatch')
    },
    updateOpponentName (formData) {
      this.opponentName = formData
    }
  }
}
</script>
