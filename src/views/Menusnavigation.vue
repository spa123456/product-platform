<template>
  <el-container>
    <el-aside width="231px">
      <el-menu
        default-active="diapers"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="NavActive"
        router
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>产品</span>
          </template>
          <el-menu-item index="diapers">尿不湿</el-menu-item>
          <el-menu-item index="specialtys">特产</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>上传产品</span>
          </template>
          <el-menu-item index="diapersupload">尿不湿</el-menu-item>
          <el-menu-item index="specialtysupload">特产</el-menu-item>
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
          <router-view />
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
        NavActive:'diapers'
    };
  },
  beforeMount() {
    this.getActiveNav();
  },
  methods: {
    handleSelect(index) {
      this.NavActive = index;
    },
    getActiveNav: function() {
      let currentUrl = window.location.href;
      this.NavActive = currentUrl.split("/")[3];
    }
  },
  watch: {
    //监听路由变化

    $route(index) {
      let path = index.path.substr(1);
      this.handleSelect(path);
    }
  }
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
  .father-main {
    padding: 0;
    .nav-header {
      border-bottom: 1px solid #ccc;
      line-height: 40px;
    }
    .nav-main {
      padding: 10px;
    }
  }
}
</style>