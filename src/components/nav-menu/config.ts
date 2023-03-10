import { h, Component } from 'vue'
import { RouterLink } from 'vue-router'
import { NIcon } from 'naive-ui'

import type { IMenuItem, IMenuItemChildren } from './type'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export const initMenuOption = (menus: any, icons: any) => {
  const menuOptions: any[] = []
  menus.forEach((item: any, index: number) => {
    const menu: IMenuItem = {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: ''
            }
          },
          { default: () => item.name }
        ),
      key: item.name,
      icon: renderIcon(icons[index]),
      children: []
    }

    const initMenuItemChildren = (itemChildren: any) => {
      const itemChildrenOption: any[] = []
      for (const i of itemChildren) {
        const children: IMenuItemChildren = {
          type: 'group',
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  path: i.url
                }
              },
              { default: () => i.name }
            ),
          key: i.name
        }
        itemChildrenOption.push(children)
      }
      if (itemChildren.children) {
        initMenuItemChildren(itemChildren.children)
      }

      return itemChildrenOption
    }
    if (item.children) {
      menu.children = initMenuItemChildren(item.children)
    }
    menuOptions.push(menu)
  })
  return menuOptions
}
