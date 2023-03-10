<template>
  <div class="app">
    <n-message-provider>
      <message-ui />
    </n-message-provider>
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
      <n-loading-bar-provider>
        <router-view />
      </n-loading-bar-provider>
    </n-config-provider>
  </div>
</template>

<script lang="ts" setup>
import MessageUi from './base-ui/message-ui'
import { dateZhCN, zhCN } from 'naive-ui'
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>
