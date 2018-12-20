<template>
  <div class="login">
    <form class="login-panel">
      <label>用户名:</label><input title="用户名" class="login-input" v-model="username"/><br/>
      <label>密码:</label><input title="密码" class="login-input" v-model="password"/><br/>
      <label></label>
      <button class="btn" @click="login()">登录</button>
    </form>
  </div>
</template>

<script>

  export default {
    name: 'login',
    data: function () {
      return {
        msg: 'Welcome to Login page!',
        username: "",
        password: "",
      }
    },
    methods: {
      login: function () {
        console.log("Login...");
        if (this.$data.username && this.$data.password) {
          alert("登录成功!");
          //跳转到主页
          this.$router.push('/main');
        } else {
          alert("请输入合法用户名和用户密码!");
        }
      }
    }
  }
</script>
<style scoped>
  .login {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: larger;
    width: 100%;
    background: url("../assets/ai_01.jpg") no-repeat;
    background-size: 100%;
    height: 100%;
    padding: 10px;
  }

  .login-panel {
    color: white;
    padding: 20px;
    width: 600px;
    margin: 100px auto;
    background-color: rgba(255, 255, 255, 0.15);
    border: 0;
    border-radius: 5px;
  }

  .login-input {
    font-size: larger;
    height: 35px;
    width: 250px;
    margin: 10px;
    padding: 2px;
    border-radius: 5px;
    line-height: 39px;
    border: 0;
  }

  .btn {
    height: 35px;
    width: 250px;
    margin: 10px;
    background-color: #1daef9;
    color: #fff;
    border-radius: 10px;
    border: 0;
  }

  label {
    display: inline-block;
    width: 100px;
  }
</style>
