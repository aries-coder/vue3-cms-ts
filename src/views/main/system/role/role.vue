<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @query-btn-click="handleQueryBtnClick"
      @reset-btn-click="handleResetBtnClick"
    />
    <page-content
      page-name="role"
      :thead="thead"
      :init-tbody-fn="initTbodyData"
      :page-data-size="100"
      ref="pageContentRef"
      @handle-new-data="handleNewData"
      @handle-edit-data="handleEditData"
    />
    <n-dialog-provider>
      <page-modal
        :title="title"
        :modalFormConfig="modalFormConfig"
        :default-info="modalDefaultInfo"
        page-name="role"
        :event-name="modalEventName"
        :other-info="otherInfo"
        v-if="showPageModal"
      >
        <template #default>
          <n-tree
            block-line
            cascade
            checkable
            :data="treeData"
            :on-update:checked-keys="changeTreeCheckedKeys"
          />
        </template>
      </page-modal>
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

import { ref, watch, computed } from 'vue'
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
] = usePageModal(['新建角色', '编辑角色'], initModalFormConfigFn)

const treeData = ref<any>([])

const menuList = computed(() => store.state.entireMenu)

const initTreeDataFn = (menuList: any) => {
  const totalList: any = []
  menuList.value.forEach((item: any) => {
    const pList: any = { label: item.name, key: item.id }

    function initTreeChildrenFn(childrenItem: any) {
      const childrenList: any = []
      childrenItem.forEach((item: any) => {
        const list: any = { label: item.name, key: item.id }

        if (item.children) {
          list.children = initTreeChildrenFn(item.children)
        }

        childrenList.push(list)
      })

      return childrenList
    }

    if (item.children) {
      pList.children = initTreeChildrenFn(item.children)
    }

    totalList.push(pList)
  })
  treeData.value = totalList
}

const otherInfo = ref()
const changeTreeCheckedKeys = (data1: any, data2: any) => {
  const menuList = Array.from(new Set(data2.map((item: any) => item.key)))
  console.log(menuList)

  otherInfo.value = { menuList }
}

watch(
  () => menuList,
  (newValue) => {
    initTreeDataFn(newValue)
  },
  { deep: true, immediate: true }
)
</script>

<style scoped></style>
