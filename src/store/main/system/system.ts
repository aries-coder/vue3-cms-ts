import { Module } from 'vuex'
import { ISystemState } from './type'
import { IRootState } from '../../type'
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => ({
    userList: [],
    userCount: 10,
    roleList: [],
    roleCount: 10,
    goodsList: [],
    goodsCount: 10,
    menuList: [],
    menuCount: 10
  }),
  getters: {
    pageListData(state) {
      console.log('hello')

      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userList
            break
          case 'role':
            return state.roleList
            break
          case 'goods':
            return state.goodsList
            break
          case 'menu':
            return state.menuList
          default:
            break
        }
      }
    }
  },
  mutations: {
    changeUserList(state, userList) {
      state.userList = userList
    },
    changeUserCount(state, userCount) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount) {
      state.menuCount = menuCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const { pageName, queryInfo } = payload
      const pageUrl = `/${pageName}/list`
      const pageResult = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = pageResult.data

      switch (pageName) {
        case 'users':
          commit('changeUserList', list)
          commit('changeUserCount', totalCount)
          break
        case 'role':
          commit('changeRoleList', list)
          commit('changeRoleCount', totalCount)
          break
        case 'goods':
          commit('changeGoodsList', list)
          commit('changeGoodsCount', totalCount)
          break
        case 'menu':
          commit('changeMenuList', list)
          commit('changeMenuCount', totalCount)
      }
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      const { pageName, id, queryInfo } = payload
      const pageUrl = `/${pageName}/${id}`
      const result = await deletePageData(pageUrl)

      window.$message.info(result.data)

      dispatch('getPageListAction', {
        pageName,
        queryInfo
      })
    },
    async createPageDataAction({ dispatch }, payload) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      const result = await createPageData(pageUrl, newData)
      window.$message.info(result.data)

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      const result = await editPageData(pageUrl, editData)
      window.$message.info(result.data)

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
