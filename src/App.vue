<template>
  <div class="container">
    <h1 class="my-5 text-center">Covid-19 data Visualization</h1>
    <div class="row " v-if="positiveCase.length > 0">
      <div class="col-md-6 mx-auto">
        <h3>Positive</h3>
        <LineChart
          :chartdata="positiveCase"
          :options="options"
          labels="Positive Cases"
          :chartcolors="positiveChartColor"
        />
      </div>
    </div>

    <div class="row mt-5" v-if="hospitalizedCases.length > 0">
      <div class="col-md-6 mx-auto">
        <h3>Hospitalized</h3>
        <LineChart
          :chartdata="hospitalizedCases"
          :options="options"
          labels="Hospitalized"
          :chartcolors="hospitalizedChartColor"
        />
      </div>
    </div>

    <div class="row mt-5" v-if="arrRecover.length > 0">
      <div class="col-md-6 mx-auto">
        <h3>Recovered</h3>
        <LineChart
          :chartdata="arrRecover"
          :options="options"
          labels="Recovered"
          :chartcolors="recoverChartColor"
        />
      </div>
    </div>

    <div class="row mt-5" v-if="arrDeaths.length > 0">
      <div class="col-md-6 mx-auto">
        <h3>Death</h3>
        <LineChart
          :chartdata="arrDeaths"
          :options="options"
          labels="Deaths"
          :chartcolors="deathChartColor"
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
      },
      positiveChartColor: {
        borderColor: '#077187',
        pointBorderColor: '#0E1428',
        pointBackgroundColor: '#AFD6AC',
        backgroundColor: '#74A57F'
      },
      hospitalizedChartColor: {
        borderColor: '#fff',
        pointBorderColor: '#858eab',
        pointBackgroundColor: '#858eab',
        backgroundColor: '#260'
      },
      recoverChartColor: {
        borderColor: '#fff',
        pointBorderColor: '#0E1428',
        pointBackgroundColor: 'grey',
        backgroundColor: 'orange'
      },
      deathChartColor: {
        borderColor: '#fff',
        pointBorderColor: '#0E1428',
        pointBackgroundColor: '#fff',
        backgroundColor: 'red'
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
