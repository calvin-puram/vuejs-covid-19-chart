<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: ['labels', 'chartdata', 'options'],

  mounted() {
    const dates = this.chartdata.map(info => info.date).reverse()
    const totals = this.chartdata.map(info => info.total).reverse()

    this.renderChart({
      labels: dates,
      datasets: [
        {
          label: this.labels,
          data: totals
        }
      ]
    })
  }
}
</script>
