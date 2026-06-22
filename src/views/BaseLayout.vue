<template>
  <!-- 顶部导航区域 -->
  <header>
    <Nav />
  </header>

  <!-- 主内容区域 -->
  <main class="layout-main">
    <RouterView />
  </main>
</template>

<script setup>
import Nav from '@/components/Nav.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
.layout-main {
  padding: 20px;
}
</style>