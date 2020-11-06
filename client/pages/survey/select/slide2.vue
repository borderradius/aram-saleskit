<template>
  <div class="survey-select-wrap flex items-center justify-center text-lg">
    <div class="flex-initial h-5/6 w-5/6">
      <h1 class="text-xl absolute left-0 py-2 px-6 rounded-r-full title">
        어린이 선호도 앙케이트
      </h1>
      <div>
        <p class="sub-title">
          두 그림 중 좋아하는 것을 고르세요.
        </p>
        <div v-if="isGlassOn" class="glass" />
        <Swiper ref="mySwiper" :options="swiperOptions">
          <SwiperSlide v-for="(item, index) in 5" :key="index">
            <div class="img-select-wrap flex items-center justify-between">
              <div v-animate-css.click="'rubberBand'" class="img-select-left">
                <div class="img-select-inner">
                  <div
                    v-for="(item2, index2) in slideData[index]"
                    :key="index2"
                  >
                    <div
                      v-if="!index2"
                      @click="goNext(index, index2, item2.code)"
                    >
                      <img :src="item2.imgSrc" alt="선택이미지" />
                      <span class="img-title shadow-xl">{{ item2.label }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-animate-css.click="'rubberBand'" class="img-select-right">
                <div class="img-select-inner">
                  <div
                    v-for="(item3, index3) in slideData[index]"
                    :key="index3"
                  >
                    <div
                      v-if="index3"
                      @click="goNext(index, index3, item3.code)"
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
        <div class="pagination">{{ nowSlidePage }} / 5</div>
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
import { mapState } from 'vuex'
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
      counselTestPaper: [],
      slideData: [],
      postListData: [],
      // chldId: '',
      // cnslPtclSeqno: '',
      allSlideData: [],
      exceptCode: [],
      isGlassOn: false
    }
  },
  computed: {
    ...mapState({
      childInfo: (state) => state.select.childInfo,
      allSlideDataRaw: (state) => state.select.allSlideData
    }),
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.warn('넘어온 데이터 제외해야함 : ', this.$route.params.firstSelect)
    const tempData = this._.cloneDeep(this.allSlideDataRaw)
    this.allSlideData = tempData.filter(
      (item) => item.code !== this.$route.params.firstSelect[0].code
    )
    console.log('제외되었나? : ', this.allSlideData)
    // this.chldId = this.childInfo.chldId
    // this.cnslPtclSeqno = this.childInfo.cnslPtclSeqno
    this.getRandomData()
    this.$route.params.firstSelect[0].click = false
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    /**
     * ? 상담결과 저장후 상세값 리턴함.
     * ? 리턴값을 라우팅하면서 넘김
     * ? 그러면 넘어가는 페이지에서 상세정보api 호출할 필요 없음.
     */
    goResult(params) {
      setTimeout(() => {
        this.isComplete = false
        this.$router.push({
          name: 'survey-select-result2',
          params: {
            lastSelect: params
            // apiResult: this.$route.params.apiResult,
            // apiParams: this.$route.params.apiParams
          }
        })
      }, 750)
    },
    goPrev() {
      this.nowSlidePage--
      this.swiper.slideTo(this.nowSlidePage - 1)
      this.postListData.splice(this.nowSlidePage - 1, 1)
      window.setTimeout(() => {
        this.slideData[this.nowSlidePage - 1][0].click = false
        this.slideData[this.nowSlidePage - 1][1].click = false
        this.slideData.pop()
      }, 500)
      console.warn('삭제후 전송할 데이터 : ', this.postListData)
      console.warn('슬라이드 데이터 :', this.slideData)
    },
    async goNext(index1, index2, selectedCode) {
      this.isGlassOn = true
      this.clickSound()
      // 클릭된거는 값 true로 바꿔주고 postListData에 넣기.
      const postListParam = this.makePostData(index1, index2)
      // 시퀀스값 추가
      // 마지막것만 cq-003001 로 주면 됌.
      index1 === 4
        ? (postListParam.cstpPoolNo = 'CQ-003001')
        : (postListParam.cstpPoolNo = `CQ-00200${index1 + 1}`)
      // post에 보낼 데이터 준비
      this.postListData.push(postListParam)

      // API 호출
      if (this.nowSlidePage === 5 && this.slideData.length === 5) {
        // POST 호출에 필요한 데이터 준비 - 차수, 네임 등등
        // const apiResult = {}
        const apiParams = this._.cloneDeep(this.childInfo)
        apiParams.cnslTestStepCode = 'CQ-002000'
        apiParams.counselTestPaper = this.postListData
        delete apiParams.chldNm
        delete apiParams.chldBthYmd
        // apiParams.chldId = this.$route.params.apiResult.chldId
        // apiParams.cnslPtclSeqno = this.$route.params.apiResult.cnslPtclSeqno
        apiParams.nextStepYn =
          this.slideData[index1][index2].children.length > 1 ? 'Y' : 'N' // 교과과정에 따른 Y, N 값 추가
        try {
          await this.$axios.$post('/counsel/insCounselResult', apiParams)
          // apiResult = result
        } catch (e) {
          console.log(e)
        }
        setTimeout(() => {
          this.isComplete = true
          this.goResult(
            this.slideData[this.nowSlidePage - 1][index2]
            // apiResult
          )
        }, 750)
      }
      if (this.nowSlidePage < 5) {
        this.nowSlidePage++
        if (this.nowSlidePage === 5) {
          const { firstSelect } = this.$route.params
          // firstSelect.click = false
          const secondSelect = this.slideData[this.nowSlidePage - 2].filter(
            (item) => item.click
          )
          firstSelect[0].click = false
          secondSelect[0].click = false
          const param = [secondSelect[0], firstSelect[0]]

          this.slideData.push(param)
        } else {
          // 첫 슬라이드에 사용할 랜덤데이터 뽑기
          this.getRandomData(
            index1 + 1,
            selectedCode,
            this.postListData[this.nowSlidePage - 2].nchoAsctEduCoursCd
          )
        }
        window.setTimeout(() => {
          if (this.nowSlidePage < 6) this.swiper.slideTo(this.nowSlidePage - 1)
        }, 500)
      }
      window.setTimeout(() => {
        this.isGlassOn = false
      }, 1500)
    }
  }
}
</script>

<style lang="scss" scoped>
.glass {
  width: 100%;
  height: 70vh;
  /* background: red; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
</style>
