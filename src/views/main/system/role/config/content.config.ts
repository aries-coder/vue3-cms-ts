import { NButton, NIcon } from 'naive-ui'
import { Edit, Delete } from '@vicons/carbon'
import { h } from 'vue'
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
    align: 'center'
  },
  {
    title: '角色名',
    align: 'center',
    key: 'name'
  },
  {
    title: '权限介绍',
    align: 'center',
    key: 'intro'
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
        if (item.verify) {
          return h(
            NButton,
            {
              type: item.type,
              onClick: () => {
                switch (item.text) {
                  case '删除':
                    item.event({
                      id: row.id,
                      queryInfo: { offset: 0, size: 10 }
                    })
                    break
                  case '编辑':
                    item.event(row)
                }
              }
            },
            [h(NIcon, null, { default: () => h(icons[index]) }), item.text]
          )
        }
      })

      return btns
    }
  }
]

interface ITbodyData {
  key: number
  id: number
  sort: number
  name: string
  intro: string
  createAt: string
  updateAt: string
  action: object[]
}

export function initTbodyData(
  dataList: any,
  btnVerify: any[],
  btnEvents: any[]
) {
  console.log(dataList, 'mmmmmmmmmmmmmmm')

  const totalList: ITbodyData[] = []
  dataList.value.forEach((item: any, index: number) => {
    totalList.push({
      key: item.id,
      id: item.id,
      sort: index + 1,
      name: item.name,
      intro: item.intro,
      createAt: formatUtcString(item.createAt),
      updateAt: formatUtcString(item.updateAt),
      action: [
        {
          text: '编辑',
          type: 'primary',
          verify: btnVerify[0],
          event: btnEvents[0]
        },
        {
          text: '删除',
          type: 'error',
          verify: btnVerify[1],
          event: btnEvents[1]
        }
      ]
    })
  })
  return totalList
}
