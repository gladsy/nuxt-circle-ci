export const state = () => ({
  count: 10
})

export const getters = {
  getCountGetter: state => state.count
}

export const mutations = {
  increment(state) {
    state.count++
  }
}

export const actions = {
  writeHoge({ commit }) {
    commit(`increment`)
  }
}
