<template>
	<div>
        <div class="box">
            <b-table :data="table_data" :columns="table_columns" :mobile-cards="false"></b-table>
        </div>
	</div>
</template>

<script>
import db from '../firestore.js'
import firebase from 'firebase'

export default {
  name: 'TopDatabse',
  data () {
    return {
      user: '',
      user_email: '',
      table_data: [],
      table_columns: [
        {
          field: 'date',
          label: '日付'
        },
        {
          field: 'opponent_name',
          label: '対戦相手'
        },
        {
          field: 'which_win',
          label: '勝敗'
        },
        {
          field: 'abs_difference',
          label: '枚差'
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
