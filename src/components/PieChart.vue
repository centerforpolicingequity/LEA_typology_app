<template>
    <Pie id="my-chart-id" :options="options" :data="data" />
</template>
  
<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'PieChart',
    components: { Pie },
    /*props: {
        data: {
            
        },
        options:{

        }
    },*/
    computed: {
      data() { return {}/* mutable chart data */ },
      options() { return {}/* mutable chart options */ }
    }
}
</script>

<style scoped>

</style>