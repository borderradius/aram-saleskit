<template>
  <ul class="flex flex-row flex-wrap justify-between product-list">
    <li v-for="item in 5" :key="item">
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
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'productSearch',
  computed: {
    ...mapState({
      searchList: (state) => state.searchList
    })
  }
}
</script>

<style lang="scss" scoped></style>
