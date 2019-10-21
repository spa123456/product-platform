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
        <p>产品售价：</p>
      </el-col>
      <el-col :span="12">
        <el-input placeholder="请输入商家电话" v-model="money"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="5">
        <p>产品折扣：</p>
      </el-col>
      <el-col :span="12">
        <el-input placeholder="请输入商家电话" v-model="discount"></el-input>
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
            action="localhost://h"
            list-type="picture-card"
            :on-change="handleChange"
            :limit="1"
            :auto-upload="false"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog size="tiny">
            <img width="100%" :src="dialogImageUrlmain" alt />
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
            action="localhost://h"
            list-type="picture-card"
            :on-change="handleChangeimage"
            :limit="10"
            multiple
            :auto-upload="false"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog size="tiny">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="8" :span="3">
        <el-button type="primary" @click="uploadimage">上传</el-button>
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
      imagedetails: [], //其他详情图片
      expain: "", //产品的说明
      dialogImageUrl: "",
      dialogImageUrlmain: [], //主图图片
      money:'',
      discount:''
    };
  },
  methods: {
 
    /*
     **  @description 主图上传参数
     **  @param {}
     **  @return
     **  @author shipingan
     */
    handleChange(file) {
      const isLt5M = file.raw.size / 1024 / 1024 < 5;
      const isJPG =
        file.raw.type === "image/jpeg" || file.raw.type === "image/png";
      if (!isJPG) {
        this.$message.error("上传图片格式错误");
        return;
      }
      if (!isLt5M) {
        this.$message.error("上传图片不能大于5M");
        return;
      }
      let that = this;
      var reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = function() {
        this.result; //base64编码
        that.dialogImageUrlmain[0] = this.result;
      };
    },
    /*
     **  @description 详情图上传
     **  @param {}
     **  @return
     **  @author shipingan
     */
    handleChangeimage(file) {
      const isLt5M = file.raw.size / 1024 / 1024 < 5;
      const isJPG =
        file.raw.type === "image/jpeg" || file.raw.type === "image/png";
      if (!isJPG) {
        this.$message.error("上传图片格式错误");
        return;
      }
      if (!isLt5M) {
        this.$message.error("上传图片不能大于5M");
        return;
      }
      let that = this;
      var reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = function() {
        this.result; //base64编码
        that.dialogImageUrl = this.result;
        that.imagedetails.push(that.dialogImageUrl);
      };
    },
    /*
     **  @description 上传图片
     **  @param {}
     **  @return
     **  @author shipingan
     */
    uploadimage() {
      let params = {
        filename:'specialty',
        mainimgurl: this.dialogImageUrlmain, //是数组
        detailsurl: this.imagedetails, //是数组
        name: this.name,
        timeDate: Date.now() + "",
        number: this.number,
        moduls: this.moduls,
        weixin: this.weixin,
        phone: this.phone,
        expain: this.expain,
        money:this.money,
        discount:this.discount
      };
      
      let num = 0;
      for (const item in params) {
        if (params[item] == "") {
          this.$message.error("请正确填写表单");
          return;
        } else {
          num++;
        }
      }
      if ((num == 12)) {
        let url = "http://localhost:3000/adddiaperproduct";
        this.$axios.post(url, params).then(res => {
          if (res.data.status =="OK") {
            this.$message.success("OK")
            this.$router.push('specialtys')
          }
        });
      }
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