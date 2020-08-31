<template>
  <div class="survey flex items-center justify-center text-lg h-screen">
    <div class="flex items-center justify-center h-5/6 w-4/5">
      <h1
        class="text-xl absolute left-0 py-2 px-6 rounded-r-full title text-white"
      >
        어린이 선호도 앙케이트
      </h1>
      <div class="text-center">
        <p class="text-xl mb-8">
          자녀의 이름과 생년월일을 입력해주세요.
        </p>
        <ValidationObserver v-slot="{ handleSubmit, invalid }">
          <form class="" @submit.prevent="handleSubmit(goConsult)">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="이름"
              class="w-full"
            >
              <div class="start-form-wrap flex justify-center">
                <span class="label-title">이름</span>
                <input
                  v-model="consult.chldNm"
                  class="focus:outline-none"
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
              rules="required|birth"
              name="생년월일"
              class="w-full"
            >
              <div class="start-form-wrap flex justify-center">
                <span class="label-title">생년월일</span>
                <input
                  v-model="consult.chldBthYmd"
                  class="focus:outline-none"
                  type="text"
                  name="birth"
                  placeholder="예) 19940101"
                />
              </div>
              <span class="validate-error text-sm text-pink-600">{{
                errors[0]
              }}</span>
            </ValidationProvider>
            <button
              :class="[invalid ? 'disabled' : '']"
              class="btn button-info-start block text-center text-xl font-extrabold rounded-full"
            >
              다음
            </button>
          </form>
        </ValidationObserver>
      </div>
    </div>
    <n-link class="go-home" to="/">
      <img src="/go-home1.png" alt="메인으로가기 아이콘" />
    </n-link>
    <img src="/bi_blue.png" class="bookclub-logo2" />
    <!-- <span class="bookclub-logo">북클럽 이미지</span> -->
    <a href="javascript:;" class="go-back" @click="goBack">
      <img src="/go-back.png" alt="뒤로가기 아이콘" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: '',
      consult: {
        chldNm: '',
        chldBthYmd: ''
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    goConsult() {
      const params = {
        mblTelNum: this.$route.params.mblTelNum,
        orgmId: this.$route.params.orgmId,
        ...this.consult
      }

      this.$router.push({
        name: 'survey-select',
        params
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
