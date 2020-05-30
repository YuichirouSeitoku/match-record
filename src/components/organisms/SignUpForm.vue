<template>
  <div>

    <b-simple-form :formLabel=emailLabel @fromBSimpleForm="updateEmail"/>
    <b-password-form @fromBPasswordForm="updatePassword"/>

    <v-row justify="center">
      <div class="my-2">
        <b-button :button-name="buttonName" @clickedBButton="changeButton"/>
      </div>
    </v-row>

    <v-row justify="center">
      <router-link to="/">
        <p>ログインはこちら</p>
      </router-link>
    </v-row>

  </div>
</template>

<script>
import firebase from 'firebase'
import BSimpleForm from '@/components/atoms/BSimpleForm'
import BPasswordForm from '@/components/atoms/BPasswordForm'
import BButton from '@/components/atoms/BButton'
export default {
  name: 'SignUpForm',
  components: {
    BSimpleForm,
    BPasswordForm,
    BButton
  },
  data () {
    return {
      email: '',
      password: '',
      emailLabel: 'email',
      buttonName: '新規登録'
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert('Create account: ', user.email)
        })
        .catch(error => {
          alert(error.message)
        })
    },
    updateEmail (email) {
      this.email = email
    },
    updatePassword (password) {
      this.password = password
    },
    changeButton () {
      this.signUp()
    }
  }
}
</script>
