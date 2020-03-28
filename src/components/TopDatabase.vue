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
      card_indexes: '',
      i: 0,
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
      card_name: [],
      which_take: [],
      otetetsuki: [],
      card_difference: []
    }
  },
  mounted () {
    this.card_difference = this.$store.state.card_difference_list
    this.card_indexes = this.$store.state.card_index_count
    this.card_name = this.$store.state.all_card
    this.which_take = this.$store.state.take_card
    this.otetsuki = this.$store.state.otetsuki_user
    this.ReadFirestore()
  },
  methods: {
    ReadFirestore () {
      this.user = firebase.auth().currentUser
      if (this.user != null) {
        this.user_email = this.user.email
        console.log('this.user_email')
        console.log(this.user_email)
        db.collection(this.user_email).get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.table_data.push({
              date: doc.id,
              opponent_name: doc.data().opponent_name,
              which_win: doc.data().which_win,
              abs_difference: doc.data().abs_difference
            })
          })
        })
      }
    },
    CountCardIndex () {
      this.$store.dispatch('updateCardIndex')
    }
  }
}
</script>
