<template>
  <div style="padding: 10px 0px;">
    <el-table
      :cell-style="getTdStyle"
      :header-cell-style="getHeadStyle"
      :data="tableData"
      style="width: 98%;margin: 0px auto;">
      <el-table-column
        prop="num"
        label="设备数量（个）"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="环境监测"
        width="180">
      </el-table-column>
      <el-table-column
        prop="probability"
        label="在线率">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          num: '3',
          name: '环境监测',
          probability: '100%'
        },{
          num: '47',
          name: '土壤监测',
          probability: '100%'
        }, {
          num: '64',
          name: '实时影像',
          probability: '100%'
        }]
      }
    },
    methods:{
      getTdStyle(value){
        console.log(value);
        return `
        background-color: black;
        color: #37ff37;
        font-size: 22px;
        text-align: center;
        border-color:#2d5d95;
        `
      },
      getHeadStyle(value){
        return "background-color: black;color:darkturquoise;font-size: 18px;text-align: center;border-color:#2d5d95;"
      }
    }
  }
</script>

<style lang="less" scoped>
.el-table th.el-table__cell{
  background-color: black !important;
}


</style>
