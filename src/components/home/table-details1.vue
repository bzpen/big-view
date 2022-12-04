<template>
  <!-- 收到 -->
  <div class="content">
    <el-row>
      <el-col :span="12">
        <div :style="{ height: tableH / 2 + 'px'}">
          <div style="padding:12px">
            <tableDetails1 :echartsH="(tableH / 2)"></tableDetails1>
          </div>
        </div>
        <div :style="{ height: tableH / 2 + 'px'}">
          <div style="padding:12px">
            <tableDetails2 :echartsH="(tableH / 2)"></tableDetails2>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div :style="{ height: tableH / 2 + 'px'}">
          <div style="padding:12px">
            <tableDetails3 :echartsH="(tableH / 2)"></tableDetails3>
          </div>
        </div>
        <div :style="{ height: tableH / 2 + 'px'}">
          <div style="padding:12px">
            <tableDetails4 :echartsH="(tableH / 2)"></tableDetails4>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
   import tableDetails1 from "../table-details1/echarts1.vue"
   import tableDetails2 from "../table-details1/echarts2.vue"
   import tableDetails3 from "../table-details1/echarts3.vue"
   import tableDetails4 from "../table-details1/echarts4.vue"
  export default {
    components:{
      tableDetails1,
      tableDetails2,
      tableDetails3,
      tableDetails4
    },
    props:["tableH"],
    data() {
      return {
        tableData: [
          
        ]
      }
    },
    mounted(){
    },
    methods:{
      
    }
  }
</script>
<style scoped lang="less">
.content{
  color: #fff;
}
</style>
