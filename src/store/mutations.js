const mutations = {
  change(state, data) {
    state.name = data
  },
  clean(state) {
    state.name = null
  },
  addCollect(state, data) {
    state.collect.push(data)
  }
}
export default mutations
