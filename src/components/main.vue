<template>
  <div>
    <div class="header">个人中心</div>
    <div class="main">
      <div class="sidebar">
        <ul class="side-list">
          <li v-for="menu in menuList">
            <router-link v-bind:to="menu.path" style="color: #ffffff;text-decoration:none">{{menu.name}}</router-link>
        </li>
        </ul>
      </div>
      <div class="u-tabs">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">Copyright@2018-08-17 zhuyoulong@csii.com.cn 版权所有</div>
  </div>
</template>

<script>
    export default {
        name: "main",
        data:function () {
          return{
            menuList:[
              {name:"系统管理",path:"/SystemManage"},
              {name:"视频管理",path:"/VideoManage"},
              {name:"用户管理",path:"/UserManage"},
              {name:"下载管理",path:"/download"}
            ]
          }
        }
    }
</script>

<style scoped>
  .main{
    clear: both;
  }
  .header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #212121;
    color: #d0d0d0;
    line-height: 40px;
    padding: 5px;
    text-align: left;
  }
  .sidebar{
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    width: 225px;
    background-color: #3d3d3d;
    color: #fff;
    padding: 10px;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #212121;
    color: #d0d0d0;
    line-height: 30px;
    padding: 5px;
  }
  .sidebar >ul>li{
    font-size: 20px;
    margin: 10px;
    padding: 5px;
    width: 100px;
  }

  .u-tabs{
    display: block;
    margin-left: 235px;
    margin-top: 42px;
  }
  .router-link-active{
    color: red;
  }


</style>
