<template>
  <div>
    <ul
      v-if="searchType === 'allbook'"
      class="flex flex-row flex-wrap justify-between product-list"
    >
      <li v-for="item in searchList" :key="item.prodId">
        <!-- v-if="item.dgtlProdYn === 'N'" -->
        <a
          :href="`https://arambookclub.com/aram/book/${item.prodId}`"
          target="_blank"
        >
          <div class="img--wrap overflow-hidden flex items-center">
            <img :src="item.thnlUrl" :alt="item.prodNm" />
          </div>
          <div class="text-wrap pt-4">
            <span
              v-for="item2 in getSeriesNm(item.seriesCdList)"
              :key="item2.cd"
              :class="`label-${item2.cd}`"
              class="mr-2 inline-block classify-label"
              >{{ item2.cdNm }}</span
            >
            <h4 class="font-bold text-lg my-2">{{ item.prodNm }}</h4>
          </div>
        </a>
        <!-- <a
          v-else
          :href="`https://arambookclub.com/smart/book/${item.prodId}`"
          target="_blank"
        >
          <div class="img--wrap overflow-hidden flex items-center">
            <img :src="item.thnlUrl" :alt="item.prodNm" />
          </div>
          <div class="text-wrap pt-4">
            <span
              v-for="item2 in getSeriesNm(item.seriesCdList)"
              :key="item2.cd"
              :class="`label-${item2.cd}`"
              class="mr-2 inline-block classify-label"
              >{{ item2.cdNm }}</span
            >
            <h4 class="font-bold text-lg my-2">{{ item.prodNm }}</h4>
          </div>
        </a> -->
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
    <Pagination
      v-if="searchType === 'brosure'"
      :limit-page-count="searchPagination.totalPage"
      :size="10"
      @paginationClick="getData"
    />
    <modal name="brosure-image" width="90%" height="auto" scrollable>
      <img :src="brosureImgUrl" alt="브로슈어이미지" />
    </modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  layout: 'productSearch',
  data() {
    return {
      // totalCnt: 1,
      // pageCount: 1,
      brosureImgUrl: '',
      seriesList: []
    }
  },
  computed: {
    ...mapState({
      searchList: (state) => state.searchList,
      searchPagination: (state) => state.searchPagination,
      searchType: (state) => state.searchType
    })
  },
  async mounted() {
    const { result } = await this.$axios.$get('prod/series-code')
    this.seriesList = result
    // this.getSeriesNm(result)
  },
  methods: {
    ...mapActions({
      setSearchList: 'setSearchList'
    }),
    getData(nowPage) {
      console.log('pagination click!!')
      this.setSearchList({ type: 'brosure', search: { nowPage } })
    },
    getSeriesNm(seriesCdList) {
      return this.seriesList.filter((item) => {
        if (seriesCdList.includes(item.cd)) {
          return item
        }
      })
    },
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

<style lang="scss" scoped>
.label-SZ01 {
  background: #94bd41;
}
.label-SZ02 {
  background: #00a0ea;
}
.label-SZ03 {
  background: #ff4548;
}
.label-SZ99 {
  background: #999;
}

.classify-label {
  color: #fff;
  font-size: 0.8rem;
  letter-spacing: -0.24px;
  padding: 4px 9px 5px;
  vertical-align: middle;
  border-radius: 10px;
}
</style>
