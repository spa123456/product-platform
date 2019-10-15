<template>
  <div class="bx">
    <p class="title">尿不湿产品</p>
    <el-table :data="tableData" style="width: 100%" size="mini" border>
      <el-table-column prop="name" label="产品名称" align="center"></el-table-column>
      <el-table-column prop="number" label="产品数量" align="center"></el-table-column>
      <el-table-column prop="models" label="产品规格" align="center"></el-table-column>
      <el-table-column prop="weixin" label="商家微信" align="center"></el-table-column>
      <el-table-column prop="phone" label="商家电话" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
          <template slot-scope="scope">
              <el-button @click="gotoquery(scope.row)" size="mini" type="primary">查看详情</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
        tableData:[
            {
                productID:1,
                name:"花王",
                number:'130',
                models:"nb,s,m,l,xl,xxl",
                weixin:'13698374541',
                phone:'13698374541'
            },
            {
                productID:2,
                name:"宜婴",
                number:'233',
                models:"nb,s,m,l,xl,xxl",
                weixin:'13698374541',
                phone:'13698374541'
            },
            {
                productID:3,
                name:"大王",
                number:'156',
                models:"nb,s,m,l,xl,xxl",
                weixin:'13698374541',
                phone:'13698374541'
            }
        ],
    };
  },
  methods: {
      gotoquery(row){
          let url = "diapersquery"
          let params = {
            productID:row.productID
          }
          this.$router.push({path:url,query:params})
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