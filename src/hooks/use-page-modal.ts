import { useStore } from '@/store'
import { ref, computed } from 'vue'

export function usePageModal(
  titles: string[],
  initModalFormConfigFn: (type: string) => any,
  initmodalFormConfigSelectItem?: () => void
): any[] {
  const store = useStore()
  const showPageModal = computed(() => store.state.showDialogKey)

  const modalFormConfig = ref()
  const modalDefaultInfo = ref()
  const modalEventName = ref()
  const title = ref()

  const handleNewData = (): void => {
    title.value = titles[0]
    modalFormConfig.value = initModalFormConfigFn('new')
    modalDefaultInfo.value = ''
    modalEventName.value = 'new'
    initmodalFormConfigSelectItem && initmodalFormConfigSelectItem()
    store.commit('changeShowDialogKey')
  }

  const handleEditData = (info: any): void => {
    title.value = titles[1]
    modalFormConfig.value = initModalFormConfigFn('edit')
    modalEventName.value = 'edit'
    modalDefaultInfo.value = info
    initmodalFormConfigSelectItem && initmodalFormConfigSelectItem()

    store.commit('changeShowDialogKey')
  }

  return [
    title,
    modalEventName,
    showPageModal,
    modalFormConfig,
    modalDefaultInfo,
    handleEditData,
    handleNewData
  ]
}
