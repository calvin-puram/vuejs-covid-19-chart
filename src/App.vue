<template>
  <div class="container">
    <div class="row mt-5" v-if="positiveCase.length > 0">
      <div class="col-md-6 mx-auto">
        <h3>Positive</h3>
        <LineChart
          :chartdata="positiveCase"
          :options="options"
          labels="Positive Cases"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import LineChart from './components/LineChart'

export default {
  components: {
    LineChart
  },
  data() {
    return {
      positiveCase: [],
      hospitalizedCases: [],
      arrInIcu: [],
      arrInVentilators: [],
      arrRecover: [],
      arrDeaths: [],
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  async created() {
    const { data } = await axios.get('https://covidtracking.com/api/us/daily')
    data.forEach(info => {
      const date = moment(info.date, 'YYYYMMDD').format('MM/DD')
      const {
        positive,
        hospitalized,
        inIcuCumulative,
        onVentilatorCumulative,
        recovered,
        death
      } = info

      if (data.length > 0) {
        this.positiveCase.push({ date, total: positive })
        this.hospitalizedCases.push({ date, total: hospitalized })
        this.arrInIcu.push({ date, total: inIcuCumulative })
        this.arrInVentilators.push({ date, total: onVentilatorCumulative })
        this.arrRecover.push({
          date,
          total: recovered
        })
        this.arrDeaths.push({ date, total: death })
      }
    })
  }
}
</script>
