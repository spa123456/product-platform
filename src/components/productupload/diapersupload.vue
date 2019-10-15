<template>
  <!-- 尿不湿产品上传====数据：name,number,moduls,weixin,phone,image,imagedetails,expain -->
  <div class="bx">
    <p class="title">尿不湿产品的上传</p>
    <el-row>
      <el-col :span="2" :offset="5">
        <p>产品名称：</p>
      </el-col>
      <el-col :span="12">
        <el-input placeholder="请输入产品名称" v-model="name"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="5">
        <p>产品数量：</p>
      </el-col>
      <el-col :span="12">
        <el-input placeholder="请输入产品数量" v-model="number" type="number"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="5">
        <p>产品规格：</p>
      </el-col>
      <el-col :span="12">
        <el-input placeholder="请输入产品规格(nb,s,l,......)" v-model="moduls"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="5">
        <p>商家微信：</p>
      </el-col>
      <el-col :span="12">
        <el-input placeholder="请输入商家微信" v-model="weixin"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="5">
        <p>商家电话：</p>
      </el-col>
      <el-col :span="12">
        <el-input placeholder="请输入商家电话" v-model="phone"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="5">
        <p>产品说明：</p>
      </el-col>
      <el-col :span="12">
        <el-input
          placeholder="请输入产品描述"
          v-model="expain"
          type="textarea"
          :autosize="{ minRows: 3}"
          style="width:300px"
        ></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="5">
        <p>首图上传：</p>
      </el-col>
      <el-col :span="12">
        <div>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :limit="1"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="5">
        <p>产品图片：</p>
      </el-col>
      <el-col :span="12">
        <div>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :limit="10"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="8" :span="3">
        <el-button type="primary">上传</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      number: "",
      moduls: "",
      weixin: "",
      phone: "",
      image: "",
      imagedetails: "", //其他详情图片
      expain: "", //产品的说明
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    /*
     **  @description 图片上传函数
     **  @param {}
     **  @return
     **  @author shipingan
     */
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style lang='less' scoped>
.bx {
  .title {
    color: rgb(180, 32, 32);
    font-weight: 700;
    letter-spacing: 10px;
    font-size: 20px;
  }
  .el-row {
    margin: 20px;
    text-align: left;
    .el-input {
      margin-top: 6px;
      width: 300px;
    }
  }
}
</style>