import type { VNode } from 'vue'

export interface IMenuItem {
  label: () => VNode
  key: string | number
  icon: () => VNode
  children?: any[]
}

export interface IMenuItemChildren {
  type: string
  label: () => VNode
  key: string | number
  children?: any[]
}
