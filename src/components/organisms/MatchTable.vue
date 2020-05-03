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
import { mapState } from 'vuex'
import BTable from '../atoms/BTable'
export default {
  name: 'MatchTable',
  components: {
    BTable
  },
  data () {
    return {
      i: 0,
      table_data: [],
      table_title: '途中経過',
      header_data: [
        {
          text: 'index',
          align: 'start',
          sortable: false,
          value: 'table_index',
        },
        { text: '詠まれた札', sortable: false, value: 'card_name' },
        { text: '取った人', sortable: false, value: 'which_take' },
        { text: 'お手つき', sortable: false, value: 'otetsuki' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      card_name: [],
      which_take: [],
      otetsuki: [],
      card_difference: [],
      is_table_empty: true
    }
  },
  mounted () {
    this.$store.watch(
      (state, getters) => getters.otetsuki_user,
      (newValue, oldValue) => { // eslint-disable-line no-unused-vars
        this.otetsuki = this.$store.state.otetsuki_user
        this.addTableData()
        this.is_table_empty = false
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
      if (this.is_table_empty) {
        for (; this.i < this.which_take.length; this.i++) {
          this.table_data.push({
            table_index: this.i + 1,
            card_name: this.all_card[this.i],
            which_take: this.which_take[this.i],
            otetsuki: this.otetsuki_user[this.i]
          })
        }
      }
    }
  }
}
</script>
