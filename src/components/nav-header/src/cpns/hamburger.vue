<template>
  <div class="hamburger" @click="handleShowCollapsed">
    <n-icon size="30" v-if="!collapsed">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path
          d="M905.216 184.32H118.784v131.072h786.432V184.32z m0 262.144H380.928v131.072h524.288V446.464z m0 262.144H118.784v131.072h786.432V708.608zM315.392 380.928L118.784 512l196.608 131.072V380.928z"
        />
      </svg>
    </n-icon>
    <n-icon size="30" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path
          d="M118.784 184.32h786.432v131.072H118.784V184.32z m0 262.144h524.288v131.072H118.784V446.464z m0 262.144h786.432v131.072H118.784V708.608z m589.824-360.448l196.608 163.84-196.608 131.072V348.16z"
        />
      </svg>
    </n-icon>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const collapsed = computed(() => store.state.siderMenuModule.isCollapsed)

// 更改折叠状态
const handleShowCollapsed = (): void => {
  store.commit('siderMenuModule/handleShowSiderMenuCollapsed')
}
</script>

<style lang="less" scoped>
.hamburger {
  display: flex;
  cursor: pointer;
}
</style>
