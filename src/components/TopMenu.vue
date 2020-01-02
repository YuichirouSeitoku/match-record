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
            <div @click="test">
                <p>再描画します</p>
            </div>
        </div>
        <div>
            <p>tableを表示します</p>
            <table>
                <tr v-for="index in card_indexes" :key='index'>
                    <td>{{ index }}</td>
                    <td>{{ take_card[index-1] }}</td>
                    <td>{{ otetsuki_user[index-1] }}</td>
                </tr>
            </table>
        </div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TopMenu',
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
    ...mapState(['otetsuki_user'])
  },
  methods: {
    CountCardIndex () {
      this.$store.dispatch('updateCardIndex')
    },
    test () {
      // eslint-disable-next-line no-unused-expressions
      this.forceUpdate
      console.log(`再描画しました`)
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
