export interface ITheadItem {
  title?: string | number
  key?: string | number
  align?: string
  type?: string
  width?: number
  ellipsis?: any
  render?: (row: any) => any
}
