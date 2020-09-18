<template>
  <div class="survey-select-wrap flex items-center justify-center text-lg">
    <div class="flex-initial h-5/6 w-5/6">
      <h1 class="text-xl absolute left-0 py-2 px-6 rounded-r-full title">
        어린이 선호도 앙케이트
      </h1>
      <div>
        <p class="sub-title">
          교과 선호 문항
        </p>
        <Swiper ref="mySwiper" :options="swiperOptions">
          <SwiperSlide
            v-for="(item, index) in allSlideData.length"
            :key="index"
          >
            <div class="img-select-wrap flex items-center justify-between">
              <div v-animate-css.click="'rubberBand'" class="img-select-left">
                <transition name="selected">
                  <div class="img-select-inner">
                    <div
                      v-for="(item2, index2) in slideData1[index]"
                      :key="index2"
                    >
                      <div
                        v-if="!index2"
                        @click="goNext(index, index2, item2.index)"
                      >
                        <img :src="item2.imgSrc" alt="선택이미지" />
                        <span class="img-title shadow-xl">{{
                          item2.label
                        }}</span>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
              <div v-animate-css.click="'rubberBand'" class="img-select-right">
                <div class="img-select-inner">
                  <div
                    v-for="(item3, index3) in slideData1[index]"
                    :key="index3"
                  >
                    <div
                      v-if="index3"
                      @click="goNext(index, index3, item3.idnex)"
                    >
                      <img :src="item3.imgSrc" alt="선택이미지" />
                      <span class="img-title shadow-xl">{{ item3.label }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="pagination">
          {{ nowSlidePage }} / {{ allSlideData.length - 1 }}
        </div>
      </div>
    </div>
    <img src="/bi_blue.png" class="bookclub-logo2" />
    <n-link class="go-home" to="/">
      <img src="/go-home2.png" alt="메인으로가기 아이콘" />
    </n-link>
    <img src="/main-logo.png" class="bookclub-logo2" />
    <button
      v-if="nowSlidePage > 1"
      class="go-main focus:outline-none"
      @click="goPrev"
    >
      <img src="/icon_back.png" alt="이전 아이콘" />
      이전
    </button>
    <audio src="/saleskit_bgm.mp3" autoplay />
    <Loading v-if="isComplete" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Loading from '@/components/loading.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    Loading
  },
  data() {
    return {
      nowSlidePage: 1,
      swiperOptions: {
        allowTouchMove: false,
        speed: 500
      },
      isComplete: false,
      slideData1: [],
      postListData: [],
      chldId: '',
      cnslPtclSeqno: '',
      allSlideData: [],
      eduCodeList: [
        {
          code: 'AC0101', // 의사소통
          changeCode: 'CQ-004001'
        },
        {
          code: 'AC0102', // 자연탐구
          changeCode: 'CQ-004002'
        },
        {
          code: 'AC0103', // 사회관계
          changeCode: 'CQ-004003'
        },
        {
          code: 'AC0104', // 예술경험
          changeCode: 'CQ-004004'
        }
      ],
      seqCode: []
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    // this.allSlideData = [
    //   {
    //     label: '음악',
    //     code: 'AC0407',
    //     index: 0,
    //     imgSrc:
    //       'https://contents.arambookclub.com/counsel/ac01/ac0104/sk_e_1.jpg'
    //   },
    //   {
    //     label: '미술',
    //     code: 'AC0408',
    //     index: 1,
    //     imgSrc:
    //       'https://contents.arambookclub.com/counsel/ac01/ac0104/sk_e_2.jpg'
    //   },
    //   {
    //     label: '체육',
    //     code: 'AC0409',
    //     index: 2,
    //     imgSrc:
    //       'https://contents.arambookclub.com/counsel/ac01/ac0104/sk_e_3.jpg'
    //   }
    // ]
    this.allSlideData = this.$route.params.children
    this.getRandomData()
    this.seqCode = this.getSeqCode()
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    getSeqCode() {
      return this.eduCodeList.filter(
        (item) => item.code === this.$route.params.eduCode
      )
    },
    /**
     * ? 상담결과 저장후 상세값 리턴함.
     * ? 리턴값을 라우팅하면서 넘김
     * ? 그러면 넘어가는 페이지에서 상세정보api 호출할 필요 없음.
     */
    goResult() {
      setTimeout(() => {
        this.isComplete = false
        this.$router.push({
          name: 'survey-result',
          params: {
            apiResult: this.$route.params.apiResult,
            apiParams: this.$route.params.apiParams
          }
          // params: {
          //   lastSelect: params,
          //   apiResult: this.$route.params.apiResult
          // }
        })
      }, 2000)
    },
    goPrev() {
      this.nowSlidePage--
      this.swiper.slideTo(this.nowSlidePage - 1)
      this.postListData.splice(this.nowSlidePage - 1, 1)
      window.setTimeout(() => {
        this.slideData1[this.nowSlidePage - 1][0].click = false
        this.slideData1[this.nowSlidePage - 1][1].click = false
        this.slideData1.pop()
      }, 500)
      console.warn('삭제후 전송할 데이터 : ', this.postListData)
      console.warn('슬라이드 데이터 :', this.slideData1)
    },
    clickSound() {
      const audio = new Audio('/saleskit_sfx.mp3')
      audio.play()
    },
    async goNext(index1, index2, selectedIndex) {
      this.clickSound()
      // postListData에 데이터 넣기
      // 클릭된거는 값 true로 바꿔주고 postListData에 넣기.
      this.slideData1[index1][index2].click = true
      const postListParam = {}
      for (const item of this.slideData1[index1]) {
        if (item.click) {
          postListParam.choicedAnswerEduCd = item.code // 선택한 학습코드
        } else {
          postListParam.nchoAsctEduCoursCd = item.code // 비선택 학습코드
        }
      }
      // 시퀀스값 추가
      // postListParam.cstpPoolNo = this.$route.params.eduCode
      postListParam.cstpPoolNo = this.seqCode[0].changeCode
      // post에 보낼 데이터 준비
      this.postListData.push(postListParam)

      // API 호출
      if (
        this.nowSlidePage === this.allSlideData.length - 1 &&
        this.slideData1.length === this.allSlideData.length - 1
      ) {
        console.warn('API 호출하는 부분')
        // POST 호출에 필요한 데이터 준비 - 차수, 네임 등등
        const { apiResult } = this.$route.params
        const apiParams = {}
        apiParams.cstpMngrSeqno = 1
        apiParams.cnslTestStepCode = 'CQ-004000'
        apiParams.counselTestPaper = this.postListData
        apiParams.chldId = apiResult.chldId
        apiParams.cnslPtclSeqno = apiResult.cnslPtclSeqno
        apiParams.orgmId = this.$route.params.apiParams.orgmId
        try {
          await this.$axios.$post('/counsel/insCounselResult', apiParams)
          // console.warn('교과과정 결과값', result)
          //   apiResult = result
        } catch (e) {
          console.log(e)
        }
        // // POST API 호출
        setTimeout(() => {
          this.isComplete = true
          this.goResult()
        }, 1000)
      }

      // if (this.nowSlidePage <= 1) {
      if (this.allSlideData.length === 3 && this.slideData1.length === 1) {
        console.log('------- 전체길이보다 작을때')
        this.nowSlidePage++
        this.getRandomData(1, index2)
        window.setTimeout(() => {
          if (this.nowSlidePage < this.allSlideData.length)
            this.swiper.slideTo(this.nowSlidePage - 1)
        }, 500)
      }

      // if (this.nowSlidePage < this.allSlideData.length - 1) {
      //   this.nowSlidePage++
      // if (this.nowSlidePage === this.allSlideData.length - 1) {
      //   const { firstSelect } = this.$route.params
      //   const secondSelect = this.slideData1[this.nowSlidePage - 2].filter(
      //     (item) => item.click
      //   )
      //   const param = [secondSelect[0], firstSelect[0]]

      //   this.slideData1.push(param)
      // } else {
      //   // 첫 슬라이드에 사용할 랜덤데이터 뽑기
      //   this.getRandomData(index1, selectedIndex)
      // }
      //   window.setTimeout(() => {
      //     if (this.nowSlidePage < 6) this.swiper.slideTo(this.nowSlidePage - 1)
      //   }, 500)
      // }
    },
    getRandomData(index = 0, selectedIndex) {
      if (index === 0) {
        const arrObj = []
        const firstItem = {
          code: this.allSlideData[0].code,
          label: this.allSlideData[0].label,
          click: false,
          index: 0
        }
        const secondItem = {
          code: this.allSlideData[1].code,
          label: this.allSlideData[1].label,
          click: false,
          index: 1
        }
        firstItem.imgSrc = this.allSlideData[0].imgSrc
        secondItem.imgSrc = this.allSlideData[1].imgSrc

        arrObj.push(firstItem)
        arrObj.push(secondItem)
        this.slideData1.push(arrObj)
      } else {
        // 최초 아닐경우
        const arrObj = []
        const firstItem = {
          code: this.allSlideData[selectedIndex].code,
          label: this.allSlideData[selectedIndex].label,
          click: false,
          index: selectedIndex
        }
        const secondItem = {
          code: this.allSlideData[2].code,
          label: this.allSlideData[2].label,
          click: false,
          index: 2
        }
        firstItem.imgSrc = this.allSlideData[selectedIndex].imgSrc
        secondItem.imgSrc = this.allSlideData[2].imgSrc

        arrObj.push(firstItem)
        arrObj.push(secondItem)
        this.slideData1.push(arrObj)
        console.warn(this.slideData1)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
