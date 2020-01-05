<script>
import { mapState } from 'vuex'
import { Bar } from 'vue-chartjs'
export default {
  extends: Doughnut,
  data () {
    return {
      card_indexes: [],
      table_list: [],
      offense_and_defense: [],
      i: 0
    }
  },
  computed: {
    ...mapState(['otetsuki_user']),
    ...mapState(['player_offense_count']),
    ...mapState(['player_defense_count'])
  },
  mounted () {
    this.renderChart({
      labels: [ '抜いた', '守った' ],
      datasets: [{
        data: [this.$store.state.player_offense_count, this.$store.state.player_defense_count],
        backgroundColor: [
          '#FF6384',
          '#36A2EB'
        ]
      }]
    })
  }
}
</script>
