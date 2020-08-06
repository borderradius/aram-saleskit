<template>
  <ul class="flex flex-row justify-between product-list">
    <li v-for="item in recommendList" :key="item.prodId">
      <a href="javascript:;">
        <span class="rank font-bold text-center">1</span>
        <img :src="item.thnlUrl" alt="상품이미지" />
        <div class="text-wrap pt-4">
          <h4 class="font-bold text-lg mb-2">{{ item.prodNm }}</h4>
          <ul class="pl-2">
            <li>{{ item.prodCmptCtt }}</li>
            <li>{{ item.lrngAraNm }}</li>
            <li>{{ item.prodAplyPric }}원</li>
          </ul>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'productRecommend',
  computed: {
    ...mapState({
      recommendList: (state) => state.recommendList
    })
  }
}
</script>

<style lang="scss" scoped></style>
