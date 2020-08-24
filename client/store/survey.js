export const state = () => {
  return {
    surveyResult: {}
  }
}

export const mutations = {
  SET_SURVEY_RESULT(state, payload) {
    state.surveyResult = payload
  }
}

export const actions = {
  setSurveyResult({ commit }, params = {}) {
    commit('SET_SURVEY_RESULT', params)
  }
}
