<template>
  <div>
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
                productsID:1,
                name:"花王",
                number:'1203',
                models:"nb,s,m,l,xl,xxl",
                weixin:'13698374541',
                phone:'13698374541'
            }
        ],
    };
  },
  methods: {
      gotoquery(row){
          let name = "diapersquery"
          let parmars = {
              productsID:row.productsID
          }
          this.$router.push({name:name,parmars:parmars})
      }
  }
};
</script>
<style lang='less' scoped>
</style>