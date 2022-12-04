import { NIcon, NButton, NImage } from 'naive-ui'
import { h } from 'vue'
import { Edit, Delete } from '@vicons/carbon'
import { ITheadItem } from '@/base-ui/table'
import { formatUtcString } from '@/utils/date-format'

const icons = [Edit, Delete]
export const thead: ITheadItem[] = [
  {
    type: 'selection',
    align: 'center'
  },
  {
    title: '序号',
    key: 'sort',
    align: 'center',
    width: 60
  },
  {
    title: '商品名称',
    align: 'center',
    key: 'name',
    width: 200,
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '原价格',
    align: 'center',
    key: 'oldPrice'
  },
  {
    title: '现价格',
    align: 'center',
    key: 'newPrice'
  },
  {
    title: '商品图片',
    align: 'center',
    key: 'imgUrl',
    render: (row: any) => {
      const imgs = row.imgUrl.map((item: any) => {
        return h(
          NImage,
          {
            src: item,
            width: 40,
            height: 50
          },
          {
            default: () => null
          }
        )
      })

      return imgs
    }
  },
  {
    title: '创建时间',
    align: 'center',
    key: 'createAt'
  },
  {
    title: '更新时间',
    align: 'center',
    key: 'updateAt'
  },
  {
    title: '操作',
    align: 'center',
    key: 'action',
    render: (row: any) => {
      const btns = row.action.map((item: any, index: number) => {
        return h(
          NButton,
          {
            type: item.type
          },
          [h(NIcon, null, { default: () => h(icons[index]) }), item.text]
        )
      })

      return btns
    }
  }
]

interface ITbodyData {
  key: number
  sort: number
  name: string
  oldPrice: number
  newPrice: number
  imgUrl: any[]
  createAt: string
  updateAt: string
  action: object[]
}

export function initTbodyData(dataList: any) {
  const totalList: ITbodyData[] = []
  dataList.value.forEach((item: any, index: number) => {
    totalList.push({
      key: item.id,
      sort: index + 1,
      name: item.name,
      oldPrice: item.oldPrice,
      newPrice: item.newPrice,
      imgUrl: [item.imgUrl],
      createAt: formatUtcString(item.createAt),
      updateAt: formatUtcString(item.updateAt),
      action: [
        { text: '编辑', type: 'primary' },
        { text: '删除', type: 'error' }
      ]
    })
  })
  return totalList
}
