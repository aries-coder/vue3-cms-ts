<template>
  <div class="menu">
    <page-content
      :thead="thead"
      page-name="menu"
      :init-tbody-fn="initTbodyData"
    />
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'

import { thead, initTbodyData } from './config/content.config'
</script>

<style scoped></style>
