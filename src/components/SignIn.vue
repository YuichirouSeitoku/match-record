<template>
  <div class="signin">
    <input type="text" placeholder="Email" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <b-button rounded @click="signIn">ログイン</b-button>
    <router-link to="/signup">
        <p>新規登録はこちら</p>
    </router-link>
    <router-link to="/TopMenu">
       <p>お試し版を利用する</p>
    </router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'SignIn',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          alert('Success!')
          this.$router.push('/TopMenu')
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
