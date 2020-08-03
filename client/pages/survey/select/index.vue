<template>
  <div class="survey-select-wrap flex items-center justify-center text-lg">
    <div class="flex-initial h-5/6 w-4/5">
      <h1
        class="text-2xl absolute left-0 p-3 px-6 rounded-r-full title text-white"
      >
        어린이 선호도 앙케이트
      </h1>
      <div>
        <p class="sub-title">두 그림 중 좋아하는 것을 고르세요.</p>
        <Swiper ref="mySwiper" :options="swiperOptions">
          <SwiperSlide v-for="item in 9" :key="item">
            <div class="img-select-wrap flex items-center justify-between">
              <div class="img-select-left">
                <div class="img-select-inner" @click="doClick">
                  <img src="/sk_a_1.png" alt="선택이미지" />
                </div>
              </div>
              <div class="img-select-right">
                <div class="img-select-inner" @click="doClick">
                  <img src="/sk_a_2.png" alt="선택이미지" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="pagination">{{ nowSlidePage }} / 9</div>
      </div>
    </div>
    <n-link class="go-home" to="/">home</n-link>
    <span class="bookclub-logo">북클럽 이미지</span>
    <n-link class="go-main" to="/">다음에 하기</n-link>
    <Loading v-if="isComplete" />
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
        allowTouchMove: false
      },
      isComplete: false
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    doClick() {
      if (this.nowSlidePage === 9) {
        this.isComplete = true
        const $this = this
        window.setTimeout(function() {
          this.isComplete = false
          $this.$router.push('/survey/result')
        }, 2000)
        return
      }
      if (this.nowSlidePage !== 9) this.nowSlidePage++
      if (this.nowSlidePage < 10) this.swiper.slideTo(this.nowSlidePage - 1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
