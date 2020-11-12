export default (context) => {
  const { store, route, redirect } = context
  // const { redirect, route } = context
  // if (route.path === '/' || route.path !== '/pause') {
  //   console.log(route.path)
  //   redirect('/pause')
  // }
  const isLoggedIn = store.state.auth.loggedIn
  // console.warn('미들웨어다!!!! - 여기에서 토큰체크해서 상했으면 새로 받아올 것')
  /**
   * * 가로모드 체크
   */
  const isLandscape = window.matchMedia('(orientation: landscape)').matches
  if (!isLandscape) {
    alert('해당 웹사이트는 가로모드에 최적화 되어있습니다.')
  }
  /**
   * * 로그인 안되어있을때 로그인페이지로 이동
   */
  if (!isLoggedIn && route.path === '/') {
    alert('로그인이 필요합니다.')
    redirect('/login')
  }
  /**
   * * LNB 메뉴 데이터 가져오기
   */
  // if (isLoggedIn && store.state.menu.lnbData.length === 0) {
  //   await store.dispatch('menu/getLnb', {
  //     sysAuthCd: store.state.auth.user.sysAuthCd
  //   })
  // }

  /**
   * * 로컬스토리지에서 토큰정보 가져오기
   */
  // console.warn('router - info ::: ', localStorage)
}
