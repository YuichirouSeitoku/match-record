<script>
import { mapState } from 'vuex'
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  data () {
    return {
      line_labels: '',
      line_data: '',
      line_options: '',
      card_difference: [],
      max_yaxes: 10,
      min_yaxes: -10
    }
  },
  computed: {
    ...mapState(['card_difference_list'])
  },
  mounted () {
    this.createLineData()
    this.renderChart(this.line_data, this.line_options)
  },
  methods: {
    createLineData () {
      this.card_difference = this.$store.state.card_difference_list
      this.line_labels = [...Array(this.card_difference.length).keys()]
      this.line_data = {
        labels: this.line_labels,
        datasets: [{
          data: this.card_difference,
          lineTension: 0,
          fill: false,
          borderColor: 'rgba(60, 190, 20, 0.8)'
        }]
      }
      this.line_options = {
        scales: {
          yAxes: [
            {
              ticks: {
                max: 10,
                min: -10,
                stepSize: 1
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                max: 100,
                stepSize: 1
              }
            }
          ]
        }
      }
    }
  }
}
</script>
