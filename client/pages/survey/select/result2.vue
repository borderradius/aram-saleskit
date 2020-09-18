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
          <!-- 최종선호 -->
          <img src="/last-favor.png" alt="최종선호" />
        </p>
        <div class="img-select-wrap flex items-center justify-center result">
          <div class="img-select-left">
            <div class="img-select-inner">
              <img :src="lastItem.imgSrc" alt="선택이미지" />
              <span class="img-title shadow-xl">{{ lastItem.label }}</span>
            </div>
          </div>
        </div>
      </div>
      <img src="/bi_blue.png" class="bookclub-logo2" />
      <n-link class="go-home" to="/">
        <img src="/go-home2.png" alt="메인으로가기 아이콘" />
      </n-link>
      <button
        v-if="lastItem.children.length === 1"
        class="btn mx-auto block next-btn"
        @click="goResultPhase"
      >
        결과분석
      </button>
      <button v-else class="btn mx-auto block next-btn" @click="goThirdPhase">
        교과선호
      </button>
      <audio src="/saleskit_sfx_1.mp3" autoplay />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastItem: { children: [] }
    }
  },
  mounted() {
    // 우선선호1 vs 우선선호2 중에 선택된 최종선호
    const { lastSelect } = this.$route.params
    this.lastItem = lastSelect
  },
  methods: {
    /**
     * * 앙케이트 결과 페이지로 넘어감.
     * ? 결과api 호출할때 필요한 파라미터 넘겨줘야함.
     */
    goResultPhase() {
      this.$router.push({
        name: 'survey-result',
        params: {
          apiResult: this.$route.params.apiResult,
          apiParams: this.$route.params.apiParams
        }
      })
    },
    goThirdPhase() {
      this.$router.push({
        name: 'survey-select-slide3',
        params: {
          apiResult: this.$route.params.apiResult,
          children: this.lastItem.children,
          eduCode: this.lastItem.code,
          apiParams: this.$route.params.apiParams
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
