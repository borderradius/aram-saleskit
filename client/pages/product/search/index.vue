<template>
  <div>
    <ul
      v-if="searchType === 'allbook'"
      class="flex flex-row flex-wrap justify-between product-list"
    >
      <li v-for="item in searchList" :key="item.prodId">
        <a
          v-if="item.dgtlProdYn === 'N'"
          :href="`https://arambookclub.com/aram/book/${item.prodId}`"
          target="_blank"
        >
          <div class="img--wrap overflow-hidden flex items-center">
            <img :src="item.thnlUrl" :alt="item.prodNm" />
          </div>
          <div class="text-wrap pt-4">
            <h4 class="font-bold text-lg mb-2">{{ item.prodNm }}</h4>
          </div>
        </a>
        <a
          v-else
          :href="`https://arambookclub.com/smart/book/${item.prodId}`"
          target="_blank"
        >
          <div class="img--wrap overflow-hidden flex items-center">
            <img :src="item.thnlUrl" :alt="item.prodNm" />
          </div>
          <div class="text-wrap pt-4">
            <h4 class="font-bold text-lg mb-2">{{ item.prodNm }}</h4>
          </div>
        </a>
      </li>
    </ul>
    <ul
      v-if="searchType === 'brosure'"
      class="flex flex-row flex-wrap product-list-brosure"
    >
      <li v-for="item in searchList" :key="item.brchSeqno" class="flex">
        <a href="javascript:;" @click="popImage(item.brchFilePathNm)">
          <img :src="item.brchFilePathNm" :alt="item.brchNm" />
          <div class="text-wrap pt-4">
            <h4 class="font-bold text-lg mb-2">{{ item.brchNm }}</h4>
          </div>
        </a>
      </li>
    </ul>
    <modal name="brosure-image" width="90%" height="auto" scrollable>
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
