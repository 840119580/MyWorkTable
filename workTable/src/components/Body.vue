<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column type="seq" width="50" align="center"></vxe-column>
      <vxe-column field="month" title="月份" width="100" align="center"></vxe-column>
      <vxe-column field="day" title="日期" width="100" align="center"></vxe-column>
      <vxe-column field="week" title="星期" width="100" align="center"></vxe-column>
      <vxe-column
        field="tags"
        title="工作类别"
        :filters="workOptions"
        :filter-multiple="true"
        :edit-render="{name: 'input'}" width="150"
        >
        <!-- 插槽1 渲染标签内容 -->
        <template #default="{ row }">
          <div class="tag-input">
            <el-tag
              v-for="tag in row.tags"
              :key="tag"
              closable
              @close="removeTag(row, tag)">
              {{ tag }}
            </el-tag>
          </div>
        </template>
        <!-- 插槽2 渲染输入框和输入标签按钮 -->
        <template #edit="{ row }">
          <div class="tag-input">
            <el-tag
              v-for="tag in row.tags"
              :key="tag"
              closable
              @close="removeTag(row, tag)">
              {{ tag }}
            </el-tag>
            <el-input
              v-model="row.inputValue"
              placeholder="请输入标签"
              @keyup.enter="addTag(row)"
              class="input-with-select">
              <template #append>
                <el-button @click="addTag(row)">
                      <template #icon>
                        <add-four theme="outline" size="24" fill="#333"/>
                    </template>
                </el-button>
              </template>
            </el-input>
          </div>
          </template>
      </vxe-column>

    </vxe-table>
  </div>
</template>

<script lang="js">
// 导入workOption.js
import options from '../dataStore/workOption.js';
import { ElInput, ElTag, ElButton } from 'element-plus';
import { ref } from 'vue';
import {AddFour } from '@icon-park/vue-next';
// 从iconpark导入一个icon
export default {
  components: {
    ElInput,
    ElTag,
    ElButton,
    AddFour
  },
  data() {
    const tableData = [
      { id: 10001, month: '1月', day: '1日', week: '星期一', type: '开发', tags: ['niu'], inputValue: '' },
      { id: 10002, month: '2月', day: '2日', week: '星期二', type: '设计', tags: [], inputValue: '' },
      { id: 10003, month: '3月', day: '3日', week: '星期三', type: '开发', tags: [], inputValue: '' },
      { id: 10004, month: '4月', day: '4日', week: '星期四', type: '设计', tags: [], inputValue: '' }
    ];
    const editConfig = {
      trigger: 'click',
      mode: 'cell',
      showIcon: true
    };
    const workOptions = options;
    console.log(workOptions);  // 打印筛选选项
    return {
      tableData,
      editConfig,
      workOptions
    };
  },
  methods: {
    addTag(row) {
      const tag = row.inputValue.trim();
      if (tag && !row.tags.includes(tag)) {
        
        row.tags.push(tag);
        console.log(row.tags);  // 新增选项
        this.workOptions.push({ value: tag, label: tag });  // 更新筛选选项
        console.log(this.workOptions);  // 新增选项
        
        row.inputValue = '';  // 清空输入框
        
      }
    },
    removeTag(row, tag) {
      const index = row.tags.indexOf(tag);
      if (index !== -1) {
        row.tags.splice(index, 1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tag-input {
  display: flex;
  align-items: center;
  .el-input {
    flex-grow: 1;
    margin-right: 10px;
    margin-left: 5px;
  }
  .el-tag {
    margin-left: 5px;
    margin-right: 5px;
  }
}


</style>