import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './type'

import loginModule from './login/login'
import siderMenuModule from './main/sider-menu/sider-menu'
import systemModule from './main/system/system'
import cache from '@/utils/cache'

import { getPageListData } from '@/service/main/system/system'
import router from '@/router'

const store = createStore<IRootState>({
  state: () => ({
    showDialogKey: false,
    entireDepartment: [],
    entireRole: [],
    entireMenu: []
  }),
  getters: {},
  mutations: {
    changeShowDialogKey(state) {
      state.showDialogKey = !state.showDialogKey
    },
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  actions: {
    logoutAction() {
      cache.clearCache()
      router.replace('/login')
      setTimeout(() => {
        location.reload()
      }, 100)
    },
    async getInitailDataAction({ commit }) {
      const { list: departmentList } = (
        await getPageListData('/department/list', {
          offset: 0,
          size: 100
        })
      ).data
      const { list: roleList } = (
        await getPageListData('/role/list', {
          offset: 0,
          size: 100
        })
      ).data
      const { list: menuList } = (
        await getPageListData('/menu/list', {
          offset: 0,
          size: 100
        })
      ).data

      commit('changeEntireMenu', menuList)
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    loginModule,
    siderMenuModule,
    systemModule
  }
})

export function setStore() {
  console.log(location.hash)
  if (location.hash !== '#/login' && location.hash !== '#/') {
    store.dispatch('loginModule/loadLocalLogin')
    store.dispatch('getInitailDataAction')
  }
}

// export const useStore = (): Store<IStoreType> => useVuexStore()
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
