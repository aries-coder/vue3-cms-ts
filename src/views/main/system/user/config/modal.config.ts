import { IForm } from '@/base-ui/form'

export function initModalFormConfigFn(type: string = 'new') {
  if (type === 'new') {
    const modalFormConfig: IForm = {
      labelWidth: '100px',
      formItems: [
        {
          field: 'name',
          label: '用户名',
          placeholder: '请输入用户名',
          type: 'input',
          itemType: 'text'
        },
        {
          field: 'realname',
          label: '真实姓名',
          placeholder: '请输入真实姓名',
          itemType: 'text',
          type: 'input'
        },
        {
          field: 'password',
          label: '用户密码',
          placeholder: '请输入用户密码',
          itemType: 'password',
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
          field: 'departmentId',
          label: '选择部门',
          placeholder: '请选择部门',
          itemType: 'group',
          type: 'select',
          options: []
        },
        {
          field: 'roleId',
          label: '选择角色',
          placeholder: '请选择角色',
          itemType: 'group',
          type: 'select',
          options: []
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
          label: '用户名',
          placeholder: '请输入用户名',
          type: 'input',
          itemType: 'text'
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
          field: 'departmentId',
          label: '选择部门',
          placeholder: '请选择部门',
          itemType: 'group',
          type: 'select',
          options: []
        },
        {
          field: 'roleId',
          label: '选择角色',
          placeholder: '请选择角色',
          itemType: 'group',
          type: 'select',
          options: []
        }
      ]
    }
    return modalFormConfig
  }
}
