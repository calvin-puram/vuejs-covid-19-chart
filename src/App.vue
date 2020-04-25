<template>
  <div>
    App
  </div>
</template>

<script>
import axios from 'axios'

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
    const res = await axios.get('https://covidtracking.com/api/us/daily')
    console.log(res.data)
  }
}
</script>
