<template>
	<div class="main_container">
        <div>
            <p>Top画面</p>
		</div>
        <div @click="CountCardIndex" class="box">
			<RouterLink to ='/InputData/0'>
				<p>次の札を入力する</p>
			</RouterLink>
		</div>
        <div>
            <b-table :data="table_data" :columns="table_columns" :mobile-cards="false"></b-table>
        </div>
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
      otetetsuki: []
    }
  },
  mounted () {
    this.card_indexes = this.$store.state.card_index_count
    this.card_name = this.$store.state.all_card
    this.which_take = this.$store.state.take_card
    this.otetsuki = this.$store.state.otetsuki_user
    console.log('iを表示します')
    console.log(this.i)
    for (; this.i < this.$store.state.card_index_count; this.i++) {
      console.log('for文のなか')
      this.addTableData(this.i)
    }
  },
  computed: {
    ...mapState(['all_card']),
    ...mapState(['card_index_count']),
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
      console.log('addTableDataのなかだよ')
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
