<template>
    <div>
        <v-card
          class="ma-4"
          outlined
        >
            <p class="title text-center">札取得時に攻めた割合・守った割合</p>
            <DoughnutChart></DoughnutChart>
        </v-card>
        <v-card
          class="ma-4"
          outlined
        >
            <p class="title text-center">枚数差の推移</p>
            <LineChart></LineChart>
        </v-card>
    </div>
</template>
<script>
import DoughnutChart from '@/components/organisms/DoughnutChart'
import LineChart from '@/components/organisms/LineChart'
export default {
  name: 'ShowChart',
  components: {
    DoughnutChart,
    LineChart
  }
}
</script>
