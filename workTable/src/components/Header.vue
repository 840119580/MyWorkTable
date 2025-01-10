<template>
  <el-page-header icon="" class="header">
    <template #content>
      <div class="content">
        <el-avatar
          :size="32"
          class="mr-3"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="title"> 开发日工作汇总表 </span>
        <span class="sub-title" style="color: var(--el-text-color-regular)">
           2025年
        </span>
        <el-tag class="tag">Default</el-tag>
      </div>
    </template>
    <template #extra>
      <div class="content">
        <el-button>&nbsp;人日计算
          <template #icon>
            <arithmetic-one theme="outline" size="16" fill="#333"/>
          </template>
        </el-button>
        <el-button>&nbsp;项目管理
          <template #icon>
            <book-one theme="outline" size="16" fill="#333"/>
          </template>
        </el-button>
        <el-button @click="showOptionManage()">&nbsp;类别管理
          <template #icon>
            <doc-add theme="outline" size="16" fill="#333"/>
          </template>
        </el-button>
      </div>
    </template>
  </el-page-header>
  <!-- 引入 OptionManageView 组件 -->
  <option-manage-view ref="optionManageView" />
</template>

<script lang = "js" setup>
import  back  from "../assets/back.svg";
import { ref } from 'vue';
import { DocAdd, BookOne, ArithmeticOne } from '@icon-park/vue-next';
import OptionManageView from './OptionManageView.vue';


const optionManageView = ref(null);

const showOptionManage = () => {
  optionManageView.value.open();
};

const OptionManage = () => {
  console.log("OptionManage");
  showOptionManage();
};


</script>

<style lang="scss" scoped>
.header {
  height: 64px;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 0 20px;
  
  .content {
    display: flex;
    align-items: center;
    align-content: center;
    height: 100%;
  }
}
.tag{
  margin-left: 10px;
}
.title{
  margin-left: 10px;
  // 加粗
  font-weight: bold;
  font-size: large;
}
.sub-title{
  margin-left: 10px;
  font-size: medium;
}
</style>