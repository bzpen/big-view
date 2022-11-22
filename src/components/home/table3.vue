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
      prop="name"
      label="虫情系统"
      >
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      >
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props:["tableH"],
    data() {
      return {
        bgRowColor: "black",
        tableData: [{
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
      // 更改单元格样式
      getTdStyle(){
        // 有思路了没
        // 动态修改 this.bgRowColor 不用那个了 实现效果最好 
        // 可能还有其他的思路
        // 那没用上那个hover了，可以  敏捷开发，我下班吃饭先
        return `
          background-color: ${ this.bgRowColor };
          border-color: #2d5d95;
          text-align: center;
          font-size: 1.4rem;
          line-height: 1.6rem;
          color: #00ffd5;
        `
      },
      // 更改表头样式
      getHeadStyle(){
        // 只能使用css语法  不能使用预编译器 不懂啊你写个我看看
        // 🆗
        return `
          background-color: black;
          border-color:#2d5d95;
          font-size: 1.4rem;
          text-align: center;
          color: darkturquoise;
        `
      },
      rowClick(row,column){
        // TODO: 单元格点击事件 
        // 右边那个绿色的没这个对味
        // 右边另一个页面的
        // 添加单元格 hover 放上去单元格变色
        // 我来
        // ok
        console.log(row,column);
      }
    }
  }
</script>
<style lang="less" scoped>


</style>
