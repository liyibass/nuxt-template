import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  isNavbarOn: false,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isNavbarOn(state) {
    return state.isNavbarOn
  },
}

export const mutations: MutationTree<RootState> = {
  setNavbarStatus(state, newNavbarStatus: boolean | undefined) {
    if (typeof newNavbarStatus === 'undefined') {
      // toggle
      state.isNavbarOn = !state.isNavbarOn
    } else {
      state.isNavbarOn = newNavbarStatus
    }
  },
}

export const actions: ActionTree<RootState, RootState> = {
  SET_NAVBAR_STATUS({ commit }, newNavbarStatus: boolean | undefined) {
    commit('setNavbarStatus', newNavbarStatus)
  },
  NAVBAR_TOGGLE({ commit }) {
    commit('setNavbarStatus')
  },
}
