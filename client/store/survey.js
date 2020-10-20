export const state = () => {
  return {
    surveyResult: {},
    surveyDetail: {}
  }
}

export const mutations = {
  SET_SURVEY_RESULT(state, payload) {
    state.surveyResult = payload
  },
  SET_SURVEY_DETAIL(state, payload) {
    state.surveyRDetail = payload
  }
}

export const actions = {
  setSurveyResult({ commit }, params = {}) {
    commit('SET_SURVEY_RESULT', params)
  },
  setSurveyDetail({ commit }, params = {}) {
    commit('SET_SURVEY_DETAIL', params)
  }
}
