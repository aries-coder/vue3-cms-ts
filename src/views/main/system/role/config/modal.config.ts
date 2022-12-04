import { IForm } from '@/base-ui/form'

export function initModalFormConfigFn(type: string = 'new') {
  if (type === 'new') {
    const modalFormConfig: IForm = {
      labelWidth: '100px',
      formItems: [
        {
          field: 'name',
          label: '角色名',
          placeholder: '请输入用户名',
          type: 'input',
          itemType: 'text'
        },
        {
          field: 'intro',
          label: '角色介绍',
          placeholder: '请输入真实姓名',
          itemType: 'text',
          type: 'input'
        }
      ]
    }
    return modalFormConfig
  } else if (type === 'edit') {
    const modalFormConfig: IForm = {
      labelWidth: '100px',
      formItems: [
        {
          field: 'name',
          label: '角色名',
          placeholder: '请输入用户名',
          type: 'input',
          itemType: 'text'
        },
        {
          field: 'intro',
          label: '角色介绍',
          placeholder: '请输入真实姓名',
          itemType: 'text',
          type: 'input'
        }
      ]
    }
    return modalFormConfig
  }
}
