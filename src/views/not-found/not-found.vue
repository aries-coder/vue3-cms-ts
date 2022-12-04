<template>
  <div class="not-found">
    <n-result
      status="404"
      title="404 资源不存在"
      description="生活总归带点荒谬"
    >
      <template #footer>
        <n-button @click="handleRouteClick">找点乐子吧</n-button>
      </template>
    </n-result>
  </div>
</template>

<script lang="ts" setup>
const handleRouteClick = () => {
  window.location.href = 'https://vip.aqdx170.com/?f=vip.aqdx50.com'
}
</script>

<style lang="less" scoped>
.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
