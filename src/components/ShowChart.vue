<template>
    <div>
        <div class="box">
            <p class="has-text-centered">札取得時に攻めた割合・守った割合</p>
            <DoughnutChart></DoughnutChart>
        </div>
        <div class="box">
            <p class="has-text-centered">枚数差の推移</p>
            <LineChart></LineChart>
        </div>
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
