export const state = () => {
  return {
    searchList: ['search list'],
    recommendList: ['recommend list']
  }
}

export const mutations = {
  SET_SEARCH_LIST(state, payload) {
    state.searchList = payload
  },
  SET_RECOMMEND_LIST(state, payload) {
    state.searchList = payload
  }
}

export const actions = {
  setSearchList({ commit }, params = {}) {
    // TODO: 전집, 소전집에 따른 검색 데이터 가져오기
    console.log(params, '전집, 소전집에 따른 검색 데이터 가져오기')
    commit('SET_SEARCH_LIST', '결과값 넣기')
  },
  setRecommendList({ commit }, params = {}) {
    // TODO: 전집, 소전집에 따른 추천 데이터 가져오기
    console.log(params, '전집, 소전집에 따른 추천 데이터 가져오기')
    commit('SET_RECOMMEND_LIST', '결과값 넣기')
  }
}
