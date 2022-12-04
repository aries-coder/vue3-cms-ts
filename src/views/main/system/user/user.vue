<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @query-btn-click="handleQueryBtnClick"
      @reset-btn-click="handleResetBtnClick"
    />
    <page-content
      :thead="thead"
      pageName="users"
      :init-tbody-fn="initTbodyData"
      ref="pageContentRef"
      @handle-new-data="handleNewData"
      @handle-edit-data="handleEditData"
    />
    <n-dialog-provider>
      <page-modal
        :modalFormConfig="modalFormConfig"
        :default-info="modalDefaultInfo"
        page-name="users"
        :event-name="modalEventName"
        v-if="showPageModal"
        :title="title"
      />
    </n-dialog-provider>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { thead, initTbodyData } from './config/content.config'
import { initModalFormConfigFn } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'

const store = useStore()

// page-search 相关的 hook
const [pageContentRef, handleQueryBtnClick, handleResetBtnClick] =
  usePageSearch()

// page-modal 相关的hook
const [
  title,
  modalEventName,
  showPageModal,
  modalFormConfig,
  modalDefaultInfo,
  handleEditData,
  handleNewData
] = usePageModal(
  ['新建用户', '编辑用户'],
  initModalFormConfigFn,
  initmodalFormConfigSelectItem
)

// 动态添加部门和角色列表
function initmodalFormConfigSelectItem() {
  modalFormConfig.value.formItems.forEach((item: any) => {
    switch (item.field) {
      case 'departmentId':
        item.options = store.state.entireDepartment.map((item: any) => {
          return { label: item.name, value: item.id }
        })
        break
      case 'roleId':
        item.options = store.state.entireRole.map((item: any) => {
          return { label: item.name, value: item.id }
        })
        break
    }
  })
}
</script>

<style scoped lang="less">
.user {
  padding: 10px 0;
}
</style>
