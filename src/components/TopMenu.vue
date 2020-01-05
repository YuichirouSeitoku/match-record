<template>
	<div class="main_container">
        <div>
            <p>Top画面</p>
		</div>
        <div @click="CountCardIndex">
			<RouterLink to ='/SelectCardTop'>
				<p>次の札を入力する</p>
			</RouterLink>
		</div>
        <div>
            <p>tableを表示します</p>
            <table>
                <tr v-for="index in card_indexes" :key='index'>
                    <td>{{ index }}</td>
                    <td>{{ all_card[index-1] }}</td>
                    <td>{{ take_card[index-1] }}</td>
                    <td>{{ otetsuki_user[index-1] }}</td>
                </tr>
            </table>
        </div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import DoughnutChart from './DoughnutChart'
export default {
  name: 'TopMenu',
  components: {
    DoughnutChart
  },
  data () {
    return {
      card_indexes: [],
      table_list: [],
      i: 0
    }
  },
  mounted () {
    this.card_indexes = this.$store.state.card_index_count
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
    addTableList: function (num) {
      this.table_list.push({
        index: this.$store.state.all_card[num] + 1,
        take: this.$store.state.take_card[num],
        otetsuki: this.$store.state.otetsuki_user[num]
      })
    }
  }
}
</script>
