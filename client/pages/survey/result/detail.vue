<template>
  <div class="survey-result min-h-screen flex justify-center">
    <h1
      class="text-2xl absolute left-0 p-3 px-6 rounded-r-full title text-white"
    >
      어린이 선호도 앙케이트
    </h1>
    <div class="flex-initial h-5/6 w-4/5 mt-24">
      <p class="report-subject">
        앙케이트 결과 REPORT
        <small>이아람 / 2020-07-01</small>
      </p>
      <div class="report-content1">
        <h2 class="mb-4">1. 우리아이 선호 영역</h2>
        <ul class="flex flex-row flex-wrap justify-between">
          <li
            v-for="item in detail.cnslResult"
            :key="item.asctEduCoursNm"
            :class="[item.isBest ? 'best' : '']"
          >
            <div class="img-wrap">
              <img :src="item.ansrImgUrl" :alt="item.asctEduCoursNm" />
            </div>
            <div class="text-wrap flex justify-between items-center mt-2">
              <span>{{ item.asctEduCoursNm }}</span>
              <span class="score">{{ item.asctEduCoursChoNcnt }}점</span>
            </div>
          </li>
          <!-- <li class="best">
            <div class="img-wrap">
              <img src="/sk_a_1.png" alt="앙케이트이미지" />
            </div>
            <div class="text-wrap flex justify-between items-center mt-2">
              <span>I. 기본 생활 영역</span>
              <span class="score">1점</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="/sk_b_4.png" alt="앙케이트이미지" />
            </div>
            <div class="text-wrap flex justify-between items-center mt-2">
              <span>II. 신체 운동 영역</span>
              <span class="score">1점</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="/sk_f_3.png" alt="앙케이트이미지" />
            </div>
            <div class="text-wrap flex justify-between items-center mt-2">
              <span>III. 의사 소통 영역</span>
              <span class="score">1점</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="/sk_c_3.png" alt="앙케이트이미지" />
            </div>
            <div class="text-wrap flex justify-between items-center mt-2">
              <span>IV. 사회 관계 영역</span>
              <span class="score">1점</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="/sk_d_1.png" alt="앙케이트이미지" />
            </div>
            <div class="text-wrap flex justify-between items-center mt-2">
              <span>V. 예술 경험 영역</span>
              <span class="score">1점</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="/sk_e_3.png" alt="앙케이트이미지" />
            </div>
            <div class="text-wrap flex justify-between items-center mt-2">
              <span>VI. 자연 탐구 영역</span>
              <span class="score">1점</span>
            </div>
          </li> -->
        </ul>
      </div>
      <div class="report-content2 mt-4 pb-2">
        <h2 class="mb-4">2. 학습 계통도</h2>
        <div class="system-chart">
          <ul class="first flex">
            <li class="flex-1 text-center">표준보육과정<br />(0세~2세)</li>
            <li class="flex-1 text-center">누리과정<br />(3세~5세)</li>
            <li class="flex-1 text-center">초등교과<br />(저학년)</li>
            <li class="flex-1 text-center">초등교과<br />(고학년)</li>
          </ul>
          <ul class="second flex mt-6">
            <li class="flex-1 text-center">의사소통</li>
            <li class="flex-1 text-center">의사소통</li>
            <li class="flex-1 text-center">국어</li>
            <li class="flex-1 text-center">
              <div class="system-chart-child on">영어</div>
              <div class="system-chart-child">국어</div>
            </li>
          </ul>
          <ul class="third flex mt-6">
            <li class="flex-1 text-center">자연탐구</li>
            <li class="flex-1 text-center">자연탐구</li>
            <li class="flex-1 text-center">
              <div class="system-chart-child">슬기로운 생활</div>
              <div class="system-chart-child">바른생활</div>
            </li>
            <li class="flex-1 text-center">
              <div class="system-chart-child">사회</div>
              <div class="system-chart-child">도덕</div>
            </li>
          </ul>
          <ul class="second flex mt-6">
            <li class="flex-1 text-center">예술경험</li>
            <li class="flex-1 text-center">예술경험</li>
            <li class="flex-1 text-center">즐거운 생활</li>
            <li class="flex-1 text-center">
              <div class="system-chart-child">미술</div>
              <div class="system-chart-child">음악</div>
            </li>
          </ul>
          <ul class="fifth flex mt-6">
            <li class="flex-1 text-center">
              <div class="system-chart-child">기본생활</div>
              <div class="system-chart-child">신체운동</div>
            </li>
            <li class="flex-1 text-center">신체운동 및 건강</li>
            <li class="flex-1 text-center">안전</li>
            <li class="flex-1 text-center">체육</li>
          </ul>
        </div>
      </div>
      <div class="report-content3 mt-4">
        <h2 class="mb-4">3. 추천 결과</h2>
        <div class="recommend-result pb-10">
          <div class="allbook-recommend-result">
            <div class="recommend-title flex justify-between p-4 items-center">
              <span class="text-md">
                <img
                  src="/allbook-off-ico.png"
                  alt="전집아이콘"
                  class="inline-block -mt-1 mr-2"
                />
                전집 &amp; 디지털 콘텐츠</span
              >
              <a
                href="javascript:;"
                class="all-view-btn text-white rounded-full px-4 py-2 text-sm"
                @click="goAllView('allbook')"
              >
                모두보기
                <font-awesome-icon
                  :icon="['fas', 'chevron-right']"
                  class="chevron-right ml-1"
                />
              </a>
            </div>
            <ul class="flex p-4">
              <li
                v-for="item in detail.rcmdProdList.rglrSrsRcmdProdList"
                :key="item.prodId"
              >
                <div class="img-wrap relative">
                  <!-- <img src="/rank-bg.png" alt="랭킹" class="absolute ranking" /> -->
                  <img
                    :src="item.thnlUrl"
                    :alt="item.prodNm"
                    class="rounded-lg"
                  />
                </div>
                <h4 class="mt-2">{{ item.prodNm }}</h4>
              </li>
              <!-- <li>
                <div class="img-wrap relative">
                  <img src="/rank-bg.png" alt="랭킹" class="absolute ranking" />
                  <img
                    src="/sk_a_1.png"
                    alt="콘텐츠이미지"
                    class="rounded-lg"
                  />
                </div>
                <h4 class="mt-2">아람 베이비올 영어</h4>
              </li>
              <li class="mx-4">
                <div class="img-wrap relative">
                  <img src="/rank-bg.png" alt="랭킹" class="absolute ranking" />
                  <img
                    src="/sk_a_1.png"
                    alt="콘텐츠이미지"
                    class="rounded-lg"
                  />
                </div>
                <h4 class="mt-2">뮤 널서리라임</h4>
              </li>
              <li>
                <div class="img-wrap relative">
                  <img
                    src="/rank-third-bg.png"
                    alt="랭킹"
                    class="absolute ranking"
                  />
                  <img
                    src="/sk_a_1.png"
                    alt="콘텐츠이미지"
                    class="rounded-lg"
                  />
                </div>
                <h4 class="mt-2">자연이랑</h4>
              </li> -->
            </ul>
          </div>
          <div class="allbook-recommend-result mt-4">
            <div class="recommend-title flex justify-between p-4 items-center">
              <span class="text-md">
                <img
                  src="/smallbook-off-ico.png"
                  alt="소전집아이콘"
                  class="inline-block -mt-1 mr-2"
                />
                소전집</span
              >
              <a
                href="javascript:;"
                class="all-view-btn text-white rounded-full px-4 py-2 text-sm"
                @click="goAllView('smallbook')"
              >
                모두보기
                <font-awesome-icon
                  :icon="['fas', 'chevron-right']"
                  class="chevron-right ml-1"
                />
              </a>
            </div>
            <ul class="flex p-4">
              <li
                v-for="item in detail.rcmdProdList.mnSrsRcmdProdList"
                :key="item.prodId"
              >
                <div class="img-wrap relative">
                  <img
                    :src="item.thnlUrl"
                    :alt="item.prodNm"
                    class="rounded-lg"
                  />
                </div>
                <h4 class="mt-2">{{ item.prodNm }}</h4>
              </li>
            </ul>
            <!-- <p class="p-8 text-center">업데이트 예정입니다.</p> -->
          </div>
          <div class="flex justify-between mt-16">
            <button
              class="btn rounded-full flex-1 text-center mr-10"
              @click="goSurveySelect"
            >
              앙케이트 다시하기
            </button>
            <button class="btn rounded-full flex-1 text-center">
              기존 결과로 상담받기
            </button>
            <!-- <n-link class="btn rounded-full flex-1 text-center mr-10" to="/"
              >아람 북클럽 회원가입</n-link
            >
            <n-link class="btn rounded-full flex-1 text-center" to="/"
              >확인</n-link
            > -->
          </div>
        </div>
      </div>
    </div>
    <n-link class="go-home" to="/">home</n-link>
    <span class="bookclub-logo">북클럽 이미지</span>
    <a href="javascript:;" class="go-back" @click="goBack">back</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {
        rcmdProdList: {
          rglrSrsRcmdProdList: []
        }
      },
      cnslResult: []
    }
  },
  // computed: {
  //   cptdCnslResult() {
  //     const list = this.detail.cnslResult
  //     console.log(list)
  //     // 스코어 중 가장 큰 수를 구하고
  //     const bigScore = list.map((item) => item.asctEduCoursChoNcnt)
  //     console.log(bigScore)
  //     // 큰 스코어랑 일치하면 랭크 true 줌.
  //     return ''
  //   }
  // },
  async mounted() {
    const { mblTelNum, cnslPtclSeqno, orgmId } = this.$route.params.item
    console.log(mblTelNum, cnslPtclSeqno, orgmId)
    try {
      const { result } = await this.$axios.$get(
        `/recipient/${mblTelNum}/counsel/${cnslPtclSeqno}`
      )
      this.detail = this._.cloneDeep(result)
      this.detail.cnslResult = this.getCnslResult(result.cnslResult)
    } catch (e) {
      console.log(e)
    }
    // this.getCnslResult()
  },
  methods: {
    /**
     * 랭크값 추가하기
     */
    getCnslResult(arr) {
      const list = Object.assign(arr)
      // 스코어 중 가장 큰 수를 구하고
      const scoreList = list.map((item) => item.asctEduCoursChoNcnt)
      const bigScore = Math.max.apply(null, scoreList)
      // 큰 스코어랑 일치하면 랭크 true 줌.
      for (const [index, item] of list.entries()) {
        item.asctEduCoursChoNcnt === bigScore
          ? (list[index].isBest = true)
          : (list[index].isBest = false)
      }
      return list
    },
    goSurveySelect() {
      console.log('앙케이트 화면으로 이동')
      this.$router.push('/survey/select', {
        params
      })
    },
    goAllView(type) {
      this.$router.push({
        name: 'product-recommend',
        params: {
          type
        }
      })
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
