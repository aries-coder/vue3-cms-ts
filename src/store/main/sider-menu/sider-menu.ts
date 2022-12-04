import { Module } from 'vuex'

import { ISiderMenuState } from './type'
import { IRootState } from '../../type'

const siderMenuModule: Module<ISiderMenuState, IRootState> = {
  namespaced: true,
  state: () => ({
    isCollapsed: false
  }),
  mutations: {
    handleShowSiderMenuCollapsed(state) {
      state.isCollapsed = !state.isCollapsed
    }
  }
}

export default siderMenuModule
