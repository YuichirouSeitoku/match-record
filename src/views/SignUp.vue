<template>
  <div class="signup">
    <email-and-password v-on:fromEmailAndPasswordForEmail="updateUsername" v-on:fromEmailAndPasswordForPass="updatePassword"/>
    <v-row justify="center">
      <div class="my-2" @click="signUp">
        <v-btn>新規登録</v-btn>
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
import EmailAndPassword from '@/components/organisms/EmailAndPassword'
export default {
  name: 'SignUp',
  components: {
    EmailAndPassword
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert('Create account: ', user.email)
        })
        .catch(error => {
          alert(error.message)
        })
    },
    updateUsername (username) {
      this.username = username
    },
    updatePassword (password) {
      this.password = password
    }
  }
}
</script>
