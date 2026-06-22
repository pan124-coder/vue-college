<script setup lang="ts">
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import {getNewsById, type newsData} from "@/http/news.ts";

const route = useRoute()
const newsDetail = ref<newsData | null>(null)

const loadNewsDetail = async () => {
  const id = parseInt(route.params.id as string)
  if (!id) return
  try {
    const res = await getNewsById(id)
    if (res && res.data) {
      newsDetail.value = res.data
    }
  } catch (err) {
    console.error("获取新闻详情失败：", err)
  }
}

watch(() => route.params.id, () => {
  loadNewsDetail()
}, {immediate: true})
</script>

<template>
  <!-- 内容 -->
  <main>
    <div class="wrapper article_top">
      <div class="position">
        <img src="@/assets/images/position_icon.png">
        <a href="/">首页</a>
        <span>></span>
        <router-link to="/news">{{ newsDetail?.category || '学院新闻' }}</router-link>
        <span>></span>
        <a href="#">正文</a>
      </div>
    </div>
    <div class="wrapper article_bottom" v-if="newsDetail">
      <div class="article_title">
        <h2>{{ newsDetail.title }}</h2>
        <p>作者:{{ newsDetail.supplier }}&nbsp;&nbsp;时间:{{ newsDetail.publishTime?.substring(0, 10) || newsDetail.createTime?.substring(0, 10) }}&nbsp;&nbsp;审核人:{{ newsDetail.reviewer }}</p>
      </div>
      <div class="article_content" v-html="newsDetail.content">
      </div>
      <div class="article_nav">
        <span>上一篇：无&nbsp;&nbsp;下一篇：无</span>
      </div>
    </div>
    <div class="wrapper article_bottom" v-else>
      <div style="text-align:center; padding:50px;">
        <p>新闻加载中...</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.article_top{
  display:flex;
  align-items: center;
  height: 56px;
  border-bottom:2px solid orange;
}
.article_top img{
  vertical-align:middle;
  margin-right: 8px;
}
.article_top span{
  padding:0 5px;
  color:#999
}
.article_top a{
  padding:0 5px;
  color:#999;
}
.article_bottom{
  height: auto;
  border:1px solid #e7e7e7;
  border-top:none;
  padding:0 15px;
  text-align:center;
  overflow: hidden;
}
.article_title{
  border-bottom:1px dashed #e7e7e7;
}
.article_title h2{
  font-size:24px;
  margin-top: 46px;
  font-weight: 400;
}
.article_title p{
  color:#999;
  margin:36px 0 10px 0;
}
.article_content{
  padding-top:10px;
}
.article_content p{
  text-indent: 2em;
  text-align:left;
  font-size:20px;
  line-height: 2;
  color:black;
}
.article_content img{
  padding-top:10px;
  max-width: 100%;
}
.article_nav{
  padding:20px;
  margin-top:72px;
  text-align:left;
  background-color: #FBFBFB;
  font-size:12px;
}
</style>