<template>
  <div class="hy-form">
    <slot name="header"></slot>
    <n-form
      label-placement="left"
      :label-width="labelWidth"
      :model="formDataModel"
    >
      <n-grid :x-gap="gaps.xGap" :y-gap="gaps.yGaps" :cols="gaps.cols">
        <n-grid-item
          v-for="item in formItems"
          :key="item"
          :style="gridItemStyle"
        >
          <template v-if="item.type === 'input'">
            <n-form-item :label="item.label">
              <n-input
                v-model:value="formDataModel[item['field']]"
                :type="item.itemType"
                :placeholder="item.placeholder"
                :show-password="item.itemType === 'password'"
              />
            </n-form-item>
          </template>
          <template v-if="item.type === 'select'">
            <n-form-item :label="item.label">
              <n-select
                v-model:value="formDataModel[item['field']]"
                :type="item.itemType"
                :placeholder="item.placeholder"
                :options="item.options"
              />
            </n-form-item>
          </template>
          <template v-if="item.type === 'datePicker'">
            <n-form-item :label="item.label">
              <n-date-picker
                v-model:value="formDataModel[item['field']]"
                :type="item.itemType"
                :placeholder="item.placeholder"
              />
            </n-form-item>
          </template>
        </n-grid-item>
      </n-grid>
    </n-form>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { IFormItem } from '../types'
import { ref, defineEmits, watch } from 'vue'

const props = defineProps({
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  gridItemStyle: {
    type: Object,
    default: () => ({
      padding: '10px 40px'
    })
  },
  formData: {
    type: Object,
    default: () => ({})
  },
  gaps: {
    type: Object,
    default: () => ({
      xGap: 9,
      yGap: 6,
      cols: 3
    })
  }
})

const emits = defineEmits(['formDataModelValue'])

const formDataModel = ref({ ...props.formData })

watch(
  formDataModel,
  (newValue) => {
    emits('formDataModelValue', newValue)
  },
  { deep: true }
)
</script>

<style lang="less" scoped>
.hy-form {
  width: 100%;
  height: 100%;
}
</style>
