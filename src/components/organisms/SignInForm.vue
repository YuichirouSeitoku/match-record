<template>
  <div>

    <b-email-form @fromBEmailForm="updateEmail"/>
    <b-password-form @fromBPasswordForm="updatePassword"/>

    <v-row justify="center">
      <div class="my-2">
        <b-button :button-name="buttonName" @clickedBButton="changeButton"/>
      </div>
    </v-row>

    <v-row justify="center">
      <router-link to="/signup">
        <p>新規登録はこちら</p>
      </router-link>
    </v-row>

    <v-row justify="center">
      <router-link to="/BaseMenu">
        <p>お試し版を利用する</p>
      </router-link>
    </v-row>

  </div>
</template>

<script>
import firebase from 'firebase'
import BEmailForm from '@/components/atoms/BEmailForm'
import BPasswordForm from '@/components/atoms/BPasswordForm'
import BButton from '@/components/atoms/BButton'
export default {
  name: 'SignInForm',
  components: {
    BEmailForm,
    BPasswordForm,
    BButton
  },
  data () {
    return {
      email: '',
      password: '',
      buttonName: 'ログイン'
    }
  },
  methods: {
    signIn () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user => { // eslint-disable-line no-unused-vars
          alert('Success!')
          this.$router.push('/BaseMenu')
        },
        err => {
          alert(err.message)
        }
      )
    },
    updateEmail (email) {
      this.email = email
    },
    updatePassword (password) {
      this.password = password
    },
    changeButton () {
      this.signIn()
    }
  }
}
</script>
