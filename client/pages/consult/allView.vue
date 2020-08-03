<template>
  <div class="consult-allview">
    <ul
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
              <li>전집 36권</li>
              <li>의사소통영역(언어) 등</li>
              <li>487,000원</li>
            </ul>
          </div>
          <!-- {{ recommendList }} -->
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'searchHistory',
  methods: {
    tabClick(event) {
      const tabList = document.getElementsByClassName('tab-child')
      for (const tab of tabList) {
        tab.classList.remove('active')
      }
      event.target.classList.add('active')
      // TODO: 탭 클릭 시 해당 데이터들 가져오는 api 연동해야함.
    }
  }
}
</script>

<style lang="scss" scoped></style>
