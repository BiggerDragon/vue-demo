<template>
  <div class="user-mg">
    <h3 id="userMg">用户管理</h3>
    <label>用户:<input type="text" name="userName" v-model="userName"/></label>
    <label>密码:<input type="text" name="password" v-model="password"/></label>
    <label>昵称:<input type="text" name="nickName" v-model="nickName"/></label>
    <input type="button" @click="addUser()" value="新增" class="btn"/>
    <p></p>
    <label>用户:<input type="text" name="" v-model="userName"/></label>
    <input type="button" name="" value="查询用户信息" @click="queryUser()" class="btn"/>
    <p class="test-class">用户信息:{{userInfo.userName}}</p>
    <div>
      <label><input value="查询所有用户" type="button" @click="queryAllUsers" class="btn"/></label>
      <table>
        <thead>
        <tr>
          <td>用户名</td>
          <td>密码</td>
          <td>昵称</td>
          <td>创建日期</td>
          <td>更新日期</td>
          <td>操作</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in userList">
          <td>{{user.userName}}</td>
          <td>{{user.password}}</td>
          <td>{{user.userNickname}}</td>
          <td>{{user.createDate}}</td>
          <td>{{user.updateDate}}</td>
          <td>
            <span class="del-icon" @click="delUser"></span>
            <span class="mod-icon" @click="modUser"></span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import qs from 'qs'

  export default {
    name: "UserManage",
    data: function () {
      return {
        userName: "",
        password: "",
        nickName: "",
        userInfo: {},
        userList: [{
          id: 3,
          userName: '张大山',
          password: "123456",
          userNickname: "WOLF",
          createDate: new Date(),
          updateDate: new Date()
        },
          {id: 4, userName: '张大河', password: "123456", userNickname: "DOG", createDate: new Date(), updateDate: new Date()},
          {id: 5, userName: '张大炮', password: "232322", userNickname: "PIG", createDate: new Date(), updateDate: new Date()},
          {id: 6, userName: '胡来一', password: "123456", userNickname: "MAN", createDate: new Date(), updateDate: new Date()},
          {id: 7, userName: '胡来一', password: "123456", userNickname: "CHICKEN", createDate: new Date(), updateDate: new Date()},
          {id: 8, userName: '胡来一', password: "123456", userNickname: "DUCK", createDate: new Date(), updateDate: new Date()},
          {id: 9, userName: '胡来一', password: "123456", userNickname: "LEOPARD", createDate: new Date(), updateDate: new Date()},
        ]
      }
    },
    methods: {
      /** 新增一个用户 */
      addUser: function () {
        if (!this.$data.userName) {
          alert("用户名不合法!");
          return -1;
        }
        if (!this.$data.password) {
          alert("密码不合法!");
          return -1;
        }
        if (!this.$data.nickName) {
          alert("密码不合法!");
          return -1;
        }
        let param = {
          "userName": this.$data.userName,
          "password": this.$data.password,
          "nickName": this.$data.nickName
        };
        //发送get请求后端
        alert("正在请求后端...");
        this.$axios.get("/user/addUser", param).then(res => {
          console.log(res.data);
        });
      },

      queryUser: function () {
        let param = {
          "userName": this.$data.userName,
        };
        //post请求
        this.$axios.post("/user/queryUser", qs.stringify(param, {indices: false})).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
        this.$data.userInfo = {"userName": "系统未知"};
      },

      /**
       * 查询所有用户
       */
      queryAllUsers: function () {

        //get请求
        this.$axios.get("/user/queryAllUsers").then(res => {
          if (res.returnCode === "0000") {
            this.$data.userList = res.data;
          }
          alert(res.returnMsg);
        });
      },

      delUser:function () {
        alert("删除用户");
      },
      modUser:function () {
        alert("修改用户");
      }
    }
  }
</script>
<style scoped>
  .user-mg {
    background-color: #42b983;
    padding: 20px;
    text-align: left;
  }

  .user-mg > label {
  }

  table {
    width: 100%;
    color: saddlebrown;
    margin-top: 20px;
  }

  table, tr, td {
    border: 1px solid greenyellow;
    border-collapse: collapse;
    text-align: center;
  }
  thead{
    background-color: #2c3e50;
    color: white;
  }
  td{
    padding: 10px;
  }
  tbody tr{
    background-color: azure;
  }
  tbody tr:hover{
    background-color: #440044;
    color: white;
  }

  .btn{
    color: white;
    padding:10px;
    border-radius: 5px;
    border: none;
    background-color: indigo;
  }
  input.btn:hover{
    background-color: #440044;
  }

  input{
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
  }
  input:active{
    background-color: burlywood;
  }

  .del-icon{
    display: inline-block;
    background-image: url("../assets/del02.png");
    width: 30px;
    height: 30px;
    background-size: 30px 30px;
  }
  .mod-icon{
    display: inline-block;
    background-image: url("../assets/mod04.png");
    background-size: 30px 30px;
    width: 30px;
    height: 30px;
  }


</style>
