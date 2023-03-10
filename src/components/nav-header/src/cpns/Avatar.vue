<template>
  <div>
    <n-dropdown
      trigger="hover"
      :options="options"
      :show-arrow="true"
      @select="handleSelect"
    >
      <n-avatar
        round
        size="small"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </n-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'

const store = useStore()

const options = [
  {
    label: '退出',
    key: '退出'
  }
]

const handleSelect = (e: any) => {
  switch (e) {
    case '退出':
      store.dispatch('logoutAction')
      break
  }
}
</script>

<style lang="less" scoped></style>
