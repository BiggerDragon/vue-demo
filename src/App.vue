<template>
<div id="app">
	<!--<img src="./assets/logo.png">-->
	<router-view/>
</div>
</template>
<script>
//公钥和私钥俗称不对称加密方式
//公钥只能用私钥来解密，私钥只能用公钥来解密
//公钥是给大家用的，私钥就是自己的
//公钥是用来加密或者验章用的
//私钥使用来解密或者签章用的
//以发送有劲啊为例:1.我发送给你的内容必须加密，传输过程中不被别人看到
//                2.邮件必须是我发送的，不是别人冒充
export default {
name: 'App'
	}
</script>
<style>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
width: 100%;
height: 800px;
}
</style>