import { Module } from 'vuex'
import router from '@/router/index'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import cache from '@/utils/cache'
import { mapMenustoRoutes, mapMenusToPermissions } from '../../utils/map-menus'

import { ILoginState } from './type'
import { IRootState } from '../type'
import { IAccount } from '@/service/login/type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => ({
    token: cache.getCache('token') ?? '',
    userInfo: cache.getCache('userInfo') ?? {},
    userMenus: cache.getCache('userMenus') ?? [],
    permissions: []
  }),
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      // 动态生成路由
      const routes = mapMenustoRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 获取用户按钮权限
      const permissions = mapMenusToPermissions(userMenus)
      console.log(permissions)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      cache.setCache('token', token)
      commit('changeToken', token)

      // 2. 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      console.log(userInfoResult)
      cache.setCache('userinfo', userInfoResult.data)
      commit('changeUserInfo', userInfoResult.data)

      // 3. 请求用户菜单
      console.log(id, 'id')
      const userMenusResult = await requestUserMenusByRoleId(
        userInfoResult.data.role.id
      )
      console.log(userMenusResult, 'hhhhhh')
      cache.setCache('userMenus', userMenusResult.data)
      commit('changeUserMenus', userMenusResult.data)

      // 4. 跳转到首页
      router.replace('/main')
      window.$message.success('登陆成功')
    },
    loadLocalLogin({ commit }) {
      const token = cache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }

      const userInfo = cache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }

      const userMenus = cache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
