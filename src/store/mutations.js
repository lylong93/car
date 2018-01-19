const mutations = {
  change(state, data) {
    state.name = data
  },
  clean(state) {
    state.name = null
  }
}
export default mutations
