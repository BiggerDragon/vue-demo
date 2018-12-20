<template>
  <div>
    <p>下载文件</p>
    <input type="button" value="点击下载" @click="download()"/>
  </div>
</template>

<script>
  export default {
    name: "download",
    methods: {
      download:function () {
        alert("开始下载文件...");
      }
    }

  }
</script>
