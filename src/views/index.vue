<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getPublishedNews, type newsData} from "@/http/news.ts";

const collegeNews = ref<newsData[]>([])
const noticeNews = ref<newsData[]>([])
const academicNews = ref<newsData[]>([])
const studentNews = ref<newsData[]>([])
const partyNews = ref<newsData[]>([])

onMounted(async () => {
  try {
    const [collegeRes, noticeRes, academicRes, studentRes, partyRes] = await Promise.all([
      getPublishedNews('学院新闻', 8),
      getPublishedNews('通知公告', 8),
      getPublishedNews('学术活动', 8),
      getPublishedNews('学工新闻', 8),
      getPublishedNews('党建工作', 8)
    ])
    if (collegeRes && collegeRes.data) collegeNews.value = collegeRes.data
    if (noticeRes && noticeRes.data) noticeNews.value = noticeRes.data
    if (academicRes && academicRes.data) academicNews.value = academicRes.data
    if (studentRes && studentRes.data) studentNews.value = studentRes.data
    if (partyRes && partyRes.data) partyNews.value = partyRes.data
  } catch (err) {
    console.error("获取新闻失败：", err)
  }
})
</script>

<template>
  <!-- 内容 -->
  <main>
    <div class="wrapper top">
      <img src="@/assets/images/1.jpg" alt="">
    </div>
    <div class="wrapper bottom">
      <div class="info">
        <div class="info_top">
          <h2>学院新闻</h2>
          <router-link to="/news?category=学院新闻">MORE</router-link>
        </div>
        <div class="info_bottom">
          <ul>
            <li v-for="news in collegeNews" :key="news.id">
              <router-link :to="{name: 'articleDetail', params:{id:news.id}}">
                {{news.title.substring(0,15)}}
              </router-link>
            </li>
           </ul>
        </div>
      </div>

      <div class="images">
        <div class="images_top">
          <img src="@/assets/images/2.jpg" alt="">
        </div>
        <div class="images_bottom">
          <a href="#">数学与计算科学学院举行新进教职工入职仪式</a>
        </div>
      </div>

      <div class="info">
        <div class="info_top">
          <h2>通知公告</h2>
          <router-link to="/news?category=通知公告">MORE</router-link>
        </div>
        <div class="info_bottom">
          <ul>
            <li v-for="news in noticeNews" :key="news.id">
              <router-link :to="{name: 'articleDetail', params:{id:news.id}}">
                {{news.title.substring(0,15)}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="info">
        <div class="info_top">
          <h2>学术活动</h2>
          <router-link to="/news?category=学术活动">MORE</router-link>
        </div>
        <div class="info_bottom">
          <ul>
            <li v-for="news in academicNews" :key="news.id">
              <router-link :to="{name: 'articleDetail', params:{id:news.id}}">
                {{news.title.substring(0,15)}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="info">
        <div class="info_top">
          <h2>党建工作</h2>
          <router-link to="/news?category=党建工作">MORE</router-link>
        </div>
        <div class="info_bottom">
          <ul>
            <li v-for="news in partyNews" :key="news.id">
              <router-link :to="{name: 'articleDetail', params:{id:news.id}}">
                {{news.title.substring(0,15)}}
              </router-link>
            </li>
            <li v-if="partyNews.length === 0">
              <router-link to="/news?category=党建工作">暂无相关新闻</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="info">
        <div class="info_top">
          <h2>学工新闻</h2>
          <router-link to="/news?category=学工新闻">MORE</router-link>
        </div>
        <div class="info_bottom">
          <ul>
            <li v-for="news in studentNews" :key="news.id">
              <router-link :to="{name: 'articleDetail', params:{id:news.id}}">
                {{news.title.substring(0,15)}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="show">
        <div class="show_top">
          <h2>学院风采</h2>
          <a href="#">MORE</a>
        </div>
        <div class="show_bottom">
          <ul>
            <li>
              <img src="@/assets/images/show/1.jpg">
              <div>The 5th Internat...</div>
            </li>
            <li>
              <img src="@/assets/images/show/1.jpg">
              <div>The 5th Internat...</div>
            </li>
            <li>
              <img src="@/assets/images/show/1.jpg">
              <div>The 5th Internat...</div>
            </li>
            <li>
              <img src="@/assets/images/show/1.jpg">
              <div>The 5th Internat...</div>
            </li>
            <li>
              <img src="@/assets/images/show/1.jpg">
              <div>The 5th Internat...</div>
            </li>
            <li>
              <img src="@/assets/images/show/1.jpg">
              <div>The 5th Internat...</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="content">
        <div class="content_top">
          <h3>友情链接</h3>
        </div>
        <div class="content_bottom">
          <a href=""> 书记信箱: mathssj@guet.edu.cn </a>
          <span>|</span>
          <a href=""> 院长信箱: mathsyz@guet.edu.cn </a>
          <span>|</span>
          <a href=""> 院长信箱: mathsyz@guet.edu.cn </a>
          <span>|</span>
          <a href=""> 桂林电子科技大学 </a>
          <span>|</span>
          <a href=""> 桂林电子科技大学 </a>
          <span>|</span>
          <a href=""> 研究生院 </a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* 内容 */
main .top img{
  width: 1000px;
  height: 200px;
  vertical-align: bottom;
}
main .bottom{
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
}
.info{
  padding-top:20px;
  width: 320px;
}
.info_top{
  display:flex;
  justify-content:space-between;
  height: 44px;
  background-color: #08599A;
  margin-bottom:8px;
}
.info_top h2{
  width: 84px;
  color:#fff;
  line-height: 44px;
  font-size: 16px;
  padding:0 5px;
  text-align:right;
  font-weight: 400;
}
.info_top a{
  margin:25px 15px 0 0;
  font-size:8px;
  color:#fff;
}
.info_bottom ul{
  border:1px solid #e7e7e7;
}
.info_bottom ul li{
  display:flex;
  align-items: center;
}
.info_bottom ul li a{
  color:#222;
  font-size:14px;
  height: 31px;
  line-height: 31px;
}
.info_bottom ul li::before{
  content:"";
  display:block;
  width: 4px;
  height: 4px;
  margin:0 5px;
  background-color: #999;
}
.images{
  width: 320px;
  height: 320px;
  padding-top:20px;
}
.images_top{
  height: 275px;
}
.images_top img{
  width: 100%;
  height: 100%;
}
.images_bottom{
  width: 320px;
  height: 25px;
}
.images_bottom a{
  display:block;
  line-height: 25px;
  color:#222;
  font-size: 16px;
  font-weight: 700;
}
.show{
  padding-top:20px;
  width: 1000px;
}
.show_top{
  display:flex;
  justify-content:space-between;
  height: 44px;
  background-color: #08599A;
  margin-bottom:8px;
}
.show_top h2{
  width: 84px;
  color:#fff;
  line-height: 44px;
  font-size: 16px;
  padding:0 5px;
  text-align:right;
  font-weight: 400;
}
.show_top a{
  margin:25px 15px 0 0;
  font-size:8px;
  color:#fff;
}
.show_bottom ul{
  display:flex;
  justify-content: space-between;
  border:1px solid #e7e7e7;
}

.show_bottom ul li img{
  width: 150px;
  height: 112px;
}
.show_bottom ul li div{
  width: 150px;
  height: 26px;
  color:#222;
  text-align:center;
  font-size:13.3333px;
}
.content_top{
  width: 1000px;
  padding:10px 0;
}
.content_top h3{
  color:black;
  font-size:18px;
  font-weight: 400;
  padding-bottom:10px;
  border-bottom:2px solid #08599A;
}
.content_bottom{
  padding-bottom:15px;
}
.content_bottom a{
  font-size:12px;
  color:#222;
}
.content_bottom span{
  font-size:12px;
  color:#222;
}
</style>