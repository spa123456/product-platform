<template>
  <el-container>
    <el-form label-position="left" label-width="60px" :model="formLabelAlign">
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.possword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm(formLabelAlign)">登录</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      formLabelAlign: {
        username: "",
        possword: ""
      }
    };
  },
  methods: {
    submitForm(){
        this.$router.push("menusnavigation")
    }
  }
};
</script>
<style lang="less" scoped>
.el-container {
  background-color: rgb(22, 20, 20);
  height: 100%;
  .el-form {
    background-color: #fff;
    width: 400px;
    height: 180px;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 200px auto;
  }
}
</style>