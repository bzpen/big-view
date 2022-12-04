<!--  -->
<template>
  <div id="index">
       <!--  DataV-Loading加载动画 -->
       <dv-loading v-if="loading">Loading...</dv-loading>
       <!-- 总体布局-start -->
        <div v-else class="koi-body">
          <!-- 第一部分-头部-start -->
            <div class="header">
              <!-- 首页 -->
              <a class="homePage font-bold colorDeepskyblue" :style="{'font-size': Math.round(this.screenWidth/100) + 'px'}" href="https://gitee.com/BigCatHome/koi-screen" target="_self">
                丘陵山地无人果园管理平台
              </a>
              <!-- 时间 -->
              <div class="localTime colorPink" :style="{'font-size': Math.round(this.screenWidth/100) + 'px'}">{{ dateYear }} {{ dateWeek }} {{ dateDay }}</div>
              <!-- 装饰10 -->
              <dv-decoration-10 class="dv-dec-10-left" />
              <!-- 装饰8 -->
              <dv-decoration-8 class="dv-dec-8-left" :color="decorationColor"/>
              <!-- 标题 -->
              <span class="title font-bold colorText" :style="{'font-size': Math.round(this.screenWidth/100) + 'px'}">丘陵山地无人果园管理平台</span>
              <!-- 装饰8 -->
              <dv-decoration-8 class="dv-dec-8-right" :reverse="true" :color="decorationColor" />
              <!-- 装饰10 -->
              <dv-decoration-10 class="dv-dec-10-right"/>
            </div>
          <!-- 第一部分-头部-end -->

        <!-- Element-UI Layout布局 -->
        <div class="layoutHome">
          <el-row>
            <el-col :span="9">
              <div :style="{ height: kHOne + 'px'}">
                <dv-border-box-12 style="padding:12px">
                  <weather></weather>
                </dv-border-box-12>
              </div>
              <div :style="{ height: kHTwo + 'px'}">
                <dv-border-box-12 style="padding:12px">
                  <centerchart1></centerchart1>
                </dv-border-box-12>
              </div>
              <div class="title">物联设备详情</div>
              <div :style="{ height: kHThree + 'px'}">
                <!-- style="padding:12px" -->
                <dv-border-box-12 style="padding:12px">
                  <table3 :table-h="kHThree" @changeDetails="changeDetails"></table3>
                </dv-border-box-12>
              </div>
            </el-col>

            <!-- <el-col :span="4">
              <div :style="{ height: kHFive + 'px'}">
              </div>
            </el-col> -->

            <el-col :span="15">
              <div :style="{ height: kHSix + 'px'}">
              </div>
              <div class="title">
                {{ detailsTitle[detailsStatus] }}
              </div>
              <div :style="{ height: kHSeven + 'px'}">
                <dv-border-box-12 v-if="(detailsStatus === 0)" style="padding:12px">
                  <tableDetails :table-h="kHSeven"></tableDetails>
                </dv-border-box-12>
                <dv-border-box-12 style="padding:12px" v-if="(detailsStatus === 1)">
                  <tableDetails1 :table-h="kHSeven"></tableDetails1>
                </dv-border-box-12>
                <dv-border-box-12 style="padding:12px" v-if="(detailsStatus === 2)">
                  <tableDetails2 :table-h="kHSeven"></tableDetails2>
                </dv-border-box-12>
              </div>
            </el-col>

          </el-row>
        </div>
          <!-- 总体布局end -->
        </div>
   </div>
</template>

<script>
import { formatTime } from '../utils/index.js';
import weather from "../components/koi/left/weather.vue"
import table3 from "../components/home/table3.vue"
import tableDetails from "../components/home/table-details.vue"
import tableDetails1 from "../components/home/table-details1.vue"
import tableDetails2 from "../components/home/table-details2.vue"
import centerchart1 from "../components/koi/center/chart1.vue";
export default {
  name: 'index',
  components: {
    weather,
    table3,
    tableDetails,
    tableDetails1,
    tableDetails2,
    centerchart1,
  },
  data () {
  return {
    loading: true,
    // 装饰8颜色
    decorationColor: ['#568aea', '#000000'],
    // 时间
    timer: null,
    // 适应浏览器
    koiTime: null,
    // 定时跳转页面
    koiTimer: null,
    dateDay: null,
    dateYear: null,
    dateWeek: null,
    weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    // 获取浏览器可视区域高度（包含滚动条）、
    // 获取浏览器可视区域高度（不包含工具栏高度）、
    // 获取body的实际高度  (三个都是相同，兼容性不同的浏览器而设置的)
    screenHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    kHOne: 200,
    kHTwo: 500,
    kHThree: 300,
    kHFour: 500,
    kHFive: 450,
    kHSix: 300,
    kHSeven: 400,
    kHEight: 400,
    hoverColor:[
      [],[],[],[]
    ],
    detailsStatus: 0,
    detailsTitle: [ "虫情系统", "气象站", "土壤监测" ]
  }
  },
  mounted(){
    // 页面大小改变时触发
    window.addEventListener('resize',this.getScreenHeight, false);
    // 页面大小改变时触发
    window.addEventListener('resize',this.getScreenWidth, false);
    // 鼠标移动时触发
    //window.addEventListener('mousemove',this.getHeight, false);
    this.timeInterval();
    this.cancelLoading();
    this.resizeScreen();
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null;
    clearInterval(this.koiTime);
    this.koiTime = null;
    clearInterval(this.koiTimer);
    this.koiTimer = null;
    // 页面大小改变时触发
    window.removeEventListener('resize',this.getScreenHeight, false);
    // 页面大小改变时触发
    window.removeEventListener('resize',this.getScreenWidth, false);
  },
  watch: {
      screenWidth: function (news, old) {
          if (news <= 1200) {
            this.$notify({
              title: '浏览器高度提示',
              dangerouslyUseHTMLString: true,
              message: '<strong style= "color: teal">浏览器宽度<1200px将不再进行自适应</strong>',
              type: 'warning',
              position: 'bottom-right',
              duration: 2000
            });
          }
      },
      screenHeight: function (news, old) {
          if (news <= 700) {
            this.$notify({
              title: '浏览器宽度提示',
              dangerouslyUseHTMLString: true,
              message: '<strong style= "color: teal">浏览器高度<700px将不再进行自适应</strong>',
              type: 'warning',
              position: 'bottom-right',
              duration: 2000
            });
          }
      }
  },
  methods: {
    timeInterval() {
      this.timer = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy/MM/dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    resizeScreen(){
      this.koiTime = setInterval(() => {
        this.getScreenHeight();
        this.getScreenWidth();
      }, 200)
    },
    // 获取浏览器高度进行自适应
    getScreenHeight() {
        this.screenHeight = window.innerHeight || document.documentElement.innerHeight || document.body.clientHeight;
        // 四舍五入取整数
        this.kHOne = Math.round(this.screenHeight * 0.18);
        this.kHTwo = Math.round(this.screenHeight * 0.23);
        this.kHThree = Math.round(this.screenHeight * 0.50);
        // this.kHFour = Math.round(this.screenHeight * 0.20);
        this.kHFive = Math.round(this.screenHeight * 0.82);
        this.kHSix = Math.round(this.screenHeight * 0.1);
        this.kHSeven = Math.round(this.screenHeight * 0.8);
        //console.log(this.screenHeight +"-"+ Math.round(this.percentHThirty) +"-"+ Math.round(this.percentHForty));
    },
    // 字体大小根据宽度自适应
    getScreenWidth(){
      this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      //console.log("hh-"+this.screenWidth+"-"+this.screenHeight);
    },
    //鼠标Hover事件
    hoverOver(index){
      this.hoverColor[index] = ["red","red"]
      console.log(this.hoverColor[index]);
    },
    hoverLeave(index){
      console.log("-------------");
      this.hoverColor[index] = []
    },
    changeDetails(val){
      console.log(val);
      if( val === "虫情系统")
        this.detailsStatus = 0
      if( val === "气象站1")
        this.detailsStatus = 1
      if( val === "土壤检测")
        this.detailsStatus = 2
    }
  }
}
</script>

<style lang="less" scoped>
.title{
  text-align: left;
  padding-left: 10px;
  font-size: 26px;
}
.el-table::before{
  border-color: aqua !important;
}
</style>
