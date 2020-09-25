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
        <small>{{ detail.chldNm }} / {{ detail.cnslDate }}</small>
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
                v-for="(item, index) in detail.cnslChoicedInfo"
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
        <!-- 이하 기존 박스로 나오던 부분 -->
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
        <h2 class="mb-4 font-extrabold">2. 학습 계통도</h2>
        <!-- <SystemChartComp
          :data="[systemChart1, systemChart2, systemChart3, systemChart4]"
          :priority-data="detail.cnslChoicedInfo"
        /> -->
        <SystemChartComp
          :data="[standardList, nuriList, lowerGradeList, seniorList]"
          :priority-data="detail.cnslChoicedInfo"
        />
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
                v-for="item in detail.rcmdProdList.prfdRcmdList"
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
            <button
              class="btn rounded-full flex-1 text-center"
              @click="goConsult"
            >
              기존 결과로 상담받기
            </button>
          </div>
        </div>
      </div>
    </div>
    <n-link class="go-home" to="/">
      <img src="/go-home1.png" alt="메인으로가기 아이콘" />
    </n-link>
    <img src="/bi_blue.png" alt="북클럽로고" class="bookclub-logo2" />
    <a href="javascript:;" class="go-back" @click="goBack">
      <img src="/go-back.png" alt="뒤로가기 아이콘" />
    </a>
  </div>
</template>

<script>
import SystemChartComp from '@/components/systemChart'
export default {
  components: {
    SystemChartComp
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
            ['의사소통', '국어,영어'],
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
          name: '선호영역',
          data: [3, 5, 4, 1, 3, 2]
        }
      ],
      detail: {
        rcmdProdList: {
          rglrSrsRcmdProdList: [],
          prfdRcmdList: []
        },
        cnslResult: []
      },
      cnslResult: [],
      systemChart1: [
        {
          label: '의사소통',
          isOn: true,
          isPriority: false
        },
        {
          label: '자연탐구',
          isOn: false,
          isPriority: false
        },
        {
          label: '사회관계',
          isOn: false,
          isPriority: true
        },
        {
          label: '예술경험',
          isOn: false,
          isPriority: false
        },
        {
          label: '기본 생활',
          isOn: false,
          isPriority: false
        },
        {
          label: '신체 운동',
          isOn: false,
          isPriority: false
        }
      ],
      systemChart2: [
        {
          label: '의사소통',
          isOn: true,
          isLeft: false,
          isRight: true
        },
        {
          label: '자연탐구',
          isOn: false,
          isLeft: false,
          isRight: true
        },
        {
          label: '사회관계',
          isOn: false,
          isLeft: false,
          isRight: true
        },
        {
          label: '예술경험',
          isOn: false,
          isLeft: false,
          isRight: false
        },
        {
          label: '신체운동 및 건강',
          isOn: false,
          isLeft: false,
          isRight: false
        }
      ],
      systemChart3: [
        {
          label: '국어',
          isOn: true,
          isLeft: false,
          isRight: false
        },
        {
          label: '수학',
          isOn: true,
          isLeft: false,
          isRight: false
        },
        {
          label: '슬기로운생활',
          isOn: true,
          isLeft: false,
          isRight: true
        },
        {
          label: '바른생활',
          isOn: true,
          isLeft: false,
          isRight: false
        },
        {
          label: '즐거운생활',
          isOn: true,
          isLeft: false,
          isRight: false
        },
        {
          label: '안전',
          isOn: true,
          isLeft: false,
          isRight: false
        }
      ],
      systemChart4: [
        {
          label: '국어',
          isOn: true
        },
        {
          label: '영어',
          isOn: false
        },
        {
          label: '수학',
          isOn: false
        },
        {
          label: '과학',
          isOn: false
        },
        {
          label: '사회',
          isOn: false
        },
        {
          label: '도덕',
          isOn: false
        },
        {
          label: '미술',
          isOn: false
        },
        {
          label: '음악',
          isOn: false
        },
        {
          label: '체육',
          isOn: false
        }
      ],
      standardList: [],
      nuriList: [],
      lowerGradeList: [],
      seniorList: []
    }
  },
  async mounted() {
    const {
      mblTelNum,
      cnslPtclSeqno,
      rectChldId,
      cstpMngrSeqno
    } = this.$route.params
    // console.warn(
    //   `${cnslPtclSeqno}, ${rectChldId}, ${cstpMngrSeqno}, ${mblTelNum}`
    // )
    try {
      const { result } = await this.$axios.$get(
        `/recipient/${mblTelNum}/counsel/${cnslPtclSeqno}`,
        {
          params: {
            rectChldId,
            cstpMngrSeqno
          }
        }
      )
      // console.warn(result)
      this.$nextTick(() => {
        this.detail = result
        this.standardList = result.standardList
        this.nuriList = result.nuriList
        this.lowerGradeList = result.lowerGradeList
        this.seniorList = result.seniorList
      })
    } catch (e) {
      console.log(e)
    }
    // -------------------------------------------------------
    //   const { result } = await this.$axios.$get(
    //     `/recipient/${mblTelNum}/counsel/${cnslPtclSeqno}`
    //   )
    //   this.detail = this._.cloneDeep(result)
    //   this.detail.cnslResult = this.getCnslResult(result.cnslResult)
    //   console.warn(this.detail)
    // } catch (e) {
    //   console.log(e)
    // }
    // -------------------------------------------------------
    // this.getCnslResult()
    // const items3 = document.getElementsByClassName('item3')
    // console.log(items)
    // for (const [index, a] of items.entries()) {
    //   console.log(a, index)
    // }
    // for (let i = 0; i < items3.length; i++) {
    //   console.log(items3[i])
    // }

    // -------------------------------------------------------- d3를 이용한 그리기

    // const firstBox = document.querySelector('.first-row li')
    // const startPointX = firstBox.clientWidth / 2
    // const startPointY = firstBox.clientHeight
    // const firstRow = d3.select('.first-row')
    // const secondRow = d3.select('.second-row')
    // const thirdRow = d3.select('.third-row')
    // const fourthRow = d3.select('.fourth-row')

    // const firstRow2 = firstRow
    //   .selectAll('li')
    //   .append('svg')
    //   .style('overflow', 'inherit')
    //   .style('position', 'absolute')
    //   .style('top', 0)
    //   .style('left', 0)
    //   .attr('width', '100%')
    //   .attr('height', '100%')
    // const secondRow2 = secondRow
    //   .selectAll('li')
    //   .append('svg')
    //   .style('overflow', 'inherit')
    //   .style('position', 'absolute')
    //   .style('top', 0)
    //   .style('left', 0)
    //   .attr('width', '100%')
    //   .attr('height', '100%')
    // const thirdRow2 = thirdRow
    //   .selectAll('li')
    //   .append('svg')
    //   .style('overflow', 'inherit')
    //   .style('position', 'absolute')
    //   .style('top', 0)
    //   .style('left', 0)
    //   .attr('width', '100%')
    //   .attr('height', '100%')
    // const fourthRow2 = fourthRow
    //   .selectAll('li')
    //   .append('svg')
    //   .style('overflow', 'inherit')
    //   .style('position', 'absolute')
    //   .style('top', 0)
    //   .style('left', 0)
    //   .attr('width', '100%')
    //   .attr('height', '100%')

    // firstRow2
    //   .append('rect')
    //   .style('position', 'absolute')
    //   .style('top', 0)
    //   .style('left', 0)
    //   .attr('stroke', (d, idx, item) => {
    //     const hasOn =
    //       item[idx].parentElement.parentElement.classList.value === 'on'
    //     return hasOn ? '#ff6446' : ''
    //   })
    //   .attr('stroke-width', 4)
    //   .attr('width', '100%')
    //   .attr('height', '97.5%')
    //   .attr('fill-opacity', 0)
    // secondRow2
    //   .append('rect')
    //   .style('position', 'absolute')
    //   .style('top', 0)
    //   .style('left', 0)
    //   .attr('stroke', (d, idx, item) => {
    //     const hasOn =
    //       item[idx].parentElement.parentElement.classList.value === 'on'
    //     return hasOn ? '#ff6446' : ''
    //   })
    //   .attr('stroke-width', 4)
    //   .attr('width', '100%')
    //   .attr('height', '97.5%')
    //   .attr('fill-opacity', 0)
    // thirdRow2
    //   .append('rect')
    //   .style('position', 'absolute')
    //   .style('top', 0)
    //   .style('left', 0)
    //   .attr('stroke', (d, idx, item) => {
    //     const hasOn =
    //       item[idx].parentElement.parentElement.classList.value === 'on'
    //     return hasOn ? '#ff6446' : ''
    //   })
    //   .attr('stroke-width', 4)
    //   .attr('width', '100%')
    //   .attr('height', '97.5%')
    //   .attr('fill-opacity', 0)
    // fourthRow2
    //   .append('rect')
    //   .style('position', 'absolute')
    //   .style('top', 0)
    //   .style('left', 0)
    //   .attr('stroke', (d, idx, item) => {
    //     const hasOn =
    //       item[idx].parentElement.parentElement.classList.value === 'on'
    //     return hasOn ? '#ff6446' : ''
    //   })
    //   .attr('stroke-width', 4)
    //   .attr('width', '100%')
    //   .attr('height', '97.5%')
    //   .attr('fill-opacity', 0)

    // firstRow2
    //   .append('polyline')
    //   .attr('points', (d, idx, item) => {
    //     if (idx === 1) {
    //       return `${startPointX + 30},${startPointY} ${startPointX + 30},100`
    //     } else if (idx === 2) {
    //       return `${startPointX + 20},${startPointY} ${startPointX + 20},100`
    //     } else if (idx === 3) {
    //       return `${startPointX},${startPointY} ${startPointX},80 ${startPointX *
    //         2.5}, 80 ${startPointX * 2.5}, 100 ${startPointX *
    //         2.5}, 80 ${startPointX * 5 + 20}, 80 ${startPointX *
    //         5}, 80 ${startPointX * 5}, 100`
    //     } else if (idx === 4) {
    //       return `${startPointX},${startPointY} ${startPointX},80`
    //     } else if (idx === 5) {
    //       return `${startPointX},${startPointY} ${startPointX},80`
    //     } else {
    //       return `${startPointX},${startPointY} ${startPointX},100`
    //     }
    //   })
    //   .attr('stroke', '#ddd')
    //   .attr('stroke-width', 3)
    //   .attr('fill', 'none')

    // secondRow2
    //   .append('polyline')
    //   .attr('points', (d, idx, item) => {
    //     if (idx === 0) {
    //       return `${startPointX},${startPointY} ${startPointX},100 ${startPointX},80 ${startPointX *
    //         2 +
    //         10},80 ${startPointX * 2 + 10}, 200`
    //     } else if (idx === 1) {
    //       return `${startPointX},${startPointY} ${startPointX},100 ${startPointX},80 ${startPointX *
    //         3},80 ${startPointX * 3},100 ${startPointX * 3},100 ${startPointX *
    //         3},80 ${startPointX * 4},80 ${startPointX * 4},60 ${startPointX *
    //         4},80 ${startPointX * 5},80 ${startPointX * 5},100`
    //     } else if (idx === 3 || idx === 4) {
    //       return `${startPointX + 20},${startPointY} ${startPointX + 20},100`
    //     }
    //   })
    //   .attr('stroke', '#ddd')
    //   .attr('stroke-width', 3)
    //   .attr('fill', 'none')

    // thirdRow2
    //   .append('polyline')
    //   .attr('points', (d, idx, item) => {
    //     if (idx === 0 || idx === 1) {
    //       return `${startPointX},${startPointY} ${startPointX},100`
    //     } else if (idx === 2) {
    //       return `${startPointX - 30},${startPointY} ${startPointX -
    //         30},100 ${startPointX - 30},80 ${startPointX * 2 -
    //         20},80 ${startPointX * 2 - 20},100`
    //     } else if (idx === 3) {
    //       return `${startPointX},${startPointY} ${startPointX},100`
    //     } else if (idx === 4) {
    //       return `${startPointX - 40},${startPointY} ${startPointX -
    //         40},100 ${startPointX - 40},80 ${startPointX * 2},80 ${startPointX *
    //         2},100 ${startPointX * 2},80 ${startPointX * 3},80 ${startPointX *
    //         3},100 ${startPointX * 3},60`
    //     }
    //   })
    //   .attr('stroke', '#ddd')
    //   .attr('stroke-width', 3)
    //   .attr('fill', 'none')
  },
  methods: {
    /**
     * * 기존 결과로 상담받기
     */
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
     * * 랭크값 추가하기
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
    /**
     * * 앙케이트 화면으로 이동
     */
    goSurveySelect() {
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
    /**
     * * 전집 & 디지털 콘텐츠 모두보기로 이동
     */
    goAllView(type) {
      this.$router.push({
        name: 'product-recommend',
        params: {
          type,
          surveyDetail: this.$route.params
        }
      })
    },
    /**
     * * 뒤로가기
     */
    goBack() {
      this.$router.push('/survey')
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
