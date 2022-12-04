<template>
  <div class="goods">
    <page-content
      page-name="goods"
      :thead="thead"
      :init-tbody-fn="initTbodyData"
      :page-data-size="100"
    />
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import { thead, initTbodyData } from './config/content.config'
</script>

<style scoped></style>
