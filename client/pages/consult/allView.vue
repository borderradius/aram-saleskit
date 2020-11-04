<template>
  <div class="consult-allview">
    <h2 class="text-xl mb-10 font-bold">선호 분야 추천</h2>
    <ul class="flex flex-row justify-between product-list">
      <li
        v-for="(item, index) in prfdRcmdList"
        :key="`${item.pfrcTpCd}-${index}`"
      >
        <a href="javascript:;">
          <span class="rank font-bold text-center">{{ item.rcmdRank }}</span>
          <div class="img--wrap overflow-hidden flex items-center">
            <img :src="item.thnlUrl" alt="상품이미지" />
          </div>
          <div class="text-wrap pt-4">
            <h4 class="font-bold text-lg mb-2">{{ item.prodNm }}</h4>
            <!-- <ul class="pl-2">
              <li>{{ item.prodCmptCtt }}</li>
              <li>{{ item.lrngAraNm }}</li>
              <li>{{ item.prodAplyPric }}원</li>
            </ul> -->
          </div>
        </a>
      </li>
    </ul>
    <h2 class="text-xl mb-10 font-bold mt-10">비선호 분야 추천</h2>
    <ul class="flex flex-row justify-between product-list">
      <li
        v-for="(item, index) in notPrfdRcmdList"
        :key="`${item.pfrcTpCd}-${index}`"
      >
        <a href="javascript:;">
          <span class="rank font-bold text-center">{{ item.rcmdRank }}</span>
          <div class="img--wrap overflow-hidden flex items-center">
            <img :src="item.thnlUrl" alt="상품이미지" />
          </div>
          <div class="text-wrap pt-4">
            <h4 class="font-bold text-lg mb-2">{{ item.prodNm }}</h4>
            <!-- <ul class="pl-2">
              <li>{{ item.prodCmptCtt }}</li>
              <li>{{ item.lrngAraNm }}</li>
              <li>{{ item.prodAplyPric }}원</li>
            </ul> -->
          </div>
        </a>
      </li>
    </ul>
    <!-- <ul
      class="tab flex items-center justify-between text-center"
      @click="tabClick"
    >
      <li class="flex-1 tab-child active">전집 &amp; 디지털콘텐츠</li>
      <li class="flex-1 tab-child">소전집</li>
      <li class="flex-1 tab-child">도서</li>
    </ul>
    <ul class="flex flex-row justify-between product-list mt-8">
      <li v-for="item in 5" :key="item">
        <a href="javascript:;">
          <span v-if="item < 4" class="rank font-bold text-center">{{
            item
          }}</span>
          <span v-else class="rank-down font-bold text-center">{{ item }}</span>
          <img src="/product-img.png" alt="상품이미지" />
          <div class="text-wrap pt-4">
            <h4 class="font-bold text-lg mb-2">베이비올 영어</h4>
            <ul class="pl-2">
              <li class="py-1">전집 36권</li>
              <li class="py-1">의사소통영역(언어) 등</li>
              <li class="py-1">487,000원</li>
            </ul>
          </div>
        </a>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  layout: 'searchHistory',
  computed: {
    ...mapState({
      prfdRcmdList: (state) => state.prfdRcmdList,
      notPrfdRcmdList: (state) => state.notPrfdRcmdList
    })
  },
  async mounted() {
    try {
      const { cnslPtclSeqno, rectChldId, cstpMngrSeqno } = this.$route.params
      await this.setRecommendList({
        type: 'allbook',
        cnslPtclSeqno,
        chldId: rectChldId,
        cstpMngrSeqno
      })
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    ...mapActions({
      setRecommendList: 'setRecommendList'
    })
    // tabClick(event) {
    //   const tabList = document.getElementsByClassName('tab-child')
    //   for (const tab of tabList) {
    //     tab.classList.remove('active')
    //   }
    //   event.target.classList.add('active')
    //   // TODO: 탭 클릭 시 해당 데이터들 가져오는 api 연동해야함.
    //   console.warn(this.$route.params)
    // }
  }
}
</script>

<style lang="scss" scoped></style>
