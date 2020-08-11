<template>
  <div class="flex items-center login-page">
    <div class="bg-gray-100 h-screen re-height login-left">
      <!-- <img src="/login_img.jpg" alt="배경이미지" /> -->
    </div>
    <div class="flex items-center h-screen re-height shadow-xl login-right">
      <div class="px-10 w-full">
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
                <input
                  v-model="user.orgLoginId"
                  type="text"
                  name="아이디"
                  class="login_label mb-4 mt-6"
                  placeholder="ERP아이디 입력"
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
                <input
                  v-model="user.orgPassword"
                  type="password"
                  name="비밀번호"
                  class="login_label my-4"
                  placeholder="비밀번호 입력"
                />
                <span class="validate-error text-sm text-pink-600">{{
                  errors[0]
                }}</span>
              </div>
            </ValidationProvider>
            <div class="btn-wrap clear-both mt-4 ">
              <Btn label="들어가기" mode="submit" class="signin-btn" />
            </div>
            <div class="flex mt-4">
              <label class="inline-flex items-center mt-3 mr-4">
                <!-- <input
                  v-model="saveId"
                  type="checkbox"
                  class="form-checkbox text-main-green"
                /><span class="ml-2 text-gray-700">아이디 저장</span> -->
                <input
                  v-model="saveId"
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-main-green"
                /><span class="ml-2 text-gray-700">아이디 저장</span>
              </label>
              <label class="inline-flex items-center mt-3">
                <input
                  v-model="savePw"
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-main-green"
                /><span class="ml-2 text-gray-700">비밀번호 저장</span>
              </label>
            </div>
          </form>
        </ValidationObserver>
      </div>
      <modal name="account-not-match">
        <div class="alert-content">
          <p class="mt-6">입력하신 아이디 또는 비밀번호가</p>
          <p>일치하지 않습니다.</p>
          <br />
          <p>확인 후 다시 입력바랍니다.</p>
        </div>
        <a
          href="javascript:;"
          class="w-full btn block absolute bottom-0 text-center modal-close"
          @click="hide"
          >확인</a
        >
      </modal>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'clear',
  data() {
    return {
      user: {
        orgLoginId: 'asdfsafsd',
        orgPassword: 'sdfsfdsfasd'
      },
      saveId: false,
      savePw: false
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      const reHeight = document.getElementsByClassName('re-height')
      for (const item of reHeight) {
        item.style.height = `${screen.height}px`
      }
    })
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('user/login', this.user)
        this.$router.push('/')
      } catch (e) {
        console.log(e)
        this.show()
      }
    },
    show() {
      this.$modal.show('account-not-match')
    },
    hide() {
      this.$modal.hide('account-not-match')
    }
  }
}
</script>

<style lang="scss" scoped></style>
