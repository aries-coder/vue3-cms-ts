import { NButton, NIcon } from 'naive-ui'
import { Edit, Delete } from '@vicons/carbon'
import { h } from 'vue'
import { ITheadItem } from '@/base-ui/table'
import { formatUtcString } from '@/utils/date-format'

const icons = [Edit, Delete]
export const thead: ITheadItem[] = [
  {
    title: '菜单名称',
    key: 'name',
    align: 'center'
  },
  {
    title: '类型',
    key: 'type',
    align: 'center'
  },
  {
    title: '菜单url',
    key: 'url',
    align: 'center'
  },
  {
    title: '菜单icon',
    key: 'icon',
    align: 'center'
  },
  {
    title: '按钮权限',
    key: 'permission',
    align: 'center'
  },
  {
    title: '创建时间',
    key: 'createAt',
    align: 'center'
  },
  {
    title: '更新时间',
    key: 'updateAt',
    align: 'center'
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
    render: (row: any) => {
      const action = row.action.map((item: any, index: number) => {
        return h(
          NButton,
          {
            type: item.type
          },
          [h(NIcon, null, { default: () => h(icons[index]) }), item.text]
        )
      })

      return action
    }
  }
]

interface ITbodyData {
  key: number
  type: string | number
  url: string
  icon: string
  name: string
  createAt: string
  updateAt: string
  action: object[]
  children?: any
  permission?: string
}

export function initTbodyData(dataList: any) {
  const totalList: ITbodyData[] = []
  dataList.value.forEach((item: any) => {
    const list: ITbodyData = {
      key: item.id,
      type: item.type,
      url: item.url,
      icon: item.icon,
      permission: item.permission,
      name: item.name,
      createAt: formatUtcString(item.createAt),
      updateAt: formatUtcString(item.updateAt),
      action: [
        { text: '编辑', type: 'primary' },
        { text: '删除', type: 'error' }
      ]
    }
    if (item.children) {
      list.children = initTbodyChildrenItem(item.children)
    }

    function initTbodyChildrenItem(childrenItem: any) {
      console.log(childrenItem)

      const childrenList: ITbodyData[] = []
      childrenItem.forEach((item: any) => {
        const list: ITbodyData = {
          key: item.id,
          type: item.type,
          url: item.url,
          icon: item.icon,
          permission: item.permission,
          name: item.name,
          createAt: formatUtcString(item.createAt),
          updateAt: formatUtcString(item.updateAt),
          action: [
            { text: '编辑', type: 'primary' },
            { text: '删除', type: 'error' }
          ]
        }

        if (item.children) {
          list.children = initTbodyChildrenItem(item.children)
        }

        childrenList.push(list)
      })

      return childrenList
    }

    totalList.push(list)
  })
  return totalList
}
