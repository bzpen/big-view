<template>
  <div class="echarts" ref="refChart" :style="{ height: echartsH + 'px'}"></div>
</template>

<script>
  require("../../assets/theme/shine")
  export default{
    props:[
      "echartsH"
    ],
    data(){
      return {
        option: {},
        chartInstance:{}
      }
    },
    mounted(){
      this.getDate()
    },
    methods:{
      getDate(){
        this.chartInstance = this.$echarts.init(this.$refs.refChart,'shine');
        this.option = {
          title:{
            show: true,
            text: `空气湿度（℃）`,
            textStyle:{
              color: '#82bef3'
            }
          },
          xAxis: {
            type: 'category',
            data: [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [20,21,15,16,18,30,20,15,16,18,30,20],
              type: 'line'
            }
          ]
        }
        this.chartInstance.setOption(this.option);
      }
    }
  }
</script>

<style scoped>
</style>
