<template>
  <div class="bx">
    <el-row class="first-row">
      <el-col :span="4">
        <el-tag type="success">名称：{{productdetails.name}}</el-tag>
      </el-col>
      <el-col :span="4">
        <el-tag type="info">规格：{{productdetails.models}}</el-tag>
      </el-col>
      <el-col :span="4">
        <el-tag type="warning">数量：{{productdetails.number}}</el-tag>
      </el-col>
      <el-col :span="4">
        <el-tag type="danger">微信：{{productdetails.weixin}}</el-tag>
      </el-col>
      <el-col :span="4">
        <el-tag type="primary">电话：{{productdetails.phone}}</el-tag>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <p>产品主图</p>
        <img src="" alt="" width="300" height="300">
      </el-col>
      <el-col :span="6">
        <p>产品描述</p>
        <p>产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述</p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productdetails: {},
      productID:'',
    };
  },
  created() {
    this.queryproductID();
  },
  methods: {
    /*
    **  @description 获取到路又传来的ID，通过产品ID查询数据
    **  @param {} 
    **  @return 
    **  @author shipingan
    */
    queryproductID() {
      this.productID = this.$route.query.productID
    }
  }
};
</script>
<style lang='less' scoped>
.bx{
  .first-row{
    margin-bottom: 30px;
  }
}
</style>