<template>
  <div>
    <b-email-form v-on:fromBEmailForm="fromEmailAndPasswordForEmail"/>
    <b-password-form v-on:fromBPasswordForm="fromEmailAndPasswordForPass"/>
  </div>
</template>

<script>
import BEmailForm from '../atoms/BEmailForm'
import BPasswordForm from '../atoms/BPasswordForm'
export default {
  name: 'EmailAndPassword',
  components: {
    BEmailForm,
    BPasswordForm
  },
  methods: {
    fromEmailAndPasswordForEmail (username) {
      this.$emit('fromEmailAndPasswordForEmail', username)
    },
    fromEmailAndPasswordForPass (password) {
      this.$emit('fromEmailAndPasswordForPass', password)
    }
  }
}
</script>
