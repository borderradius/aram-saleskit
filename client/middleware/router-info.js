export default ({ store, route, redirect }) => {
  const isLoggedIn = store.state.auth.loggedIn

  // console.warn('isLoggedin ? ', isLoggedIn)
  /**
   * * 로그인 안되어있을때 로그인페이지로 이동
   */
  if (!isLoggedIn && route.path === '/') {
    alert('로그인이 필요합니다.')
    redirect('/user/login')
  }
  /**
   * * LNB 메뉴 데이터 가져오기
   */
  // if (isLoggedIn && store.state.menu.lnbData.length === 0) {
  //   await store.dispatch('menu/getLnb', {
  //     sysAuthCd: store.state.auth.user.sysAuthCd
  //   })
  // }
}
