<template>
  <div
    class="survey-select-wrap flex items-center justify-center text-lg result1"
  >
    <div class="flex-initial h-5/6 w-5/6">
      <h1 class="text-xl absolute left-0 py-2 px-6 rounded-r-full title">
        어린이 선호도 앙케이트
      </h1>
      <div>
        <p class="sub-title flex justify-center">
          <!-- 우선선호 -->
          <img src="/first-favor.png" alt="우선선호 타이틀" />
        </p>
        <div class="img-select-wrap flex items-center justify-center result">
          <div class="img-select-left">
            <div class="img-select-inner">
              <img :src="lastItem[0].imgSrc" alt="선택이미지" />
              <span class="img-title shadow-xl">{{ lastItem[0].label }}</span>
            </div>
          </div>
        </div>
      </div>
      <img src="/bi_blue.png" class="bookclub-logo2" />
      <n-link class="go-home" to="/">
        <img src="/go-home2.png" alt="메인으로가기 아이콘" />
      </n-link>
      <button class="btn mx-auto block next-btn" @click="goSecondPhase">
        계속
      </button>
      <audio src="/saleskit_sfx_1.mp3" autoplay />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      lastItem: [{ imgSrc: '' }]
    }
  },
  computed: {
    ...mapState({
      childInfo: (state) => state.select.childInfo
    })
  },
  mounted() {
    const listsTemp = this.$route.params.lists
    let lastItemTemp = listsTemp[listsTemp.length - 1]
    lastItemTemp = lastItemTemp.filter((item) => item.click)
    lastItemTemp[0].click = false
    this.lastItem = lastItemTemp
    console.warn('childInfo ::: ', this.childInfo)
  },
  methods: {
    goSecondPhase() {
      this.$router.push({
        name: 'survey-select-slide2',
        params: {
          // exceptIndex: this.lastItem.index,
          // apiResult: this.$route.params.apiResult,
          // apiParams: this.$route.params.apiParams,
          firstSelect: this.lastItem
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.next-btn {
  background: #31a195;
  color: #fff;
  font-family: 'NanumSquareRound';
  border: 0;
  border-radius: 2rem;
  width: 140px;
}
</style>
