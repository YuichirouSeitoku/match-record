<template>
    <v-card
      class="mx-auto"
      max-width="600"
      outlined
    >
        <BTable :table_data='table_data' :table_title='table_title' :header_data='header_data'></BTable>
    </v-card>
</template>
<script>
import db from '../../firestore.js'
import firebase from 'firebase'
import BTable from '../atoms/BTable'
export default {
  name: 'DatabaseTable',
  components: {
    BTable
  },
  data () {
    return {
      user: '',
      user_email: '',
      table_data: [],
      table_title: '戦績',
      header_data: [
        {
          text: '日付',
          align: 'start',
          sortable: false,
          value: 'date'
        },
        {
          text: '対戦相手',
          sortable: false,
          value: 'opponent_name'
        },
        {
          text: '勝敗',
          sortable: false,
          value: 'which_win'
        },
        {
          text: '枚差',
          sortable: false,
          value: 'abs_difference'
        }
      ],
      date: '',
      index_of_year: '',
      index_of_date: ''
    }
  },
  mounted () {
    this.ReadFirestore()
  },
  methods: {
    ReadFirestore () {
      this.user = firebase.auth().currentUser
      if (this.user != null) {
        this.user_email = this.user.email
        db.collection(this.user_email).get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.CutOutDate(doc.id)
            this.table_data.push({
              date: this.date,
              opponent_name: doc.data().opponent_name,
              which_win: doc.data().which_win,
              abs_difference: doc.data().abs_difference
            })
          })
        })
      }
    },
    CutOutDate (docDate) {
      this.index_of_year = docDate.indexOf('年')
      this.index_of_date = docDate.indexOf('日')
      this.date = docDate.slice(this.index_of_year + 1, this.index_of_date + 1)
    }
  }
}
</script>
