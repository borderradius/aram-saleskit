<template>
  <div>
    <h1>Login</h1>
    <div>
      <div>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(login)">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|id"
              name="아이디"
            >
              <div class="login">
                <label for="아이디" class="label">아이디</label>
                <input
                  v-model="user.userLoginId"
                  type="text"
                  name="아이디"
                  class="login_label"
                  placeholder="아이디를 입력해주세요."
                />
                <span class="validate-error mb-3">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|password"
              name="비밀번호"
            >
              <div class="login">
                <label for="비밀번호" class="label">비밀번호</label>
                <input
                  v-model="user.userPassword"
                  type="password"
                  name="비밀번호"
                  class="login_label"
                  placeholder="비밀번호를 입력해주세요."
                />
                <span class="validate-error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <div class="btn-wrap clear-both">
              <Btn label="로그인" size="sm" mode="submit" />
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'clear',
  data() {
    return {
      user: {
        userLoginId: '',
        userPassword: ''
      }
    }
  },
  methods: {
    login() {
      console.log('로그인 api 필요')
    }
  }
}
</script>

<style lang="scss" scoped></style>
