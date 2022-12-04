<template>
  <div>
    <slot name="header"></slot>
    <n-data-table
      :columns="thead"
      :data="tbody"
      :single-line="false"
      :pagination="pagination"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType, reactive } from 'vue'
import { ITheadItem } from '../types'

defineProps({
  thead: {
    type: Array as PropType<ITheadItem[]>
  },
  tbody: {
    type: Array
  }
})

const pagination = reactive({
  pageSize: 5,
  showSizePicker: true,
  showQuickJumper: true,
  pageSizes: [3, 5, 7],
  goto: '调至',
  onUpdatePageSize(pageSize: number) {
    pagination.pageSize = pageSize
  }
})
</script>

<style lang="less" scoped></style>
