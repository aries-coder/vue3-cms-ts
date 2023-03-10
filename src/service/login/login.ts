import alRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // /users/id
  LoginUserMenus = '/role/' // /role/id/menu
}

export const accountLoginRequest = (data: IAccount) => {
  return alRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data
  })
}

export const requestUserInfoById = (id: number) => {
  return alRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export const requestUserMenusByRoleId = (id: number) => {
  return alRequest.get<IDataType>({
    url: LoginAPI.LoginUserMenus + id + '/menu'
  })
}
