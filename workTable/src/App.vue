<script setup>
import Header from './components/Header.vue'
import Body from './components/Body.vue';
import { ref } from 'vue';
import 'element-plus/theme-chalk/index.css';
</script>

<template>
  <div class="headerDiv"><Header /></div>
  <div class="bodyDiv"><Body /></div>
</template>

<style lang="scss" scoped>
.headerDiv {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}
.bodyDiv {
  padding: 20px;
}
</style>