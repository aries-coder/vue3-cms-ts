<template>
  <div class="nav-header">
    <hamburger />
    <breadcrumb />
    <avatar />
  </div>
</template>

<script lang="ts" setup>
import Hamburger from './cpns/hamburger.vue'
import Breadcrumb from './cpns/breadcrumb.vue'
import Avatar from './cpns/Avatar.vue'
</script>

<style lang="less" scoped>
.nav-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
