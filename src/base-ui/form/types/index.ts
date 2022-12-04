type IFormType = 'input' | 'select' | 'datePicker'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  placeholder?: string
  itemType?: string
  options?: any[]
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
}
