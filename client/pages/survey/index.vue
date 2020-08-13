<template>
  <div class="survey flex items-center justify-center text-lg">
    <div class="flex-initial h-5/6 w-4/5">
      <h1
        class="text-xl absolute left-0 p-1 px-6 rounded-r-full title text-white"
      >
        어린이 선호도 앙케이트
      </h1>
      <div class="private-agree-wrap flex p-2 bg-white rounded mt-24">
        <label for="privateAgree" class="flex mr-4 items-center">
          <input
            id="privateAgree"
            v-model="privateAgree"
            type="checkbox"
            class="form-checkbox h-5 w-5 text-main-green"
          /><span class="ml-2 text-gray-700 text-sm"
            >개인정보 수집 및 마케팅 정보 활용 동의서</span
          >
        </label>
        <button class="flex text-xs text-gray-500" @click="show">
          [ 약관내용 상세보기 ]
        </button>
        <!-- <a href="javascript:;" class="flex text-xs text-gray-500"
          ></a
        > -->
      </div>
      <div
        class="p-2 relative mx-auto text-gray-600 search-wrap rounded-lg mt-4"
      >
        <form class="flex items-center justify-between pr-8">
          <span class="text-gray-700 flex-auto px-10 search-label">상담자</span>
          <ValidationProvider
            ref="orgmId"
            v-slot="{ errors }"
            rules="required"
            name="상담자"
            class="flex-auto w-4/6"
          >
            <div class="flex w-full">
              <select
                v-model="orgmId"
                name="상담자"
                class="bg-white h-full p-1 text-sm focus:outline-none text-lg inline-block rounded-lg w-full"
              >
                <option value="">상담자를 선택</option>
                <option
                  v-for="item in orgmList"
                  :key="item.orgmId"
                  :value="item.orgmId"
                  >{{ item.orgmNm }}</option
                >
              </select>
            </div>
            <span class="validate-error text-sm text-pink-600">{{
              errors[0]
            }}</span>
          </ValidationProvider>
        </form>
      </div>
      <div
        class="p-2 relative mx-auto text-gray-600 search-wrap rounded-lg mt-4"
      >
        <ValidationObserver v-slot="{ handleSubmit }">
          <form
            class="flex items-center justify-between"
            @submit.prevent="handleSubmit(getConsultList)"
          >
            <span class="text-gray-700 flex-auto px-10 search-label"
              >앙케이트 참여 상담 &middot; 내역</span
            >
            <ValidationProvider
              ref="provider"
              v-slot="{ errors }"
              rules="numeric|mobile|required"
              name="검색어"
              class="flex-auto w-4/6"
            >
              <div class="flex w-full">
                <input
                  v-model="mblTelNum"
                  class="bg-white h-10 px-5 text-sm focus:outline-none text-2xl inline-block search-input w-4/5"
                  type="search"
                  name="search"
                  placeholder="전화번호를 입력해주세요."
                />

                <button
                  type="submit"
                  class="search-btn border text-center search-btn text-white px-5 h-10 inline-block"
                >
                  검색
                </button>
              </div>
              <span class="validate-error text-sm text-pink-600">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </form>
        </ValidationObserver>
      </div>
      <div class="bg-white mt-4">
        <div v-if="!tBody.length" class="border border-1 h-5p py-20 rounded-lg">
          <p class="text-gray-600 text-center">
            {{ noDataSentence }}
          </p>
        </div>
        <div v-if="tBody.length" class="table w-full">
          <ul class="thead flex">
            <li class="flex-auto">#</li>
            <li class="flex-auto">자녀이름</li>
            <li class="flex">전화번호</li>
            <li class="flex">생년월일</li>
            <li class="flex">나이</li>
            <li class="flex">상담일자</li>
          </ul>
          <ul
            v-for="(item, index) in tBody"
            :key="index"
            class="tbody flex"
            @click="rowClick(item)"
          >
            <li class="flex-auto">{{ item.cnslNo }}</li>
            <li class="flex-auto">{{ item.chldNm }}</li>
            <li class="flex">{{ item.mblTelNum }}</li>
            <li class="flex">{{ item.chldBthYmd }}</li>
            <li class="flex">{{ item.ageNm }}</li>
            <li class="flex">{{ item.cnslDttm | dateformat }}</li>
          </ul>
        </div>
      </div>
      <button
        class="btn button-info w-4/6 block text-center mt-8 text-xl font-extrabold m-auto rounded-full"
        @click="goSurveyStart"
      >
        앙케이트 시작하기
      </button>
      <!-- <n-link
        to="/survey/start"
        class="btn button-info w-4/6 block text-center mt-8 text-xl font-extrabold m-auto rounded-full"
        >앙케이트 시작하기</n-link
      > -->
      <n-link class="go-home" to="/">
        <img src="/go-home1.png" alt="메인으로가기 아이콘" />
      </n-link>
      <span class="bookclub-logo">북클럽 이미지</span>
    </div>
    <modal name="agree" width="100%" height="auto" scrollable>
      <div class="agree-wrap">
        <img src="/private-agree.jpg" alt="약관내용 이미지" />
        <button class="agree-close" @click="hide">
          <img src="/btn_close.png" alt="약관팝업창 닫기버튼" />
        </button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  filters: {
    dateformat(value) {
      return value.substring(0, 10)
    }
  },
  data() {
    return {
      privateAgree: false,
      mblTelNum: '',
      orgmId: '',
      orgmList: [],
      tBody: [],
      tHeader: [
        { title: '#' },
        { title: '자녀이름' },
        { title: '휴대폰번호' },
        { title: '생년월일' },
        { title: '나이' },
        { title: '상담일' }
      ],
      noDataSentence: '고객님의 휴대폰 번호를 입력 후, 검색 버튼을 눌러주세요.'
    }
  },
  async mounted() {
    // const a = [1, 2, 3, { a: 'a' }]
    // const b = this._.cloneDeep(a)
    // console.log(b)
    this.orgmList = await this.getOrgm()
  },
  methods: {
    /**
     * 상담자 리스트 가져오기
     */
    async getOrgm() {
      try {
        const { result } = await this.$axios.$get('/auth/orgm')
        return result
      } catch (e) {
        console.log(e)
      }
    },
    /**
     * 앙케이트 전 자식이름, 생년월일 입력페이지 이동
     */
    async goSurveyStart() {
      const { valid } = await this.$refs.provider.validate()
      const orgmId = await this.$refs.orgmId.validate()
      if (!valid) {
        alert('전화번호를 올바르게 입력해주세요')
        return
      }
      if (!orgmId.valid) {
        alert('상담자를 선택해주세요')
        return
      }
      if (valid && orgmId.valid) {
        this.$router.push({
          name: 'survey-start',
          params: {
            mblTelNum: this.mblTelNum,
            orgmId: this.orgmId
          }
        })
      }
    },
    rowClick(params) {
      const item = {
        orgmId: this.orgmId,
        ...params
      }
      if (this.orgmId) {
        this.$router.push({
          name: 'survey-result-detail',
          params: {
            ...item
          }
        })
      } else {
        alert('상담자를 선택해주세요.')
      }
    },
    async getConsultList() {
      try {
        const { result } = await this.$axios.$get(
          `/recipient/${this.mblTelNum}/counsel`
        )
        this.tBody = result
        if (!result.length) {
          this.noDataSentence = '검색하신 핸드폰으로 상담했던 이력이 없습니다.'
        }
      } catch (e) {
        console.log(e)
      }
    },
    show() {
      this.$modal.show('agree')
    },
    hide() {
      this.$modal.hide('agree')
    }
  }
}
</script>

<style lang="scss" scoped>
.search-result-table tbody {
  display: block;
  width: 100%;
  overflow: auto;
}
.search-result-table tbody tr,
.search-result-table thead tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
</style>
