<template>
  <div>
    App
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data() {
    return {
      positiveCase: [],
      hospitalizedCases: [],
      arrInIcu: [],
      arrInVentilators: [],
      arrRecover: [],
      arrDeaths: []
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
