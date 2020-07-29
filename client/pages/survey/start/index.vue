<template>
  <div class="survey flex items-center justify-center text-lg">
    <div class="flex-initial h-5/6 w-4/5">
      <h1
        class="text-2xl absolute left-0 p-3 px-6 rounded-r-full title text-white"
      >
        어린이 선호도 앙케이트
      </h1>
      <div class="text-center">
        <p class="text-xl mb-8">
          선호도를 알고 싶은 자녀의 이름과 생년월일을 입력해주세요.
        </p>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="" @submit.prevent="handleSubmit(login)">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="이름"
              class="w-full"
            >
              <div class="start-form-wrap flex justify-center">
                <span class="label-title">이름</span>
                <input
                  v-model="searchWord"
                  class="bg-white h-10 px-5 text-sm focus:outline-none text-xl inline-block"
                  type="text"
                  name="name"
                  placeholder="자녀의 이름을 입력해주세요."
                />
              </div>
              <span class="validate-error text-sm text-pink-600">{{
                errors[0]
              }}</span>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="생년월일"
              class="w-full"
            >
              <div class="start-form-wrap flex justify-center">
                <span class="label-title">생년월일</span>
                <input
                  v-model="searchWord"
                  class="bg-white h-10 px-5 text-sm focus:outline-none text-xl inline-block"
                  type="text"
                  name="birth"
                  placeholder="YYYY-MM-DD"
                />
              </div>
              <span class="validate-error text-sm text-pink-600">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </form>
        </ValidationObserver>
      </div>
      <n-link
        to="/survey/select"
        class="btn button-info w-3/6 block text-center mt-20 text-xl font-extrabold m-auto rounded-full"
        >다음</n-link
      >
    </div>
    <n-link class="go-home" to="/">home</n-link>
    <span class="bookclub-logo">북클럽 이미지</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
