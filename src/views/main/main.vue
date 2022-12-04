<template>
  <div class="main">
    <n-layout has-sider class="layout">
      <n-layout-sider
        class="sider"
        show-trigger
        :collapsed="collapsed"
        collapse-mode="width"
        :collapsed-width="50"
        :width="210"
        :native-scrollbar="false"
        :inverted="true"
        :embedded="true"
        @update:collapsed="handleShowCollapsed"
      >
        <nav-menu />
      </n-layout-sider>

      <n-layout class="container">
        <n-layout-header class="header">
          <nav-header />
        </n-layout-header>
        <n-layout-content class="content">
          <div class="page-info">
            <router-view />
          </div>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>

<script lang="ts" setup>
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

const collapsed = computed(() => store.state.siderMenuModule.isCollapsed)

// 更改折叠状态
const handleShowCollapsed = (): void => {
  console.log(1)

  store.commit('siderMenuModule/handleShowSiderMenuCollapsed')
}
</script>

<style lang="less" scoped>
.main {
  width: 100vw;
  height: 100vh;
}
.layout {
  width: 100%;
  height: 100%;
}
.sider {
  height: 100%;
}
.container {
  height: 100%;
  background-color: lightblue;
}
.header {
  height: 48px;
}
.content {
  height: calc(100% - 48px);
  background-color: #f0f2f5;
  padding: 20px;

  .page-info {
    background-color: #fff;
  }
}
</style>
