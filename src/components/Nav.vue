<script setup lang="ts">

</script>

<template>
  <!-- 导航栏 -->
  <nav>
    <ul class="wrapper">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <a href="#">学院概况</a>
        <ul class="second">
          <li>
            <a href="#">学院简介</a>
          </li>
          <li>
            <a href="#">现任领导</a>
          </li>
          <li>
            <a href="#">组织机构</a>
          </li>
          <li>
            <a href="#">办事指南</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">师资团队</a>
      </li>
      <li>
        <a href="#">本科生教育</a>
      </li>
      <li>
        <a href="#">科学研究</a>
      </li>
      <li>
        <a href="#">党建工作</a>
      </li>
      <li>
        <a href="#">学生工作</a>
      </li>
      <li>
        <a href="#">人才招聘</a>
      </li>
      <li>
        <a href="#">理论学习</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  /* 导航栏 */
  nav{
    height: 50px;
    background-color:#275895;
  }
  nav > ul{
    display:flex;
    justify-content:space-between;
  }
  nav > ul > li{
    width: 100px;
    height: 50px;
    list-style:none;
  }
  nav > ul > li > a{
    text-decoration: none;
    display:block;
    height: 50px;
    line-height: 50px;
    color:white;
  }
  .second{
    display:none;
    width: 160px;
    position:relative;
    background-color: #0D4082;
  }
  .second li{
    list-style:none;
  }
  .second > li > a{
    text-decoration: none;
    display:block;
    width: 160px;
    height: 38px;
    padding-left:32px;
    line-height: 38px;
    color:white;
  }
  nav > ul > li:hover{
    background-color:#0D4082;
  }
  nav > ul > li:hover .second{
    display:block;
  }
  .second > li:hover{
    background-color:#275895;
  }
</style>