<template>
  <div class="bx">
    <p class="title">尿不湿产品</p>
    <el-table :data="tableData" style="width: 100%" size="mini" border>
      <el-table-column prop="name" label="产品名称" align="center"></el-table-column>
      <el-table-column prop="number" label="产品数量" align="center"></el-table-column>
      <el-table-column prop="moduls" label="产品规格" align="center"></el-table-column>
      <el-table-column prop="weixin" label="商家微信" align="center"></el-table-column>
      <el-table-column prop="phone" label="商家电话" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
          <template slot-scope="scope">
              <el-button @click="gotoquery(scope.row)" size="mini" type="primary">查看详情</el-button>
              <el-button @click="gotoquery(scope.row)" size="mini" type="danger">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
        tableData:[],
    };
  },
  mounted(){
    this.getdiaperdetali()
  },
  methods: {
      gotoquery(row){
          let url = "diapersquery"
          let params = {
            productID:row.productID
          }
          this.$router.push({path:url,query:params})
      },
      getdiaperdetali(){
        let url = 'http://localhost:3000/getdiaperdetalis'
        let params = {}
        this.$axios.post(url,params).then(res=>{
          console.log(res);
          this.tableData = res.data
        })
      }
  }
};
</script>
<style lang='less' scoped>
.bx{
  .title{
    color: rgb(180, 32, 32);
    font-weight: 700;
    letter-spacing: 10px;
    font-size: 20px;
  }
}
</style>