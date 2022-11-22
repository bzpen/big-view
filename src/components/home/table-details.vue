<template>
  <!-- 收到 -->
  <el-table
    :data="tableData"
    :cell-style="getTdStyle"
    :header-cell-style="getHeadStyle"
    :height="tableH - 24"
    @row-click="rowClick"
    style="width: 100%;background-color: black;border: 0px;">
    <el-table-column
      prop="date"
      label="监测日期"
      >
    </el-table-column>
    <el-table-column
      prop="adress"
      label="实装位置"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="监测对象"
      >
    </el-table-column>
    <el-table-column
      prop="worm"
      label="单日虫量"
      >
    </el-table-column>
    <el-table-column
      prop="status"
      label="预警级别"
      >
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props:["tableH"],
    data() {
      return {
        tableData: []
      }
    },
    methods:{
      // 更改单元格样式
      getTdStyle(){
        return `
          background-color: black;
          border-color:#2d5d95;
          text-align: center;
          font-size: 1.4rem;
          color: #00ffd5;
        `
      },
      // 更改表头样式
      getHeadStyle(){
        return `
          background-color: black;
          border-color:#2d5d95;
          font-size: 1.6rem;
          text-align: center;
          color: darkturquoise;
        `
      },
      rowClick(row,column){
        console.log(row,column);
      }
    }
  }
</script>
<style scoped lang="scss">
</style>
