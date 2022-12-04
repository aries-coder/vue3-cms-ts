import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch(): any[] {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleQueryBtnClick = (e: any) => {
    pageContentRef.value?.getPageData(e)
  }
  const handleResetBtnClick = () => {
    pageContentRef.value?.getPageData()
  }

  return [pageContentRef, handleQueryBtnClick, handleResetBtnClick]
}
