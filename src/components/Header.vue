<script setup lang="ts">

</script>

<template>
  <!-- 头部 -->
  <header>
    <div class="wrapper left">
      <h1><a href="#">桂林电子科技大学数学与计算科学学院</a></h1>
      <div class="right">
        <div>
          <a href="#">加入收藏</a>
          <span>|</span>
          <a href="#">学校主页</a>
        </div>
        <div class="search">
          <input type="text" placeholder="请输入关键字搜索">
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  /* 头部 */
  header{
    height: 112px;
  }
  .left{
    display:flex;
    justify-content: space-between;
    height: 112px;
  }
  .left h1{
    margin-top:21px;
  }
  .left h1 a{
    display:block;
    width: 384px;
    height: 70px;
    font-size:0;
    background-image: url(@/assets/images/logo.png);
  }
  .right{
    display:flex;
    justify-content:flex-end;
    flex-wrap: wrap;
    width: 400px;
    height: 91px;
    padding-top:15px;
  }
  .right a{
    padding:0 5px;
    font-size:14px;
    color:#666;
  }
  .right span{
    font-size:14px;
    color:#666;
  }
  .right .search{
    width: 287px;
    height: 38px;
    margin-top:15px;
    border:1px solid #e7e7e7;
    border-radius:19px;
  }
  .search input{
    width: 195px;
    height: 30px;
    line-height:30px;
    margin:5px 0 0 15px;
    border:none;
    outline:none;
  }
</style>