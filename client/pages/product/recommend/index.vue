<template>
  <div>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'productRecommend',
  computed: {
    ...mapState({
      prfdRcmdList: (state) => state.prfdRcmdList,
      notPrfdRcmdList: (state) => state.notPrfdRcmdList
    })
  }
}
</script>

<style lang="scss" scoped></style>
