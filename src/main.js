import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.use(Buefy)
Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBdL5_Pi9X1YfklyEHxBYgmr6YRZJBmlwY',
  authDomain: 'karuta-record-dayo.firebaseapp.com',
  databaseURL: 'https://karuta-record-dayo.firebaseio.com',
  projectId: 'karuta-record-dayo',
  storageBucket: 'karuta-record-dayo.appspot.com',
  messagingSenderId: '216625187794',
  appId: '1:216625187794:web:f27f7e8091761e0dbc960b'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
