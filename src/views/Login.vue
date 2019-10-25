<template>
  <el-container>
    <el-header>
      <h1>我的技术测试</h1>
    </el-header>
    <el-main>
      <p>
        <pre>

        
        准备踏破前端之路
在开发过程中所遇到的问题
在工作中，BUSS项目是使用的PHP开发的，但是不会PHP
刚来到这个公司，公司的所有项目都是用PHP开发的，但是本人作为一个踏踏实实的前端开发，对与PHP的研究并不是很多，
开始的时候在此项目上使用自己会的东西慢慢的对这个项目的摸索开发。但是一门语言也不是那么容易就能够随随便便就可以弄得如鱼得水的。
实在困难我决定了，一边使用PHP修改原有项目的BGU、和新增内容，一边使用vue等等我会的前端重构公司的所有项目。其实这些项目真的还是挺庞大的、
毕竟前面一个团队足足开发了一年多。
	目前我们公司有一个管理平台的web项目，大概前端页面有60个。还有微信公众号的开发（工作那么多年没有开发过微信公众号、
  既来之则安之---干吧、）
首先我决定使用vue开发公司的所有前端项目。web端的项目基本是没有什么问题好说的。重点对于微信公众号吧，
说说这段时间在这里面所遇到的坑！！！
	因为公司在软件开发方面是小公司，很多东西都要亲历亲为，这样也能学到很多知识，可谓是利弊同在吧。
	微信公众号开发基于服务器的80端口开发的。所以我们要拥有自己的服务器，域名。对此过程中我购买了属于自己的服务器和域名！！！
	有了自己的服务器和域名，接下来就是将自己的微信公众号和服务器配对、先申请一个自己的公众号然后在公众号的接入配置中查看相关文档
https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Access_Overview.html
 <img src="../assets/1.png" alt="" srcset="">
	在开发中，对于接口认证、恢复消息、等等事件处理机制、我使用的是nodejs来处理的。
  url填写你在服务器配置好的域名即可（在服务器中我配置的nginx）
 <img src="../assets/2.png" alt="" srcset="">
	我对于此处的理解是：当微信公众号配置的时候会访问我们服务器所填写的域名--然后回访问此域名的80端口，我的nodejs启动的服务是3000端口，
  我做一个反向代理，
  使之在启动域名对应的80端口后将访问3000端口。（在服务器中，也需要将node,npm全局配置，这些配置好，跟平时开发是一样的，
  服务端要让node服务一直开启需要安装模块forever模块，
  百度一下你就知道了）
	接下来我们看看nodejs所写的服务端的代码，很多也是百度看了其他大佬的
 <img src="../assets/3.png" alt="" srcset="">
这是目录结构，启动的是app.js这个文件（要到能找到app.js文件的目录下才能启动）当你一旦浏览3000端口的时候，他会自动的访问 wechatApp对应调用的模块
	Config.json是存放的微信公众号的appid、token等等，
 <img src="../assets/4.png" alt="" srcset="">
	在wechat.js中就就是关键的东东了，接入认证，获取accesstoken,等等
 
直接上代码吧
</pre>
      </p>
    </el-main>
    <el-footer>
      <span>ICP:蜀ICP备19030513号 -------</span> 
      <span> ------©️版权所有：时平安</span>
    </el-footer>
    <!-- <el-form label-position="left" label-width="60px" :model="formLabelAlign">
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.possword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm(formLabelAlign)">登录</el-button>
      </el-form-item>
    </el-form> -->
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
  .el-main{
    padding:0 400px;
    font-size: 20px;
p{
    color: #fff;
  }
  }

  
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