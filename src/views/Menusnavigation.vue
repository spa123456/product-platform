<template>
  <el-container>
    <el-aside width="231px">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-openeds="defaultopeneds"
        router
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>产品</span>
          </template>
          <el-menu-item index="diapers">尿不湿</el-menu-item>
          <el-menu-item index="1-2">衣服</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>上传产品</span>
          </template>
          <el-menu-item index="2-1">尿不湿</el-menu-item>
          <el-menu-item index="2-2">衣服</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main class="father-main">
        <el-container>
            <el-header height="40px" class="nav-header">
                <i>登陆账号：</i>
                <i>时平安</i>
            </el-header>
            <el-main class="nav-main">
                <router-view/>
            </el-main>
        </el-container>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      defaultopeneds: ["1"]
    };
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.el-container {
  height: 100%;
  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
      width: 230px;
      text-align: left;
    }
  }
  .father-main{
      padding: 0;
      .nav-header{
          border-bottom: 1px solid #ccc;
          line-height: 40px;
      }
      .nav-main{
          padding: 10px;
      }
  }
}
</style>