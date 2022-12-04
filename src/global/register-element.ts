import { App } from 'vue'
import {
  create,
  NButton,
  NLoadingBarProvider,
  NTabs,
  NTabPane,
  NForm,
  NFormItem,
  NInput,
  NSelect,
  NDatePicker,
  NCard,
  NMessageProvider,
  NCheckbox,
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NMenu,
  NIcon,
  NConfigProvider,
  NResult,
  NBreadcrumb,
  NBreadcrumbItem,
  NDropdown,
  NAvatar,
  NGrid,
  NGridItem,
  NDataTable,
  NDialogProvider,
  NTree
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NLoadingBarProvider,
    NTabs,
    NTabPane,
    NForm,
    NFormItem,
    NInput,
    NSelect,
    NDatePicker,
    NCard,
    NMessageProvider,
    NCheckbox,
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NMenu,
    NIcon,
    NConfigProvider,
    NResult,
    NBreadcrumb,
    NBreadcrumbItem,
    NDropdown,
    NAvatar,
    NGrid,
    NGridItem,
    NDataTable,
    NDialogProvider,
    NTree
  ]
})

export default function registerElement(app: App) {
  app.use(naive)
}
