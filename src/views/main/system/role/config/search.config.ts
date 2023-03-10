import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '100px',
  formItems: [
    {
      field: 'name',
      label: '角色名称',
      type: 'input',
      itemType: 'text'
    },
    {
      field: 'intro',
      label: '权限介绍',
      type: 'input',
      itemType: 'text'
    },
    {
      field: 'createAt',
      label: '创建时间',
      type: 'datePicker',
      itemType: 'daterange'
    }
  ]
}
