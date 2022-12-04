<template>
  <div class="table3">
    <el-table
      :data="tableData"
      :cell-style="getTdStyle"
      :header-cell-style="getHeadStyle"
      :height="tableH - 24"
      @row-click="rowClick"
      style="width: 100%;background-color: black;border: 0px;">
      <el-table-column
        prop="name"
        label="设备信息"
        >
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        >
      </el-table-column>
    </el-table>
  </div>
  
</template>

<script>
  export default {
    props:["tableH"],
    data() {
      return {
        bgRowColor: "black",
        tableData: [
          {
            name: '虫情系统',
            status: '正常'
          },
          {
            name: '气象站1',
            status: '正常'
          },
          {
            name: '土壤检测',
            status: '正常'
          }
        ]
      }
    },
    methods:{
      getTdStyle(){
        return `
        background-color:${this.bgRowColor};
          border-color: #2d5d95;
          text-align: center;
          font-size: 1.2rem;
          line-height: 1.6rem;
          color: #00ffd5;
        `
      },
      // 更改表头样式
      getHeadStyle(){
        return `
          background-color: black;
          border-color:#2d5d95;
          font-size: 1.4rem;
          text-align: center;
          color: darkturquoise;
        `
      },
      rowClick(row){
        // TODO: 单元格点击事件 
        this.$emit('changeDetails',row.name)
      },
    }
  }
</script>
<style lang="less" scoped>

</style>
