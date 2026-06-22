<script setup lang="ts">
import {onMounted, ref, computed} from "vue";
import {useRoute} from "vue-router";
import {getPublishedNews, type newsData} from "@/http/news.ts";

const route = useRoute()
const newsListData = ref<newsData[]>([])
const categoryList = ['学院新闻', '通知公告', '学术活动', '学工新闻', '党建工作']

const currentCategory = computed(() => {
  return route.query.category || '学院新闻'
})

const getCategoryName = (category: string) => {
  return categoryList.find(c => c === category) || '学院新闻'
}

onMounted(async () => {
  try {
    const res = await getPublishedNews(currentCategory.value as string, 50)
    if (res && res.data) {
      newsListData.value = res.data
    }
  } catch (err) {
    console.error("获取新闻失败：", err)
  }
})
</script>

<template>
  <!-- 内容 -->
  <main>
    <div class="wrapper news_top">
      <div class="position">
        <img src="@/assets/images/position_icon.png" alt="">
        <router-link to="/">首页</router-link>
        <span>></span>
        <router-link to="/news">{{ getCategoryName(currentCategory as string) }}</router-link>
      </div>
    </div>
    <div class="wrapper news_bottom">
      <div class="news_bottom_left">
        <div class="category-nav">
          <h3>新闻分类</h3>
          <ul>
            <li v-for="cat in categoryList" :key="cat">
              <router-link :to="'/news?category=' + cat" :class="{active: currentCategory === cat}">
                {{ cat }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="news_bottom_right">
        <ul>
          <li v-for="news in newsListData" :key="news.id">
            <router-link :to="{name: 'articleDetail', params:{id:news.id}}">{{news.title}}</router-link>
            <span>{{news.publishTime?.substring(0, 10) || news.createTime?.substring(0, 10)}}</span>
          </li>
          <li v-if="newsListData.length === 0">暂无相关新闻</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
.news_top{
  display:flex;
  align-items: center;
  height: 56px;
  border-bottom:2px solid orange;
}
.news_top img{
  vertical-align:middle;
  margin-right: 8px;
}
.news_top span{
  padding:0 5px;
  color:#999
}
.news_top a{
  padding:0 5px;
  color:#999;
}
.news_bottom{
  display:flex;
  justify-content:space-between;
  margin-top:20px;
}
.news_bottom_left{
  width: 250px;
}
.category-nav{
  border:1px solid #e7e7e7;
}
.category-nav h3{
  height: 53px;
  background-color: #1FA0E4;
  color:#fff;
  font-size:24px;
  line-height:53px;
  text-align:center;
  margin:0;
}
.category-nav ul{
  padding:0;
  margin:0;
}
.category-nav li{
  padding:10px 20px;
  border-bottom:1px solid #e7e7e7;
}
.category-nav li:last-child{
  border-bottom:none;
}
.category-nav li a{
  color:#333;
  font-size:16px;
}
.category-nav li a.active{
  color:#1FA0E4;
  font-weight:bold;
}
.news_bottom_right{
  width: 735px;
  padding-left:12px;
}
.news_bottom_right li{
  display:flex;
  justify-content:space-between;
  align-items: center;
}
.news_bottom_right li span{
  color:#333;
}
.news_bottom_right li a{
  height: 46px;
  line-height: 46px;
  color:#333;
}
.news_bottom_right li a::before{
  content:"";
  display:inline-block;
  vertical-align: middle;
  width: 3px;
  height: 3px;
  background-color: #999;
  margin:0 5px;
}
</style>