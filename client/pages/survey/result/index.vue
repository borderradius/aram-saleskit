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
        <small>{{ chldNm }} / {{ chldBthYmd | birthFormat }}</small>
      </p>
      <div class="report-content1">
        <h2 class="mb-4 font-extrabold">1. 우리아이 선호 영역</h2>
        <div id="chart">
          <ApexCharts
            :options="chartOptions"
            :series="series"
            height="500"
            type="bar"
          />
        </div>
        <div>
          <table class="detail-table">
            <tbody>
              <tr
                v-for="(item, index) in cnslChoicedInfo"
                :key="index"
                :class="[index === 0 ? 'highlight' : '']"
              >
                <th>{{ item.pfrcEduNm }}</th>
                <td>{{ item.asctEduCoursNm }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul class="detail-explain">
          <li>
            &middot; 의사소통 영역으로는 듣기와 말하기, 일기와 쓰기 그리고 책과
            이야기 즐기기가 해당됩니다.
          </li>
          <li>
            &middot; 자연탐구 영역에는 탐구하는 태도 기르기, 수학적 탐구 그리고
            과학적 탐구가 있습니다.
          </li>
          <li>
            &middot; 사회관계 영역으로는 나를 알고 존중하기, 감정알기 그리고
            더불어 생활하기가 해당됩니다.
          </li>
          <li>
            &middot; 예술경험 영역에는 아름다움 찾기, 아름다운 표현하기, 예술
            감상하기가 있습니다.
          </li>
        </ul>
        <ul v-if="false" class="flex flex-row flex-wrap justify-between">
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
        <h2 class="mb-6 font-extrabold">2. 학습 계통도</h2>
        <SystemChartComp
          :data="[systemChart1, systemChart2, systemChart3, systemChart4]"
        />
        <div v-if="false" class="system-chart2 flex justify-between gtd">
          <ul class="system-chart-menu">
            <li>
              <div>표준보육과정 <small>(0세 ~ 2세)</small></div>
            </li>
            <li>누리과정<small>(3세 ~ 5세)</small></li>
            <li>초등교과<small>(저학년)</small></li>
            <li>초등교과<small>(고학년)</small></li>
          </ul>
          <div class="w-full">
            <ul class="w-full flex justify-between list-box first-row">
              <li
                v-for="(item, index) in systemChart1"
                :key="index"
                :class="[item.isOn ? 'on' : '']"
              >
                {{ item.label }}
              </li>
            </ul>
            <ul class="w-full flex justify-between list-box second-row">
              <li
                v-for="(item, index) in systemChart2"
                :key="index"
                :class="[item.isOn ? 'on' : '']"
              >
                {{ item.label }}
              </li>
            </ul>
            <ul class="w-full flex justify-between list-box third-row">
              <li
                v-for="(item, index) in systemChart3"
                :key="index"
                :class="[item.isOn ? 'on' : '']"
              >
                {{ item.label }}
              </li>
            </ul>
            <ul class="w-full flex justify-between list-box fourth-row">
              <li
                v-for="(item, index) in systemChart4"
                :key="index"
                :class="[item.isOn ? 'on' : '']"
              >
                {{ item.label }}
              </li>
            </ul>
          </div>
        </div>

        <div v-if="false" class="system-chart2 flex justify-between">
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
        </div>
      </div>
      <div class="report-content3 mt-4">
        <h2 class="mb-6 font-extrabold">3. 추천 결과</h2>
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
                v-for="item in prfdRcmdList"
                :key="item.prodId"
                class="relative"
              >
                <img src="/rank-bg.png" alt="랭킹" class="absolute ranking" />
                <div class="img-wrap relative">
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
            <ul
              v-if="detail.rcmdProdList.mnSrsRcmdProdList.length"
              class="flex p-4"
            >
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
            <p v-else class="p-8 text-center">업데이트 예정입니다.</p>
          </div> -->
          <div class="flex justify-between mt-16">
            <a
              href="https://arambookclub.com/join/step01"
              target="_blank"
              class="btn rounded-full flex-1 text-center mr-10"
              >아람 북클럽 회원가입</a
            >
            <n-link class="btn rounded-full flex-1 text-center" to="/"
              >확인</n-link
            >
          </div>
        </div>
      </div>
    </div>
    <n-link class="go-home" to="/">
      <img src="/go-home1.png" alt="메인으로가기 아이콘" />
    </n-link>
    <img src="/bi_blue.png" class="bookclub-logo2" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SystemChartComp from '@/components/systemChart'

export default {
  components: {
    SystemChartComp
  },
  filters: {
    birthFormat(value) {
      if (value) {
        const str1 = value.substring(0, 4)
        const str2 = value.substring(4, 6)
        const str3 = value.substring(6, 8)
        return `${str1}-${str2}-${str3}`
      }
    }
  },
  data() {
    return {
      chartOptions: {
        colors: [
          '#26a0fc',
          '#26e7a6',
          '#419a91',
          '#8b75d7',
          '#feee3b',
          '#26dfec'
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%',
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
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
      series: [],
      detail: {
        rcmdProdList: {
          rglrSrsRcmdProdList: [],
          mnSrsRcmdProdList: []
        }
      },
      systemChart1: [],
      systemChart2: [],
      systemChart3: [],
      systemChart4: [],
      systemChart5: [],
      cnslChoicedInfo: [],
      prfdRcmdList: [],
      chldNm: '',
      chldBthYmd: ''
    }
  },
  computed: {
    ...mapState({
      childInfo: (state) => state.select.childInfo
    })
  },
  async mounted() {
    const { chldId, cstpMngrSeqno, cnslPtclSeqno } = this.childInfo
    try {
      const { result } = await this.$axios.$get('/counsel/cnslResult', {
        params: {
          chldId,
          cstpMngrSeqno,
          cnslPtclSeqno
        }
      })
      console.warn('상세 결과값:', result)
      this.systemChart1 = result.standardList
      this.systemChart2 = result.nuriList
      this.systemChart3 = result.lowerGradeList
      this.systemChart4 = result.seniorList

      this.cnslChoicedInfo = result.cnslChoicedInfo
      this.prfdRcmdList = result.rcmdProdList.prfdRcmdList
      this.chldNm = result.chldNm
      this.chldBthYmd = result.chldBthYmd
      this.series.push({
        name: '선호영역',
        data: result.cnslChoicedCnt
      })
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    ...mapActions({
      setSurveyResult: 'setSurveyResult'
    }),
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
    goAllView(type) {
      this.$router.push({
        name: 'product-recommend',
        params: {
          type,
          surveyResult: this.$route.params
        }
      })
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-table {
  width: 100%;
  margin-top: 2rem;
  th,
  td {
    width: 50%;
    text-align: center;
    padding: 1rem 0;
    border-top: 1px solid #444;
  }
  th {
    color: #999;
    font-weight: normal;
  }
  .highlight {
    background: #ff7c72;
    color: #333 !important;
    th {
      color: #333 !important;
    }
  }
}
.detail-explain {
  width: 100%;
  background: #f1f1f1;
  padding: 2rem 0;
  margin-top: 2rem;
  li {
    width: 100%;
    padding-top: 0.5rem;
    font-size: 1rem;
    margin: 0;
  }
}
</style>
