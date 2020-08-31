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
        <Swiper ref="mySwiper" :options="swiperOptions">
          <SwiperSlide v-for="(item, index) in slideData" :key="index">
            <div class="img-select-wrap flex items-center justify-between">
              <div v-animate-css.click="'rubberBand'" class="img-select-left">
                <div
                  class="img-select-inner"
                  @click.once="
                    doClick(
                      item.cnslPoolSeqno,
                      item.answerList[0].cnslQstAnsrEduCd
                    )
                  "
                >
                  <img
                    :src="item.answerList[0].cnslQstAnsrImage"
                    alt="선택이미지"
                  />
                </div>
                <span class="absolute w-full text-center pt-2 text-white">{{
                  item.answerList[0].cnslQstAnsrEduNm
                }}</span>
              </div>
              <div v-animate-css.click="'rubberBand'" class="img-select-right">
                <div
                  class="img-select-inner"
                  @click.once="
                    doClick(
                      item.cnslPoolSeqno,
                      item.answerList[1].cnslQstAnsrEduCd
                    )
                  "
                >
                  <img
                    :src="item.answerList[1].cnslQstAnsrImage"
                    alt="선택이미지"
                  />
                </div>
                <span class="absolute w-full text-center pt-2 text-white">
                  {{ item.answerList[1].cnslQstAnsrEduNm }}</span
                >
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="pagination">{{ nowSlidePage }} / 9</div>
      </div>
    </div>
    <!-- <a href="javascript:;" class="go-back" @click="goBack">
      <img src="/go-back.png" alt="뒤로가기 아이콘" />
    </a> --><img src="/bi_blue.png" class="bookclub-logo2" />
    <!-- <a href="javascript:;" class="go-back" @click="goBack">back</a> -->
    <n-link class="go-home" to="/">
      <img src="/go-home2.png" alt="메인으로가기 아이콘" />
    </n-link>
    <!-- <span class="bookclub-logo">북클럽 이미지</span> -->
    <img src="/main-logo.png" class="bookclub-logo2" />
    <n-link class="go-main" to="/">다음에 하기</n-link>
    <Loading v-if="isComplete" />
    <audio src="/file_example_MP3_700KB.mp3" autoplay />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Loading from '../../../components/loading'

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
      slideData: [],
      counselTestPaper: []
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  async mounted() {
    try {
      const params = this._.cloneDeep(this.$route.params)
      const { result } = await this.$axios.$get('/counsel/testpaper', {
        params
      })
      console.log(result)
      this.slideData = result.counselTestPaper
      this.slideData.cstpMngrSeqno = result.cstpMngrSeqno
      this.slideData.agerCoursCd = result.agerCoursCd
    } catch (e) {
      console.log(e)
    }
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
          name: 'survey-result',
          params
        })
      }, 2000)
    },
    async doClick(cnslPoolSeqno, choicedAnswerEduCd) {
      this.clickSound()
      // 클릭할 때 마다 counselTestPaper에 데이터 푸쉬
      this.counselTestPaper.push({
        cnslPoolSeqno,
        choicedAnswerEduCd
      })
      if (this.nowSlidePage === 9) {
        const params = this.$route.params
        params.cstpMngrSeqno = this.slideData.cstpMngrSeqno
        params.agerCoursCd = this.slideData.agerCoursCd
        params.counselTestPaper = this.counselTestPaper
        try {
          // this.isComplete = true
          const { result } = await this.$axios.$post(
            '/counsel/testpaper/content',
            params
          )
          setTimeout(() => {
            this.isComplete = true
            this.goResult(result)
            // console.log('9일때 settime out ')
            // this.isComplete = true
            // this.goResult(result)
            // this.isComplete = false
            // this.$router.push({
            //   name: 'survey-result',
            //   params: result
            // })
          }, 1000)
        } catch (e) {
          console.log(e)
        }
      }
      if (this.nowSlidePage !== 9) this.nowSlidePage++
      window.setTimeout(() => {
        if (this.nowSlidePage < 10) this.swiper.slideTo(this.nowSlidePage - 1)
      }, 500)
    },
    clickSound() {
      const audio = new Audio('/ddiyong2.mp3')
      audio.play()
    }
  }
}
</script>

<style lang="scss" scoped>
/* .swiper {
  width: 300px;
  padding: 50px; */
/* background-color: $module-bg; */

/* .swiper-slide {
    background-position: 50%;
    background-size: cover;
    width: 100%;
  } */
/* } */
</style>
