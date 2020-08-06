<template>
  <ul class="flex flex-row justify-between product-list">
    <li v-for="item in 3" :key="item">
      <a href="javascript:;">
        <span class="rank font-bold text-center">{{ item }}</span>
        <img src="/product-img.png" alt="상품이미지" />
        <div class="text-wrap pt-4">
          <h4 class="font-bold text-lg mb-2">베이비올 영어</h4>
          <ul class="pl-2">
            <li>전집 36권</li>
            <li>의사소통영역(언어) 등</li>
            <li>487,000원</li>
          </ul>
        </div>
        <!-- {{ recommendList }} -->
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
  },
  mounted() {
    console.warn(this.$route.params)
  }
}
</script>

<style lang="scss" scoped></style>
