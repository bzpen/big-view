<template>
  <div ref="echarts" :style="{'width': 100+ '%','height': kHOne + 'px'}"></div>
</template>

<script>
  export default {
    data(){
      return{
        option : {},
        echarts : {},
        kHOne:200,
        titleFontSize: 16,
        screenWidth: 0,
        screenHeight:0
      }
    },
    mounted(){
      this.getScreenWidth()
      this.getScreenHeight()
      // 初始化
      this.initEcharts()
      this.screenAdapter()
    },  
    methods:{
      // 字体大小根据宽度自适应
      getScreenWidth(){
        this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        //console.log("宽度->"+this.screenWidth);
      },
      // 获取浏览器高度进行自适应
      getScreenHeight() {
          this.screenHeight = window.innerHeight || document.documentElement.innerHeight || document.body.clientHeight;
          // 四舍五入取整数
          this.kHOne = Math.round(this.screenHeight * 0.44);
          //console.log("高度->"+this.screenHeight +"-"+ this.kHOne);
      },
      // 字体大小自适应
      screenAdapter() {
        this.titleFontSize = (this.$refs.echarts.offsetWidth / 100) * 2;
        const adapterOption = {
          title: {
            textStyle: {
              fontSize: Math.round(this.titleFontSize * 2),
            },
          },
          // 圆点分类标题
          legend: {
            textStyle: {
              fontSize: Math.round(this.titleFontSize * 1.2),
            },
          }
        };
        // 图标自适应变化配置
        this.echarts.setOption(adapterOption);
        this.echarts.resize();
      },
      // 初始化echarts数据
      initEcharts(){
        this.echarts = this.$echarts.init(this.$refs.echarts,'shine');
        // var myChart = this.$echarts.init(document.getElementById('main'));

        this.option = {
          title: {
            text: '柑橘种植品种分布',
            // subtext: 'Fake Data',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 150, name: '血橙' },
                { value: 322, name: '濑户见' },
                { value: 183, name: '沃柑' },
                { value: 208, name: '明日见' },
                { value: 40, name: '爱媛38号' },
                { value: 1116, name: '大雅' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        this.echarts.setOption(this.option);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
