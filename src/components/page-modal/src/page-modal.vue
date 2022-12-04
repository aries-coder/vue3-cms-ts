<template>
  <div></div>
</template>

<script lang="ts" setup>
import formVue from '@/base-ui/form/src/form.vue'
import { useDialog } from 'naive-ui'
import { h, defineProps, watch, ref, useSlots } from 'vue'
import { useStore } from '@/store'

const slots = useSlots()

const props = defineProps({
  modalFormConfig: {
    type: Object,
    default: () => ({})
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  otherInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    default: ''
  },
  eventName: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: '新建用户'
  }
})

const dialog = useDialog()
const store = useStore()
const formData = ref<any>({})

const initDialogFn = () => {
  dialog.success({
    title: () => {
      return h(
        'h3',
        {
          style: {
            margin: '0 auto'
          }
        },
        {
          default: () => props.title
        }
      )
    },
    content: () => {
      // return
      return h('div', [
        h(formVue, {
          formItems: props.modalFormConfig.formItems,
          gaps: {
            xGap: 1,
            yGap: 1,
            cols: 1
          },
          gridItemStyle: {
            padding: '0 0'
          },
          formData: formData.value,
          onFormDataModelValue: changeFormDataValue
        }),
        h('div', {}, { default: () => (slots.default ? slots.default() : '') })
      ])
      // return h(formVue, {
      //   formItems: props.modalFormConfig.formItems,
      //   gaps: {
      //     xGap: 1,
      //     yGap: 1,
      //     cols: 1
      //   },
      //   gridItemStyle: {
      //     padding: '0 0'
      //   },
      //   formData: formData.value,
      //   onFormDataModelValue: changeFormDataValue
      // })
    },
    positiveText: '确定',
    negativeText: '取消',
    maskClosable: false,
    showIcon: false,
    onMaskClick: () => {
      window.$message.success('不能关闭')
    },
    onClose: () => {
      handleShowDiaLog()
    },
    onNegativeClick: () => {
      handleShowDiaLog()
    },
    onPositiveClick: () => {
      switch (props.eventName) {
        case 'new':
          store.dispatch('systemModule/createPageDataAction', {
            pageName: props.pageName,
            newData: { ...formData.value, ...props.otherInfo }
          })
          break
        case 'edit':
          store.dispatch('systemModule/editPageDataAction', {
            pageName: props.pageName,
            editData: { ...formData.value, ...props.otherInfo },
            id: props.defaultInfo.id
          })
          break
        default:
          break
      }
      handleShowDiaLog()
    }
  })
}

const handleShowDiaLog = () => {
  store.commit('changeShowDialogKey')
}

// 表单发生改变
const changeFormDataValue = (e: any) => {
  formData.value = e
  console.log(formData.value)
}

watch(
  () => [props.modalFormConfig, props.defaultInfo],
  ([newModalFormConfig, newDefaultInfo]) => {
    newModalFormConfig.formItems.forEach((item: any) => {
      formData.value[item.field] = ''
      if (Object.getOwnPropertyNames(newDefaultInfo).length > 0) {
        formData.value[item.field] = newDefaultInfo[item.field]
      }
    })

    initDialogFn()
  },
  { deep: true, immediate: true }
)
</script>

<style lang="less" scoped></style>
