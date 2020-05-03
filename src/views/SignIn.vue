<template>
  <div>
    <email-and-password v-on:fromEmailAndPasswordForEmail="updateUsername" v-on:fromEmailAndPasswordForPass="updatePassword"/>
    <v-row justify="center">
      <div class="my-2" @click="signIn">
        <v-btn>ログイン</v-btn>
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
import EmailAndPassword from '@/components/organisms/EmailAndPassword'
export default {
  name: 'SignIn',
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
    signIn () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => { // eslint-disable-line no-unused-vars
          alert('Success!')
          this.$router.push('/BaseMenu')
        },
        err => {
          alert(err.message)
        }
      )
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
