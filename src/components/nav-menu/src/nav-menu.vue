<template>
  <div>
    <div class="log">
      <img src="@/assets/images/logo.svg" alt="" />
      <h2>Vue3+TS</h2>
    </div>
    <n-menu
      :options="menuOptions"
      :inverted="true"
      :default-expanded-keys="defaultExpandedKeys"
      :default-value="defaultValue"
      @update:value="updateExpandedKeysValue"
      @update:expanded-keys="updateExpandedKeys"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  DesktopOutline,
  SettingsOutline,
  BagRemoveOutline,
  ChatbubbleEllipses
} from '@vicons/ionicons5'
import type { MenuOption } from 'naive-ui'

import { useStore } from '@/store'
import { initMenuOption } from '../config'
import cache from '@/utils/cache'

const store = useStore()

const icons = [
  DesktopOutline,
  SettingsOutline,
  BagRemoveOutline,
  ChatbubbleEllipses
]
const userMenus = store.state.loginModule.userMenus
const menuOptions: MenuOption[] = initMenuOption(userMenus, icons)

// 默认展开发菜单
let defaultExpandedKeys = cache.getCache('defaultExpandedKeys') ?? ['系统总览']
let defaultValue = cache.getCache('defaultExpandedKeysValue') ?? '核心技术'
const updateExpandedKeys = (e: string[]) => {
  defaultExpandedKeys = [e[e.length - 1]]
  // 默认展开的菜单组
  cache.setCache('defaultExpandedKeys', [e[e.length - 1]])
}
const updateExpandedKeysValue = (e: any) => {
  defaultValue = e

  // 默认展开的菜单项
  cache.setCache('defaultExpandedKeysValue', e)
}
</script>

<style lang="less" scoped>
.log {
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #777;
  img {
    width: 28px;
    height: 28px;
    margin: 0 6px;
  }
  h2 {
    padding: 0;
    margin: 0;
  }
}
</style>
