export const state = () => {
  return {
    searchType: 'allbook',
    searchList: [],
    recommendList: []
  }
}

export const mutations = {
  SET_SEARCH_TYPE(state, payload) {
    state.searchType = payload
  },
  SET_SEARCH_LIST(state, payload) {
    state.searchList = payload
  },
  SET_RECOMMEND_LIST(state, payload) {
    state.recommendList = payload
  }
}

export const actions = {
  async setSearchList({ commit }, type = '') {
    // TODO: 전집, 소전집에 따른 검색 데이터 가져오기
    try {
      const { result } = await this.$axios.$get('/prod/brochure')
      commit('SET_SEARCH_LIST', result)
      commit('SET_SEARCH_TYPE', type)
    } catch (e) {
      console.log(e)
    }
  },
  async setRecommendList({ commit }, type = '') {
    // TODO: 전집, 소전집에 따른 추천 데이터 가져오기
    try {
      const apiUrl =
        type === 'allbook' ? '/prod/regularseries' : '/prod/miniseries'
      const { result } = await this.$axios.$get(apiUrl)
      commit('SET_RECOMMEND_LIST', result)
    } catch (e) {
      console.log(e)
    }
  }
}
