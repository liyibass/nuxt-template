import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  list: [
    {
      id: 0,
      name: 'LIYI',
    },
  ],
})

export type DiagramState = ReturnType<typeof state>

export const getters: GetterTree<DiagramState, DiagramState> = {
  getMemberList(state) {
    return state.list
  },
}

export const mutations: MutationTree<DiagramState> = {
  // toggleBarDisplay(state, targetBar: number) {
  //   switch (targetBar) {
  //     default:
  //     case 1:
  //       state.showBar1 = !state.showBar1
  //       break
  //     case 2:
  //       state.showBar2 = !state.showBar2
  //       break
  //     case 3:
  //       state.showBar3 = !state.showBar3
  //       break
  //   }
  // },
}

export const actions: ActionTree<DiagramState, DiagramState> = {
  // TOGGLE_BAR_DISPLAY({ commit }, targetBar: number) {
  //   commit('toggleBarDisplay', targetBar)
  // },
}
