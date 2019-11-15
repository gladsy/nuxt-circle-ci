export const state = () => ({
  hogeFormStore: `Hello, Vuex!`
})

export const getters = {
  hogeGetters: state => state.hogeFormStore
}

export const mutations = {
  setHogeFormState(state, payload) {
    state.hogeFormStore = payload
  }
}

export const actions = {
  writeHoge({ commit }, message) {
    commit(`setHogeFormState`, message)
  }
}
