import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '100px',
  formItems: [
    {
      field: 'id',
      label: 'id',
      placeholder: '请输入id',
      type: 'input',
      itemType: 'text'
    },
    {
      field: 'name',
      label: '用户名',
      placeholder: '请输入用户名',
      itemType: 'text',
      type: 'input'
    },
    {
      field: 'realname',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      itemType: 'text',
      type: 'input'
    },
    {
      field: 'cellphone',
      label: '电话号码',
      placeholder: '请输入电话号码',
      itemType: 'text',
      type: 'input'
    },
    {
      field: 'enable',
      label: '用户状态',
      placeholder: '请选择用户状态',
      itemType: 'group',
      type: 'select',
      options: [
        {
          label: '启用',
          value: 1
        },
        {
          label: '禁用',
          value: 0
        }
      ]
    },
    {
      field: 'createAt',
      label: '创建时间',
      itemType: 'daterange',
      type: 'datePicker'
    }
  ]
}
