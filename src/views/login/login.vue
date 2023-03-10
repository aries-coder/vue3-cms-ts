<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts" setup>
import LoginPanel from './cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/login-bg.svg');
  background-position: center;
}
</style>
