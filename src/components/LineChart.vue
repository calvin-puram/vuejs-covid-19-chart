<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: {
    labels: {
      type: String
    },
    chartdata: {
      type: Array
    },
    options: {
      type: Object
    }
  },
  mounted() {
    const dates = this.chartdata.map(info => info.date).reverse()
    const totals = this.chartdata.map(info => info.total).reverse()

    this.renderChart(
      {
        labels: dates,
        datasets: {
          labels: dates,
          data: totals
        }
      },
      this.options
    )
  }
}
</script>
