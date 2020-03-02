<template>
	<div>
        <div @click="CountCardIndex" class="box">
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
      card_indexes: '',
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
    for (; this.i < this.$store.state.card_index_count; this.i++) {
      this.addTableData(this.i)
    }
  },
  computed: {
    ...mapState(['all_card']),
    ...mapState(['card_index_count']),
    ...mapState(['take_card']),
    ...mapState(['otetsuki_user']),
    ...mapState(['player_offense_count']),
    ...mapState(['player_defense_count']),
    ...mapState(['card_difference_list'])
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
