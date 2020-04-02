<template>
	<div>
        <div class="box">
            <RouterLink to ='/InputData/0'>
                <p class="has-text-weight-medium has-text-centered">次の札を入力する</p>
            </RouterLink>
        </div>
        <div class="box">
            <b-table :data="table_data" :columns="table_columns" :mobile-cards="false"></b-table>
        </div>
        <RouterLink to = '/ConfirmFinishMatch'>
            <div class="box">
                <p class="has-text-weight-medium has-text-centered">試合終了</p>
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
      i: 0,
      table_data: [],
      table_columns: [
        {
          field: 'index',
          label: 'index',
          width: '40',
          numeric: true
        },
        {
          field: 'card_name',
          label: '詠まれた札'
        },
        {
          field: 'which_take',
          label: '取った人'
        },
        {
          field: 'otetsuki',
          label: 'お手つき'
        }
      ],
      card_name: [],
      which_take: [],
      otetsuki: [],
      card_difference: [],
      table_data_boolean: true
    }
  },
  mounted () {
    this.$store.watch(
      (state, getters) => getters.otetsuki_user,
      (newValue, oldValue) => {
        this.otetsuki = this.$store.state.otetsuki_user
        this.addTableData()
        this.table_data_boolean = false
      }
    )
    this.card_difference = this.$store.state.card_difference_list
    this.card_name = this.$store.state.all_card
    this.which_take = this.$store.state.take_card
    this.addTableData()
  },
  computed: {
    ...mapState(['all_card']),
    ...mapState(['take_card']),
    ...mapState(['otetsuki_user']),
    ...mapState(['player_offense_count']),
    ...mapState(['player_defense_count']),
    ...mapState(['card_difference_list'])
  },
  methods: {
    addTableData () {
      this.i = 0
      this.table_data = []
      if (this.table_data_boolean) {
        for (; this.i < this.which_take.length; this.i++) {
          this.table_data.push({
            index: this.i + 1,
            card_name: this.all_card[this.i],
            otetsuki: this.otetsuki_user[this.i],
            which_take: this.which_take[this.i]
          })
        }
      }
    }
  }
}
</script>
