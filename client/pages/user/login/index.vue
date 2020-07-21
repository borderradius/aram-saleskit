<template>
  <div class="flex items-center login-page">
    <div class="flex-1 bg-gray-100 h-screen login-left" />
    <div class="flex items-center w-380 h-screen shadow-xl">
      <div class="px-4 w-full">
        <ValidationObserver v-slot="{ handleSubmit }">
          <h1 class="uppercase text-center text-2xl text-main-green">
            sign in
          </h1>
          <form @submit.prevent="handleSubmit(login)">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|id"
              name="아이디"
            >
              <div class="login">
                <!-- <label for="아이디" class="label">아이디</label> -->
                <input
                  v-model="user.userLoginId"
                  type="text"
                  name="아이디"
                  class="login_label mb-4 mt-6"
                  placeholder="아이디를 입력해주세요."
                />
                <span class="validate-error text-sm text-pink-600">{{
                  errors[0]
                }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|password"
              name="비밀번호"
            >
              <div class="login">
                <!-- <label for="비밀번호" class="label">비밀번호</label> -->
                <input
                  v-model="user.userPassword"
                  type="password"
                  name="비밀번호"
                  class="login_label my-4"
                  placeholder="비밀번호를 입력해주세요."
                />
                <span class="validate-error text-sm text-pink-600">{{
                  errors[0]
                }}</span>
              </div>
            </ValidationProvider>
            <div class="btn-wrap clear-both mt-4">
              <Btn label="들어가기" mode="submit" />
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
      // TODO: 로그인 api 필요
    }
  }
}
</script>

<style lang="scss" scoped></style>
