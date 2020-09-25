export const state = () => {
  return {
    orgmList: []
  }
}

export const mutations = {
  SET_ORGMLIST(state, payload) {
    state.orgmList = payload
  }
}

export const actions = {
  async setOrgmList({ commit }) {
    try {
      const { result } = await this.$axios.$get('/auth/orgm')
      commit('SET_ORGMLIST', result)
    } catch (e) {
      console.log(e)
    }
  }
}
