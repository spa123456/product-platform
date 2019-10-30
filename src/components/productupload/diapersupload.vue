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
            :file-list="filelistmain"
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
            :on-remove="removeimagedetalies"
            :limit="10"
            multiple
            :auto-upload="false"
            :file-list="filelistdetail"
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
      imagemainlist: [], //上传的主图图片
      imagedetalislist: [], //上传的详情图图片
      imagedetalislistnew:[],//临时存储一个数据，用于更新，覆盖原有的数据
      number: "",
      moduls: "",
      weixin: "",
      phone: "",
      address: "",
      expain: "", //产品的说明
      money: "",
      discount: "",
      dialogImageUrl: "",
      dialogImageUrlmain: "", //主图图片
      filelistmain: [], //主图绑定的已上传的文件列表----只用来展示，上传单独写个数组
      filelistdetail: [],
      id: "" //产品ID
    };
  },
  mounted() {
    this.updatequery();
  },
  methods: {
    /*
     **  @description 判断是否是更新数据修改数据--并获取相关数据
     **  @param {}
     **  @return
     **  @author shipingan
     */
    updatequery() {
      let productID = this.$route.query.productID;
      if (productID != undefined) {
        let url = "/getdiaperdetalis";
        let query = {
          id: productID,
          filename: "diaper"
        };
        this.$axios.post(url, query).then(res => {
          let data = res.data.data[0];
          let img = JSON.parse(res.data.imagedetalis);
          let imagemain = {
            name: "",
            url: img.mainimageurl[0]
          };
          this.filelistmain.push(imagemain);

          img.detailsurl.map(item => {
            let imagedetalis = {
              name: "",
              url: item
            };
            this.filelistdetail.push(imagedetalis);
            this.imagedetalislist.push(item); //是数组
          });
          this.imagemainlist.push(img.mainimageurl[0]);
          this.name = data.name;
          this.number = data.number;
          this.moduls = data.moduls;
          this.weixin = data.weixin;
          this.phone = data.phone;
          this.expain = data.expain;
          this.money = data.money;
          this.discount = data.discount;
          this.address = data.address;
          this.id = data.id;
        });
      }
    },
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
      this.imagemainlist = [];
      let that = this;
      var reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = function() {
        this.result; //base64编码
        that.dialogImageUrlmain = this.result;
        that.imagemainlist.push(this.result);
      };
    },


    removeimagedetalies(file,fileList){
      this.imagedetalislist = []
      console.log(fileList);
      fileList.map(item=>{
        this.imagedetalislist.push(item.url)
      })
    },
    /*
     **  @description 详情图上传
     **  @param {}
     **  @return
     **  @author shipingan
     */
    handleChangeimage(file,fileList) {
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
        that.imagedetalislist.push(this.result);
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
        filename: "diaper",
        mainimgurl: this.imagemainlist, //是数组
        detailsurl: this.imagedetalislist, //是数组
        name: this.name,
        timeDate: Date.now() + "",
        number: this.number,
        moduls: this.moduls,
        weixin: this.weixin,
        phone: this.phone,
        expain: this.expain,
        money: this.money,
        discount: this.discount,
        address: this.address,
        id: this.id
      };

      let num = 0;
      for (const item in params) {
        if (params[item] != "" || params.id == "") {
          num++;
        } else {
          this.$message.error("请正确填写表单");
          return;
        }
      }

      if (num == 14) {
        let url = "/adddiaperproduct";
        this.$axios.post(url, params).then(res => {
          if (res.data.status == "OK") {
            this.$message.success("OK");
            this.$router.push("diapers");
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