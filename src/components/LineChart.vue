<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: ['labels', 'chartdata', 'options', 'chartcolors'],

  mounted() {
    const dates = this.chartdata.map(info => info.date).reverse()
    const totals = this.chartdata.map(info => info.total).reverse()
    const {
      borderColor,
      pointBorderColor,
      pointBackgroundColor,
      backgroundColor
    } = this.chartcolors

    this.renderChart({
      labels: dates,
      datasets: [
        {
          label: this.labels,
          data: totals,
          borderColor,
          pointBorderColor,
          pointBackgroundColor,
          backgroundColor
        }
      ]
    })
  }
}
</script>
