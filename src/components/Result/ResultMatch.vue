<template>
  <div>
    <v-card
      class="my-3 pt-3 elevation-1"
      outlined
    >
      <v-row justify="center">
        <p class="display-1 font-weight-bold">
          <span class="under">
            試合結果
          </span>
        </p>
      </v-row>
      <br>
      <v-container>
        <v-row>
          <v-col>
            <p class="title">勝敗:</p>
          </v-col>
          <v-col>
            <p class="title">{{ abs_difference  }}枚差で{{ which_win }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="title">自分のお手つき:</p>
          </v-col>
          <v-col>
            <p class="title">{{ player_otetsuki  }}回</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="title">自分のダブ:</p>
          </v-col>
          <v-col>
            <p class="title">{{ player_dabu  }}回</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="title">相手のお手つき:</p>
          </v-col>
          <v-col>
            <p class="title">{{ opponent_otetsuki  }}回</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="title">相手のダブ:</p>
          </v-col>
          <v-col>
            <p class="title">{{ opponent_dabu }}回</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card
      class="my-3 pt-3 elevation-1"
      outlined
      @click="saveContact"
    >
      <p class="text-center text--secondary font-weight-light">保存する</p>
    </v-card>
    <v-card
      class="my-3 pt-3 elevation-1"
      outlined
      to="/BaseMenu"
    >
      <p class="text-center text--secondary font-weight-light">TOPに戻る</p>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import db from '../../firestore.js'
import firebase from 'firebase'

export default {
  name: 'BaseMenu',
  data () {
    return {
      final_card_difference: '',
      abs_difference: '',
      which_win: '',
      player_otetsuki: '',
      opponent_otetsuki: '',
      player_dabu: '',
      opponent_dabu: '',
      user: '',
      user_name: '',
      user_email: '',
      now: '',
      year: '',
      month: '',
      hour: '',
      min: '',
      current_time: '',
      all_card_data: '',
      take_card_data: '',
      otetsuki_user_data: '',
      player_offense_count_data: '',
      player_defense_count_data: '',
      player_otetsuki_count_data: '',
      player_dabu_count_data: '',
      opponent_otetsuki_count_data: '',
      opponent_dabu_count_data: '',
      opponent_name_data: '',
      card_difference_list_data: ''
    }
  },
  mounted () {
    this.final_card_difference = this.$store.state.card_difference_list.pop()
    this.player_otetsuki = this.$store.state.player_otetsuki_count
    this.opponent_otetsuki = this.$store.state.opponent_otetsuki_count
    this.player_dabu = this.$store.state.player_dabu_count
    this.opponent_dabu = this.$store.state.opponent_dabu_count

    if (Math.sign(this.final_card_difference)) {
      this.which_win = '勝ち'
    } else if (Math.sign(this.final_card_difference) === 0) {
      this.which_win = '引き分け'
    } else {
      this.which_win = '負け'
    }
    this.abs_difference = Math.abs(this.final_card_difference)
    this.all_card_data = this.$store.state.all_card
    this.take_card_data = this.$store.state.take_card
    this.otetsuki_user_data = this.$store.state.otetsuki_user
    this.player_offense_count_data = this.$store.state.player_offense_count
    this.player_defense_count_data = this.$store.state.player_defense_count
    this.player_otetsuki_count_data = this.$store.state.player_otetsuki_count
    this.player_dabu_count_data = this.$store.state.player_dabu_count
    this.opponent_otetsuki_count_data = this.$store.state.opponent_otetsuki_count
    this.opponent_dabu_count_data = this.$store.state.opponent_dabu_count
    this.opponent_name_data = this.$store.state.opponent_name
    this.card_difference_list_data = this.$store.state.card_difference_list
  },
  computed: {
    ...mapState(['card_difference_list']),
    ...mapState(['player_otetsuki_count']),
    ...mapState(['opponent_otetsuki_count']),
    ...mapState(['player_dabu_count']),
    ...mapState(['opponent_dabu_count']),
    ...mapState(['opponent_name']),
    ...mapState(['all_card']),
    ...mapState(['take_card']),
    ...mapState(['otetsuki_user']),
    ...mapState(['player_offense_count']),
    ...mapState(['player_defense_count'])
  },
  methods: {
    CountCardIndex () {
      this.$store.dispatch('updateCardIndex')
    },
    addTableData: function (num) {
      this.table_data.push({
        index: num + 1,
        card_name: this.$store.state.all_card[num],
        otetsuki: this.$store.state.otetsuki_user[num],
        which_take: this.$store.state.take_card[num]
      })
    },
    getCurrentTime () {
      this.now = new Date()
      this.year = this.now.getFullYear()
      this.month = this.now.getMonth() + 1
      this.date = this.now.getDate()
      this.hour = this.now.getHours()
      this.min = this.now.getMinutes()

      this.current_time = this.year + '年' + this.month + '月' + this.date + '日' + this.hour + '時' + this.min + '分'
    },
    saveContact () {
      this.user = firebase.auth().currentUser
      console.log('this.user')
      console.log(this.user.email)
      if (this.user != null) {
        this.user_email = this.user.email
        this.getCurrentTime()
        db.collection(this.user_email).doc(this.current_time).set({
          all_card: this.all_card_data,
          take_card: this.take_card_data,
          otetsuki_user: this.otetsuki_user_data,
          player_defense_count: this.player_defense_count_data,
          player_otetsuki_count: this.player_otetsuki_count_data,
          player_offense_count: this.player_offense_count_data,
          player_dabu_count: this.player_dabu_count_data,
          opponent_otetsuki_count: this.opponent_otetsuki_count_data,
          opponent_dabu_count: this.opponent_dabu_count_data,
          opponent_name: this.opponent_name_data,
          card_difference_list: this.card_difference_list_data,
          abs_difference: this.abs_difference,
          which_win: this.which_win,
          email: this.user.email
        }).then(function () {
          alert('success')
        }).catch(function (error) {
          alert('Error:' + error)
        })
      } else {
        alert('お試し版ではこの機能はご利用になれません。')
      }
    }
  }
}
</script>
<style scopoed>
.under {
  border-bottom: solid 7px #ff99ab;
}
</style>
