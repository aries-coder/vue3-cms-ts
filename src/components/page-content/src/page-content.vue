<template>
  <div class="page-content">
    <al-table :thead="thead" :tbody="tbody">
      <template #header>
        <div class="table-title">
          <h2>用户列表</h2>
          <n-button type="primary" v-if="isCreate" @click="handleNewClick">
            新增用户
          </n-button>
        </div>
      </template>
    </al-table>
  </div>
</template>

<script lang="ts" setup>
import AlTable from '@/base-ui/table'
import {
  defineProps,
  PropType,
  watch,
  computed,
  ref,
  defineExpose,
  defineEmits
} from 'vue'
import { useStore } from '@/store'
import { ITheadItem } from '@/base-ui/table'
import { usePermission } from '@/hooks/use-permission'

const props = defineProps({
  thead: {
    type: Array as PropType<ITheadItem[]>
  },
  pageName: {
    type: String
  },
  pageDataSize: {
    type: Number
  },
  initTbodyFn: {
    type: Function
  }
})

const emits = defineEmits(['handleNewData', 'handleEditData'])

// 获取操作的权限
const isCreate = usePermission(props.pageName!, 'create')
const isDelete = usePermission(props.pageName!, 'delete')
const isUpdate = usePermission(props.pageName!, 'update')
const isQuery = usePermission(props.pageName!, 'query')

const store = useStore()

// 根据 pageName 发送网络请求
const getPageData = (queryInfo: any = {}) => {
  if (!isQuery) return
  store.dispatch('systemModule/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: 0,
      size: props.pageDataSize ?? 10,
      ...queryInfo
    }
  })
}
getPageData()

// 根据 pageName 从 vuex 获取对应的数据
const pageListData = computed(() =>
  store.getters['systemModule/pageListData'](props.pageName)
)

const tbody = ref()
// 监听数据改变
watch(
  () => pageListData,
  (newValue) =>
    (tbody.value = props.initTbodyFn!(
      newValue,
      [isUpdate, isDelete],
      [handleEditClick, handleDeleteClick]
    )),
  { deep: true }
)

// 删除、编辑、新建操作
const handleDeleteClick = (info: any) => {
  const { id, queryInfo } = info
  store.dispatch('systemModule/deletePageDataAction', {
    pageName: props.pageName,
    id,
    queryInfo
  })
}
const handleNewClick = () => {
  emits('handleNewData')
}
const handleEditClick = (info: any) => {
  emits('handleEditData', info)
}

// setup 向外抛出
defineExpose({ getPageData })
</script>

<style lang="less" scoped>
.table-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
