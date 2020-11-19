export const actions = {
  // async signup(user) {
  //   const data = await this.$axios.post('/user/regist', user)
  //   return data.success
  // },
  login(context, user) {
    // this.$auth.login({ data: user }).then(({ data }) => {
    //   this.$auth.setToken('local11', data.orgmToken)
    // })
    return this.$auth.loginWith('local', {
      data: user
    })
  },
  fetchUser() {
    return this.$auth.fetchUser()
  },
  logout() {
    return this.$auth.logout()
  }
}
