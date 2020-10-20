export const state = () => {
  return {
    searchType: 'allbook',
    searchList: [],
    // recommendList: [],
    prfdRcmdList: [],
    notPrfdRcmdList: [],
    isFull: false
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
    // state.recommendList = payload
    state.notPrfdRcmdList = payload.rcmdProdList.notPrfdRcmdList
    state.prfdRcmdList = payload.rcmdProdList.prfdRcmdList
  },
  SET_FULLSCREEN(state, payload) {
    // console.log('뮤테이션 : ', payload)
    state.isFull = payload
    // if (!payload) {
    //   state.isFull = payload
    // } else {
    //   state.isFull = !state.isFull
    // }
    // console.log(state.isFull)
    // if (!payload) {
    //   state.isFull = payload
    // } else {
    //   state.isFull = true
    // }
  }
}

export const actions = {
  async setSearchList({ commit }, params = {}) {
    const { type, search } = params
    let apiUrl
    if (type === 'allbook') apiUrl = '/prod/regularseries'
    if (type === 'smallbook') apiUrl = '/prod/miniseries'
    if (type === 'brosure') apiUrl = '/prod/brochure'
    try {
      const { result } = await this.$axios.$get(apiUrl, { params: search })
      commit('SET_SEARCH_LIST', result)
      commit('SET_SEARCH_TYPE', type)
    } catch (e) {
      console.log(e)
    }
  },
  async setRecommendList({ commit }, params = {}) {
    console.warn('상세 -> 추천 파라미터 : ', params)
    if (params.type === 'allbook') {
      try {
        const { result } = await this.$axios.$get('/counsel/rcmdProdList', {
          params: {
            chldId: params.chldId,
            cnslPtclSeqno: params.cnslPtclSeqno,
            cstpMngrSeqno: params.cstpMngrSeqno
          }
        })
        commit('SET_RECOMMEND_LIST', result)
      } catch (e) {
        console.log(e)
      }
    } else {
      try {
        const { result } = await this.$axios.$get(
          `/recipient/counsel/${params.cnslPtclSeqno}/recommandprod/miniseries`
        )
        commit('SET_RECOMMEND_LIST', result)
      } catch (e) {
        console.log(e)
      }
    }
    // try {
    //   const apiUrl =
    //     params.type === 'allbook'
    //       ? `/recipient/counsel/${params.cnslPtclSeqno}/recommandprod/regularseries`
    //       : `/recipient/counsel/${params.cnslPtclSeqno}/recommandprod/miniseries`
    //   const { result } = await this.$axios.$get(apiUrl)
    //   commit('SET_RECOMMEND_LIST', result)
    // } catch (e) {
    //   console.log(e)
    // }
  },
  setFullScreen({ commit }, isFull = false) {
    console.log('액션 실행됌')
    commit('SET_FULLSCREEN', isFull)
  }
}
