export default (ctx, inject) => {
  /**
   * * API 요청시
   */
  ctx.$axios.onRequest(({ url }) => {
    console.log(`Make request to ${url}`)
  })
  /**
   * * API 응답시
   */
  ctx.$axios.onResponse(({ data }) => {})
  /**
   * * API 에러시
   */
  ctx.$axios.onError((e) => {
    const { response } = e
    if (!response.data.ok && response.data.errorState.code === 401) {
      alert('토큰 기간이 만료되었습니다. 다시 로그인해주세요.')
      ctx.store.dispatch('user/logout')
      ctx.redirect({ name: 'user-login' })
    }
  })
  // $axios.onResponse(({ status, data }) => ({
  //   ok: true,
  //   status,
  //   data,
  //   error: { code: '', message: '' }
  // }))
  //   $axios.onError((e) => {
  //     const { message, request, response } = e
  //     const result = {
  //       ok: false,
  //       status: 500,
  //       error: { code: '', message },
  //       data: null
  //     }
  //     if (response && Object.prototype.hasOwnProperty.call(response, 'data')) {
  //       result.status = response.status
  //       if (response.data instanceof Object) {
  //         if (Object.prototype.hasOwnProperty.call(response.data, 'errorState')) {
  //           result.error = response.data.errorState
  //         } else {
  //           result.error.message = response.data.message
  //         }
  //         result.data = response.data
  //       }
  //       if (result.status === 405) {
  //         result.error.message = `서버와 통신하는데 오류가 발생했습니다.<br />고객센터에 문의해주세요.<br /><br />에러코드: ${result.status}`
  //       }
  //     } else if (request) {
  //       result.status = request.status
  //       result.error.code = result.status
  //     }
  //     console.error(
  //       `[${result.error.code || result.status}] ${result.error.message}`
  //     )
  //     return Promise.reject(result)
  //   })
}
