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
      prop="id"
      label="设备编码"
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
      <template slot-scope="scope">
        <p :style="{ color: scope.row.status === '正常'? 'green': 'yellow' }"> {{ scope.row.status }} </p>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props:["tableH"],
    data() {
      return {
        tableData: [
          
        ]
      }
    },
    mounted(){
      this.newDataList()
    },
    methods:{
      // 更改单元格样式
      getTdStyle(){
        return `
          background-color: black;
          border-color:#2d5d95;
          text-align: center;
          font-size: 1.2rem;
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
      rowClick(row,column){
        console.log(row,column);
      },
      newDataList(){
        let item =  {
          date: "2022-11-30",
          id: "00002623",
          adress: "重庆市渝北区大盛镇蒋家湾",
          name: "柑橘潜叶蛾",
          worm: 1,
          status: "正常"
        }
        let date = new Date()
        console.log(date.getDate());
        for(let i = 0 ; i< 10;i++){
          date.setDate(date.getDate() - 1)
          item.date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
          item.worm = Math.ceil( Math.random() * 30);   
          item.status = "正常"
          if(item.worm > 20 ){
            item.status = "黄色预警"
          }
          this.tableData.push({ ...item })
        }

      }
    }
  }
</script>
<style scoped lang="scss">
</style>
