<template>
  <div>
    <ul
      v-if="searchType !== 'brosure'"
      class="flex flex-row flex-wrap justify-between product-list"
    >
      <li v-for="item in searchList" :key="item.brchSeqno">
        <a href="javascript:;">
          <span class="rank font-bold text-center">{{ item.brchNo }}</span>
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
    <ul v-else class="flex flex-row flex-wrap product-list-brosure">
      <li v-for="item in searchList" :key="item.brchSeqno" class="flex">
        <a href="javascript:;" @click="popImage(item.brchFilePathNm)">
          <img :src="item.brchFilePathNm" :alt="item.brchNm" />
          <div class="text-wrap pt-4">
            <h4 class="font-bold text-lg mb-2">{{ item.brchNm }}</h4>
          </div>
        </a>
      </li>
    </ul>
    <modal name="brosure-image" width="90%" height="auto">
      <img :src="brosureImgUrl" alt="브로슈어이미지" />
    </modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'productSearch',
  data() {
    return {
      brosureImgUrl: ''
    }
  },
  computed: {
    ...mapState({
      searchList: (state) => state.searchList,
      searchType: (state) => state.searchType
    })
  },
  methods: {
    popImage(imgUrl) {
      // console.log(imgUrl)
      this.show()
      this.brosureImgUrl = imgUrl
    },
    show() {
      this.$modal.show('brosure-image')
    },
    hide() {
      this.$modal.hide('brosure-image')
    }
  }
}
</script>

<style lang="scss" scoped></style>
