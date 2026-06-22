import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/index.vue'
import News from '@/views/news.vue'
import Article from '@/views/article.vue'
import BaseLayout from "@/views/BaseLayout.vue";

// const routes = [
//     { path: '/', name: 'Index', component: Index },
//     { path: '/news', name: 'News', component: News },
//     { path: '/article', name: 'Article', component: Article },
// ]

const routes = [
    {
        path: '/',
        name: 'base',
        component: BaseLayout,
        children: [
            { path: '', name: 'Index', component: Index },
            { path: '/news', name: 'News', component: News },
            { path: 'article/:id', name: 'articleDetail', component: Article },
        ]
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router