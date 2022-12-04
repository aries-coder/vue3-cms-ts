<template>
  <div class="breadcrumb">
    <n-breadcrumb>
      <n-breadcrumb-item> {{ propName }}</n-breadcrumb-item>
      <n-breadcrumb-item> {{ groupName }}</n-breadcrumb-item>
    </n-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { ref, watch } from 'vue'
import cache from '@/utils/cache'

const route = useRoute()
const store = useStore()

const propName = ref('')
const groupName = ref('')

const userMenus = store.state.loginModule.userMenus

const changeBreadcrumb = () => {
  const routePath = route.matched[1].path
  userMenus.forEach((item: any) => {
    for (let i of item.children) {
      if (routePath === i.url) {
        groupName.value = i.name
        propName.value = item.name

        // route的默认路由
        console.log(route.matched[route.matched.length - 1].path)

        cache.setCache('defaultRoutePath', route.path)
      }
    }
  })
}

watch(
  route,
  () => {
    changeBreadcrumb()
  },
  { deep: true, immediate: true }
)
</script>

<style lang="less" scoped></style>
