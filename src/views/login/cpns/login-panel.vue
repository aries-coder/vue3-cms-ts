<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <n-card>
      <n-tabs
        class="login-tabs"
        justify-content="space-evenly"
        :animated="true"
      >
        <n-tab-pane name="账号" tab="账号登录">
          <login-account />
        </n-tab-pane>
        <n-tab-pane name="手机" tab="手机登录">
          <login-phone />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
</script>

<style lang="less" scoped>
.login-panel {
  margin-top: 200px;

  .title {
    margin: 0;
    text-align: center;
  }

  .login-tabs {
    width: 250px;
  }
}
</style>
