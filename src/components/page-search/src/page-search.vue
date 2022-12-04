<template>
  <div>
    <hy-form
      v-bind="searchFormConfig"
      :form-data="formData"
      label-width="100px"
      @form-data-model-value="changeFormDataValue"
    >
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="footer">
          <n-button @click="resetBtnClick">
            <n-icon>
              <reset />
            </n-icon>
            重置
          </n-button>
          &nbsp;
          <n-button type="primary" @click="queryBtnClick">
            <n-icon>
              <search-outline />
            </n-icon>
            搜索
          </n-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts" setup>
import HyForm from '@/base-ui/form'
import { Reset } from '@vicons/carbon'
import { SearchOutline } from '@vicons/ionicons5'
import { defineProps, ref, defineEmits } from 'vue'
import { IFormItem } from '@/base-ui/form'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    default: () => ({})
  }
})

const emits = defineEmits(['resetBtnClick', 'queryBtnClick'])

const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
formItems.forEach((item: IFormItem) => {
  console.log(item)
  formOriginData[item['field']] = ''
})
const formData = ref({ ...formOriginData })

// 表单发生改变
const changeFormDataValue = (e: any) => {
  formData.value = e
  console.log(formData.value)
}

// 监听重置操作
const resetBtnClick = () => {
  for (const key in formOriginData) {
    formData.value[key] = formOriginData[key]
  }
  formData.value = formOriginData

  emits('resetBtnClick')
}

// 监听搜索操作
const queryBtnClick = () => {
  emits('queryBtnClick', formData.value)
}
</script>

<style lang="less" scoped>
.header {
  color: red;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
}

.footer {
  // float: right;
  text-align: right;
  margin-right: 40px;
  margin-top: -10px;
}
</style>
