<template>
    <el-dialog
      v-model="visible"
      title="工作类别管理"
      width="40%"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      class="option-manage-dialog"
    >
      <!-- 弹窗内容 -->
      <div>这里是类别管理的内容</div>
      
      <!-- 弹窗底部按钮 -->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
          <el-button type="primary" @click="confirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  
  <script lang="js" setup>
  import { ref } from 'vue';
  
  const visible = ref(false);
  
  const open = () => {
    visible.value = true;
  };
  
  const close = () => {
    visible.value = false;
  };
  
  const cancel = () => {
    close();
  };
  
  const confirm = () => {
    // 执行确认操作的逻辑
    close();
  };
  
  const handleClose = (done) => {
    // 执行关闭前的逻辑
    done();
  };
  
  // 将 open 和 close 方法暴露给父组件
  defineExpose({
    open,
    close
  });
  </script>
  
  <style lang="scss" scoped>
  .option-manage-dialog {
    
  }
  </style>