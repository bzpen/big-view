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

        <!-- 网格布局 grid -->
        <!-- <div class="wrapper">
          <div class="one item">One</div>
          <div class="two item">Two</div>
          <div class="three item">Three</div>
          <div class="four item">Four</div>
          <div class="five item">Five</div>
          <div class="six item">Six</div>
        </div> -->

        <!-- 弹性布局 flex -->
        <!-- <div class="container">
          <div class="one item">One</div>
          <div class="two item">Two</div>
          <div class="three item">Three</div>
          <div class="four item">Four</div>
          <div class="five item">Five</div>
          <div class="six item">Six</div>
        </div> -->

        <!-- Element-UI Layout布局 -->
        <div class="layoutHome">
          <el-row>
            <el-col :span="7">
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
              <div class="title">柑橘种植面积育产量</div>
              <div :style="{ height: kHThree + 'px'}">
                <!-- style="padding:12px" -->
                <dv-border-box-12 style="padding:12px">
                  <centerchart3></centerchart3>
                </dv-border-box-12>
              </div>
              <div :style="{ height: kHFour + 'px'}">
                <!-- style="padding:12px" -->
                <dv-border-box-12 style="padding:12px">
                  <leftchart3></leftchart3>
                </dv-border-box-12>
              </div>
            </el-col>

            <el-col :span="10">
              <div :style="{ height: kHFive + 'px'}">
              </div>
              <div :style="{ height: kHSix + 'px'}">
                <div style="padding:12px">
                  <el-row>
                    <el-col :span="4" :offset="1">
                      <!-- :mouseover="hoverOver(0)" :mouseleave="hoverLeave(0)" -->
                      <dv-decoration-11 style="width:100%;height:60px;" :color="hoverColor[0]" 
                        >
                        精确管理
                      </dv-decoration-11>
                    </el-col>
                    <el-col :span="4">
                      <dv-decoration-11 style="width:100%;height:60px;">环境监测</dv-decoration-11>
                    </el-col>
                    <el-col :span="6">
                      <dv-decoration-7 style="width:170px;height:60px;margin: 0px auto;">
                        <p style="font-size: 26px;color:aliceblue; margin: 0px 8px;">
                          <b>智慧农业</b>
                        </p>
                      </dv-decoration-7>
                    </el-col>
                    <el-col :span="4">
                      <dv-decoration-11 style="width:100%;height:60px;">
                        智能监控
                      </dv-decoration-11>
                    </el-col>
                    <el-col :span="4">
                      <dv-decoration-11 style="width:100%;height:60px;" :color="[]">智能农机</dv-decoration-11>
                    </el-col>
                    <el-col :span="1">
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>

            <el-col :span="7">
              <div class="title">
                重点监控区域
              </div>
              <div :style="{ height: kHSeven + 'px'}">
                <dv-border-box-12 style="padding:12px">
                  <lookVideo></lookVideo>
                </dv-border-box-12>
              </div>
              <div class="title">
                  物联网设备统计
              </div>
              <div :style="{ height: kHEight + 'px'}">
                <dv-border-box-12 >
                  <dataTable></dataTable>
                </dv-border-box-12>
              </div>
              <div :style="{ height: kHNine + 'px'}">
                <dv-border-box-12 style="padding:12px">
                  <rightchart3></rightchart3>
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
import leftchart1 from "../components/koi/left/chart1.vue";
import leftchart2 from "../components/koi/left/chart2data.vue";
import leftchart3 from "../components/koi/left/chart3.vue";
import centerchart1 from "../components/koi/center/chart1.vue";
import centerchart2 from "../components/koi/center/chart2.vue";
import centerchart3 from "../components/koi/center/chart3.vue";
import lookVideo from "../components/koi/right/look-video.vue";
import dataTable from "../components/koi/right/data-table.vue";
import rightchart1 from "../components/koi/right/chart1.vue";
import rightchart2 from "../components/koi/right/chart2.vue";
import rightchart3 from "../components/koi/right/chart3.vue";
export default {
  name: 'index',
  components: {
    weather,
    leftchart1,
    leftchart2,
    leftchart3,
    centerchart1,
    centerchart2,
    centerchart3,
    lookVideo,
    dataTable,
    rightchart1,
    rightchart2,
    rightchart3
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
    ]
  }
  },
  created () {

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
        this.kHThree = Math.round(this.screenHeight * 0.30);

        this.kHFour = Math.round(this.screenHeight * 0.20);
        this.kHFive = Math.round(this.screenHeight * 0.82);
        this.kHSix = Math.round(this.screenHeight * 0.125);
        this.kHSeven = Math.round(this.screenHeight * 0.3);
        this.kHEight = Math.round(this.screenHeight * 0.22);
        this.kHNine = Math.round(this.screenHeight * 0.335)
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
