import { ILoginState } from './login/type'
import { ISiderMenuState } from './main/sider-menu/type'
import { ISystemState } from './main/system/type'

export interface IRootState {
  showDialogKey: boolean
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  loginModule: ILoginState
  siderMenuModule: ISiderMenuState
  systemModule: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
