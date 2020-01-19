<template>
    <div>
        <DoughnutChart></DoughnutChart>
        <LineChart></LineChart>
    </div>
</template>
<script>
import DoughnutChart from './DoughnutChart'
import LineChart from './LineChart'
export default {
  name: 'ShowChart',
  components: {
    DoughnutChart,
    LineChart
  }
}
</script>
