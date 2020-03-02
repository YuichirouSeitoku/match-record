<template>
    <div>
        <div class="box">
            <p class="is-size-1 has-text-weight-medium has-text-centered">
                <span class="under">
                    試合結果
                </span>
            </p>
            <br>
            <div class="columns is-mobile">
                <div class="column is-6">
                    <p class="is-size-4 has-text-weight-medium has-text-left">勝敗:</p>
                </div>
                <div class ="column">
                    <p class="is-size-4 has-text-weight-medium has-text-left">{{ abs_difference  }}枚差で{{ which_win }}</p>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-6">
                    <p class="is-size-4 has-text-weight-medium has-text-left">自分のお手つき:</p>
                </div>
                <div class ="column">
                    <p class="is-size-4 has-text-weight-medium has-text-left">{{ player_otetsuki  }}回</p>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-6">
                    <p class="is-size-4 has-text-weight-medium has-text-left">自分のダブ:</p>
                </div>
                <div class ="column">
                    <p class="is-size-4 has-text-weight-medium has-text-left">{{ player_dabu  }}回</p>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-6">
                    <p class="is-size-4 has-text-weight-medium has-text-left">相手のお手つき:</p>
                </div>
                <div class ="column">
                    <p class="is-size-4 has-text-weight-medium has-text-left">{{ opponent_otetsuki  }}回</p>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-6">
                    <p class="is-size-4 has-text-weight-medium has-text-left">相手のダブ:</p>
                </div>
                <div class ="column">
                    <p class="is-size-4 has-text-weight-medium has-text-left">{{ opponent_dabu  }}回</p>
                </div>
            </div>
        </div>
        <div class="box">
            <p class="has-text-weight-medium has-text-centered">保存する</p>
        </div>
        <RouterLink to = '/TopMenu'>
            <div class="box">
                <p class="has-text-weight-medium has-text-centered">TOPに戻る</p>
            </div>
        </RouterLink>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TopMenu',
  data () {
    return {
      final_card_difference: '',
      abs_difference: '',
      which_win: '',
      player_otetsuki: '',
      opponent_otetsuki: '',
      player_dabu: '',
      opponent_dabu: ''
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
    } else {
      this.which_win = '負け'
    }
    this.abs_difference = Math.abs(this.final_card_difference)
  },
  computed: {
    ...mapState(['card_difference_list']),
    ...mapState(['player_otetsuki_count']),
    ...mapState(['opponent_otetsuki_count']),
    ...mapState(['player_dabu_count']),
    ...mapState(['opponent_dabu_count'])
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
    }
  }
}
</script>
<style scopoed>
.under {
  border-bottom: solid 10px #ff99ab;
}
</style>
