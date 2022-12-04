import alRequest from '@/service'

export const getPageListData = (url: string, queryInfo: object) => {
  return alRequest.post({
    url,
    data: queryInfo
  })
}

export const deletePageData = (url: string) => {
  return alRequest.delete({
    url
  })
}

export const createPageData = (url: string, data: any) => {
  return alRequest.post({
    url,
    data
  })
}

export const editPageData = (url: string, data: any) => {
  return alRequest.patch({
    url,
    data
  })
}
