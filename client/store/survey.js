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
    // TODO: 앙케이트 결과 저장하기
    commit('SET_SURVEY_RESULT', params)
  }
}
