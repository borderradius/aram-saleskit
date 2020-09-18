<template>
  <div class="survey-result min-h-screen flex justify-center">
    <h1
      class="text-xl absolute left-0 py-2 px-6 rounded-r-full title text-white"
    >
      어린이 선호도 앙케이트
    </h1>
    <div class="flex-initial h-5/6 w-4/5 mt-18">
      <p class="report-subject">
        앙케이트 결과 REPORT
        <small>이아람 / 2020-07-01</small>
      </p>
      <div class="report-content1">
        <h2 class="mb-4 font-extrabold">1. 우리아이 선호 영역</h2>
        <!-- <div id="chart">
          <ApexCharts
            :options="chartOptions"
            :series="series"
            height="500"
            type="bar"
          />
        </div> -->
        <!-- 이하 기존 박스로 나오던 부분 -->
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
        </ul>
      </div>
      <div class="report-content2 mt-4 pb-2">
        <h2 class="mb-4 font-extrabold">2. 학습 계통도</h2>
        <!-- <systemChartComp /> -->
        <!-- <div class="system-chart">
          <ul class="first flex">
            <li class="flex-1 text-center">표준보육과정<br />(0세~2세)</li>
            <li class="flex-1 text-center">누리과정<br />(3세~5세)</li>
            <li class="flex-1 text-center">초등교과<br />(저학년)</li>
            <li class="flex-1 text-center">초등교과<br />(고학년)</li>
          </ul>
          <ul class="second flex mt-6">
            <li class="flex-1 text-center on">의사소통</li>
            <li class="flex-1 text-center on">의사소통</li>
            <li class="flex-1 text-center on">국어</li>
            <li class="flex-1 text-center">
              <div class="system-chart-child on">영어</div>
              <div class="system-chart-child">국어</div>
            </li>
          </ul>
          <ul class="third flex mt-6">
            <li class="flex-1 text-center">자연탐구</li>
            <li class="flex-1 text-center">자연탐구</li>
            <li class="flex-1 text-center">수학</li>
            <li class="flex-1 text-center">
              <div class="system-chart-child">수학</div>
              <div class="system-chart-child">과학</div>
            </li>
          </ul>
          <ul class="fourth flex mt-6">
            <li class="flex-1 text-center">사회관계</li>
            <li class="flex-1 text-center">사회관계</li>
            <li class="flex-1 text-center">
              <div class="system-chart-child">슬기로운 생활</div>
              <div class="system-chart-child">바른생활</div>
            </li>
            <li class="flex-1 text-center">
              <div class="system-chart-child">사회</div>
              <div class="system-chart-child">도덕</div>
            </li>
          </ul>
          <ul class="fifth flex mt-6">
            <li class="flex-1 text-center">예술경험</li>
            <li class="flex-1 text-center">예술경험</li>
            <li class="flex-1 text-center">즐거운 생활</li>
            <li class="flex-1 text-center">
              <div class="system-chart-child">미술</div>
              <div class="system-chart-child">음악</div>
            </li>
          </ul>
          <ul class="sixth flex mt-6">
            <li class="flex-1 text-center">
              <div class="system-chart-child">기본생활</div>
              <div class="system-chart-child">신체운동</div>
            </li>
            <li class="flex-1 text-center">신체운동 및 건강</li>
            <li class="flex-1 text-center">안전</li>
            <li class="flex-1 text-center">체육</li>
          </ul>
        </div> -->

        <div v-if="true" class="system-chart2 flex justify-between">
          <ul class="system-chart-title">
            <li class="flex items-center text-center">
              <div class="w-full text-center">
                표준보육과정<br />(0세 ~ 2세)
              </div>
            </li>
            <li class="flex items-center text-center">
              <div class="w-full text-center">누리과정<br />(3세 ~ 5세)</div>
            </li>
            <li class="flex items-center text-center">
              <div class="w-full text-center">초등교과<br />(저학년)</div>
            </li>
            <li class="flex items-center text-center">
              <div class="w-full text-center">초등교과<br />(고학년)</div>
            </li>
          </ul>
          <ul class="system-chart-list row1">
            <li
              v-for="(item, index) in systemChart1"
              :key="index"
              :class="[
                item.size === 'half' ? 'half' : '',
                item.isOn ? 'on' : '',
                item.isLeft ? 'go-left' : '',
                item.isRight ? 'go-right' : '',
                item.isStraight ? 'go-straight' : ''
              ]"
              class="flex items-center"
            >
              <div class="text-center w-full">
                {{ item.label }}
              </div>
            </li>
          </ul>
          <ul class="system-chart-list row1">
            <li
              v-for="(item, index) in systemChart2"
              :key="index"
              :class="[
                item.size === 'half' ? 'half' : '',
                item.isOn ? 'on' : '',
                item.isLeft ? 'go-left' : '',
                item.isRight ? 'go-right' : '',
                item.isStraight ? 'go-straight' : ''
              ]"
              class="flex items-center"
            >
              <div class="text-center w-full">
                {{ item.label }}
              </div>
            </li>
          </ul>
          <ul class="system-chart-list row3">
            <li
              v-for="(item, index) in systemChart3"
              :key="index"
              :class="[
                item.size === 'half' ? 'half' : '',
                item.isOn ? 'on' : '',
                item.isLeft ? 'go-left' : '',
                item.isRight ? 'go-right' : '',
                item.isStraight ? 'go-straight' : ''
              ]"
              class="flex items-center"
            >
              <div class="text-center w-full">
                {{ item.label }}
              </div>
            </li>
          </ul>
          <ul class="system-chart-list row1">
            <li
              v-for="(item, index) in systemChart4"
              :key="index"
              :class="[
                item.size === 'half' ? 'half' : '',
                item.isOn ? 'on' : '',
                item.isLeft ? 'go-left' : '',
                item.isRight ? 'go-right' : '',
                item.isStraight ? 'go-straight' : ''
              ]"
              class="flex items-center"
            >
              <div class="text-center w-full">
                {{ item.label }}
              </div>
            </li>
          </ul>
          <ul class="system-chart-list row5">
            <li
              v-for="(item, index) in systemChart5"
              :key="index"
              :class="[
                item.size === 'half' ? 'half' : '',
                item.isOn ? 'on' : '',
                item.isLeft ? 'go-left' : '',
                item.isRight ? 'go-right' : '',
                item.isStraight ? 'go-straight' : ''
              ]"
              class="flex items-center"
            >
              <div class="text-center w-full">
                {{ item.label }}
              </div>
            </li>
          </ul>
          <!-- <div class="flex">
            <ul class="flex justify-between items">
              <li
                v-for="item in systemChart"
                :key="item.label"
                :class="[item.isOn ? 'on' : '']"
                class="chart-item"
              >
                <span>
                  {{ item.label }}
                </span>
              </li>
            </ul>
          </div> -->
          <!-- <ul>
            <li class="flex">
              <span class="flex">표준보육과정<br />(0세 ~ 2세)</span>
              <ul class="flex justify-between">
                <li
                  v-for="item in systemChart"
                  :key="item.label"
                  :class="[item.isOn ? 'on' : '']"
                  class="chart-item flex"
                >
                  <span>
                    {{ item.label }}
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <span>누리과정<br />(3세 ~ 5세)</span>
            </li>
            <li>
              <span>초등교과<br />(저학년)</span>
            </li>
            <li>
              <span>초등교과<br />(고학년)</span>
            </li>
          </ul> -->
        </div>
      </div>
      <div class="report-content3 mt-4">
        <h2 class="mb-4 font-extrabold">3. 추천 결과</h2>
        <div class="recommend-result pb-10">
          <div class="allbook-recommend-result">
            <div class="recommend-title flex justify-between p-4 items-center">
              <span class="text-md flex items-center">
                <img
                  src="/allbook-off-ico.png"
                  alt="전집아이콘"
                  class="inline-block mr-2"
                />
                전집 &amp; 디지털콘텐츠</span
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
                class="relative"
              >
                <img src="/rank-bg.png" alt="랭킹" class="ranking" />
                <span class="ranking-num">{{ item.rcmdRank }}</span>
                <div class="img-wrap">
                  <img :src="item.thnlUrl" :alt="item.prodNm" />
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
          <!-- <div class="allbook-recommend-result mt-4">
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
          </div> -->
          <div class="flex justify-between mt-16">
            <button
              class="btn rounded-full flex-1 text-center mr-10"
              @click="goSurveySelect"
            >
              앙케이트 다시하기
            </button>
            <!-- <n-link
              class="btn rounded-full flex-1 text-center"
              to="/survey/recommend"
              >기존 결과로 상담받기</n-link
            > -->
            <button
              class="btn rounded-full flex-1 text-center"
              @click="goConsult"
            >
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
    <n-link class="go-home" to="/">
      <img src="/go-home1.png" alt="메인으로가기 아이콘" />
    </n-link>
    <img src="/bi_blue.png" alt="북클럽로고" class="bookclub-logo2" />
    <!-- <span class="bookclub-logo">북클럽 이미지</span> -->
    <a href="javascript:;" class="go-back" @click="goBack">
      <img src="/go-back.png" alt="뒤로가기 아이콘" />
    </a>
    <!-- <a href="javascript:;" class="go-back" @click="goBack">back</a> -->
  </div>
</template>

<script>
// import systemChartComp from '@/components/systemChart'

export default {
  // components: {
  //   systemChartComp
  // },
  data() {
    return {
      chartOptions: {
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        xaxis: {
          categories: [
            '의사소통',
            '자연탐구',
            '사회관계',
            '예술경험',
            '기본생활',
            '신체운동'
          ]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [5, 3, 0, 1, 1, 0]
        }
      ],
      detail: {
        rcmdProdList: {
          rglrSrsRcmdProdList: []
        },
        cnslResult: []
      },
      cnslResult: [],
      systemChart1: [
        {
          label: '의사소통',
          isOn: true,
          size: 'full',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '의사소통',
          isOn: true,
          size: 'full',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '국어',
          isOn: true,
          size: 'full',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '국어',
          isOn: false,
          size: 'half',
          isLeft: false,
          isRight: true,
          isStraight: false
        },
        {
          label: '영어',
          isOn: true,
          size: 'half',
          isLeft: true,
          isRight: false,
          isStraight: false
        }
      ],
      systemChart2: [
        {
          label: '자연탐구',
          isOn: false,
          size: 'full',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '자연탐구',
          isOn: false,
          size: 'full',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '수학',
          isOn: false,
          size: 'full',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '수학',
          isOn: false,
          size: 'half',
          isLeft: false,
          isRight: true,
          isStraight: false
        },
        {
          label: '과학',
          isOn: false,
          size: 'half',
          isLeft: true,
          isRight: false,
          isStraight: false
        }
      ],
      systemChart3: [
        {
          label: '사회관계',
          isOn: false,
          size: 'full',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '사회관계',
          isOn: false,
          size: 'full',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '슬기로운생활',
          isOn: false,
          size: 'half',
          isLeft: false,
          isRight: true,
          isStraight: false
        },
        {
          label: '바른생활',
          isOn: false,
          size: 'half',
          isLeft: true,
          isRight: false,
          isStraight: false
        },
        {
          label: '사회',
          isOn: false,
          size: 'half',
          isLeft: false,
          isRight: false,
          isStraight: true
        },
        {
          label: '도덕',
          isOn: false,
          size: 'half',
          isLeft: false,
          isRight: false,
          isStraight: true
        }
      ],
      systemChart4: [
        {
          label: '예술경험',
          isOn: false,
          size: 'full',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '예술경험',
          isOn: false,
          size: 'full',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '즐거운 생활',
          isOn: false,
          size: 'full',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '음악',
          isOn: false,
          size: 'half',
          isLeft: false,
          isRight: true,
          isStraight: false
        },
        {
          label: '미술',
          isOn: false,
          size: 'half',
          isLeft: true,
          isRight: false,
          isStraight: false
        }
      ],
      systemChart5: [
        {
          label: '기본생활',
          isOn: false,
          size: 'half',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '신체운동',
          isOn: false,
          size: 'half',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '신체운동 및 건강',
          isOn: false,
          size: 'full',
          isLeft: true,
          isRight: false,
          isStraight: false
        },
        {
          label: '안전',
          isOn: false,
          size: 'full',
          isLeft: false,
          isRight: false,
          isStraight: false
        },
        {
          label: '체육',
          isOn: false,
          size: 'full',
          isLeft: false,
          isRight: false,
          isStraight: false
        }
      ]
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
    const { mblTelNum, cnslPtclSeqno } = this.$route.params
    // console.warn('기존 상담내역 상세 파라미터 : ', this.$route.params)
    // console.log(mblTelNum, cnslPtclSeqno, orgmId)
    try {
      const { result } = await this.$axios.$get(
        `/recipient/${mblTelNum}/counsel/${cnslPtclSeqno}`
      )
      this.detail = this._.cloneDeep(result)
      this.detail.cnslResult = this.getCnslResult(result.cnslResult)
      console.warn(this.detail)
    } catch (e) {
      console.log(e)
    }
    // this.getCnslResult()
    const items3 = document.getElementsByClassName('item3')
    // console.log(items)
    // for (const [index, a] of items.entries()) {
    //   console.log(a, index)
    // }
    for (let i = 0; i < items3.length; i++) {
      console.log(items3[i])
    }
  },
  methods: {
    async goConsult() {
      try {
        const { mblTelNum, cnslPtclSeqno, orgmId } = this.$route.params
        await this.$axios.put(
          `/recipient/${mblTelNum}/counsel/${cnslPtclSeqno}`,
          { orgmId }
        )
        this.goAllView('allbook')
      } catch (e) {
        console.log(e)
      }
    },
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
      // this.$router.push('/survey/select', {
      //   params
      // })
      const { orgmId, mblTelNum, chldNm, chldBthYmd } = this.$route.params
      this.$router.push({
        name: 'survey-select',
        params: {
          orgmId,
          mblTelNum,
          chldNm,
          chldBthYmd
        }
      })
    },
    goAllView(type) {
      this.$router.push({
        name: 'product-recommend',
        params: {
          type,
          surveyDetail: this.$route.params
        }
      })
    },
    goBack() {
      this.$router.push('/survey')
    }
  }
}
</script>

<style lang="scss" scoped></style>
