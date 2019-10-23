<template>
  <div class="bx">
    <el-row class="first-row">
      <el-col :span="5">
        <el-tag type="success">名称：{{productdetails.name}}</el-tag>
      </el-col>
      <el-col :span="5">
        <el-tag type="info">规格：{{productdetails.moduls}}</el-tag>
      </el-col>
      <el-col :span="4">
        <el-tag type="warning">数量：{{productdetails.number}}</el-tag>
      </el-col>
      <el-col :span="5">
        <el-tag type="danger">微信：{{productdetails.weixin}}</el-tag>
      </el-col>
      <el-col :span="5">
        <el-tag type="primary">电话：{{productdetails.phone}}</el-tag>
      </el-col>
      <el-col :span="5">
        <el-tag type="success">价格：{{productdetails.money}}</el-tag>
      </el-col>
      <el-col :span="5">
        <el-tag type="info">折扣：{{productdetails.discount}}</el-tag>
      </el-col>
    </el-row>
    <el-row class="main-image-col">
      <el-col :span="12">
        <p style="color:#FFF;font-size:30px">产品主图</p>
        <img :src="mainimageurl" alt width="800" />
      </el-col>
      <el-col :span="6">
        <p style="color:#FFF;font-size:30px">产品描述</p>
        <p style="color:#FFF;font-size:20px">{{productdetails.expain}}</p>
      </el-col>
    </el-row>
    <el-row>
      <p style="color:#AAA;font-size:30px">产品详情图</p>
      <template v-for="(itme) in detailsurl" >
        <el-col :span="24" class="image-col">
          <img :src="itme" alt width="1000" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productdetails: {},
      productID: "",
      mainimageurl: "",
      detailsurl: []
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
      this.productID = this.$route.query.productID;
      let params = {
        id: this.productID,
        filename: "specialty"
      };
      let url = "http://127.0.0.1:3001/getdiaperdetalis";
      this.$axios.post(url, params).then(res => {
        let img = JSON.parse(res.data.imagedetalis);
        this.mainimageurl = img.mainimageurl[0];
        this.detailsurl = img.detailsurl;
        this.productdetails = res.data.data[0];
      });
    }
  }
};
</script>
<style lang='less' scoped>
.bx {
  .first-row {
    margin-bottom: 30px;
    .el-col{
      padding: 20px;
      .el-tag{
        font-size: 20px;
      }
    }
  }
  .image-col {
    margin-top: 40px;
    background-color: rgb(150, 84, 84);
  }
  .main-image-col {
    background-color: rgb(113, 113, 116);
  }
}
</style>