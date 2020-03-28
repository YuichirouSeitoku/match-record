import firebase from 'firebase'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBdL5_Pi9X1YfklyEHxBYgmr6YRZJBmlwY',
  authDomain: 'karuta-record-dayo.firebaseapp.com',
  databaseURL: 'https://karuta-record-dayo.firebaseio.com',
  projectId: 'karuta-record-dayo',
  storageBucket: 'karuta-record-dayo.appspot.com',
  messagingSenderId: '216625187794',
  appId: '1:216625187794:web:f27f7e8091761e0dbc960b'
})

const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore
