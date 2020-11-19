<template>
  <div class="product-search">
    <div class="top-area">
      <span class="logo" />
    </div>
    <div class="flex">
      <div class="left-menu">
        <ul>
          <li
            v-for="(item, index) in menuList"
            :key="item.alt"
            class="leftMenu"
            @click="toggleMenuActive(index)"
          >
            <a href="javascript:;" class="flex items-center">
              <img :src="item.src" :alt="item.alt" :class="item.class" />
              <span>
                {{ item.alt }}
              </span>
            </a>
          </li>
        </ul>
        <a href="javascript:;" class="go-signup" @click="goTrial"
          >스마트북 체험</a
        >
        <!-- <n-link to="/" class="go-signup">디지털콘텐츠 체험</n-link> -->
      </div>
      <div class="right-content">
        <div v-if="type !== 'trial'" class="search-area">
          <div v-if="isSearch" class="search-form">
            <div class="search-form-input flex items-center">
              <span class="text-gray-700 font-bold mr-4">상품명</span>
              <input
                v-model="searchParam.searchProdNm"
                type="text"
                class="p-2"
              />
            </div>
          </div>
          <!-- <div v-if="!isSearch" class="search-form-checkbox"> -->
          <div v-if="false" class="search-form-checkbox">
            <h4 class="text-gray-700 font-bold mb-4">구매가격</h4>
            <div class="checkbox-wrap flex flex-row flex-wrap justify-between">
              <label
                v-for="item in purchasePriceList"
                :key="item.value"
                :for="item.value"
                class="checkbox-label brosure my-2 text-left"
              >
                <input
                  :id="item.value"
                  v-model="tempPurchasePrice"
                  :value="item.value"
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-main-green -mt-1"
                />
                <span class="ml-2 text-gray-700">{{ item.label }}</span>
              </label>
            </div>
            <button class="search-btn focus:outline-none" @click="goSearch">
              검색
            </button>
          </div>
          <div v-if="isSearch" class="search-form-checkbox">
            <h4 class="text-gray-700 font-bold mb-4">전집 상품 분류</h4>
            <div class="checkbox-wrap flex flex-row flex-wrap justify-between">
              <label
                v-for="item in seriesCode"
                :key="item.cd"
                :for="item.cd"
                class="checkbox-label my-2 text-left"
              >
                <input
                  :id="item.cd"
                  v-model="seriesCdList"
                  :value="item.cd"
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-main-green -mt-1"
                />
                <span class="ml-2 text-gray-700">{{ item.cdNm }}</span>
              </label>
            </div>
            <!-- <h4 class="text-gray-700 font-bold my-4">학습영역</h4>
            <div class="checkbox-wrap flex flex-row flex-wrap justify-between">
              <label
                v-for="item in searchLrngAraList"
                :key="item.value"
                :for="item.value"
                class="checkbox-label my-2 text-left"
              >
                <input
                  :id="item.value"
                  v-model="tempStudyArea"
                  :value="item.value"
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-main-green -mt-1"
                />
                <span class="ml-2 text-gray-700">{{ item.label }}</span>
              </label>
            </div> -->
            <button class="search-btn focus:outline-none" @click="goSearch">
              검색
            </button>
          </div>
        </div>
        <div
          v-if="type !== 'trial'"
          :class="[!isSearch ? 'brosure-content' : '']"
          class="content"
        >
          <nuxt />
        </div>
        <div v-if="type === 'trial'" class="trial-area">
          <nuxt />
        </div>
      </div>
    </div>
    <n-link class="go-home" to="/">
      <img src="/go-home1.png" alt="메인으로가기 아이콘" />
    </n-link>
    <FullScreen />
    <Portrait />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      searchParam: {
        searchLrngAraList: []
        // seriesCdList: []
      },
      tempStudyArea: [],
      tempStudyAge: [],
      tempPurchasePrice: [],
      purchasePriceList: [
        {
          label: '40만원 초과',
          value: '40'
        },
        {
          label: '30~40만원',
          value: '3040'
        },
        {
          label: '26~29만원',
          value: '2629'
        },
        {
          label: '20~25만원',
          value: '2025'
        }
      ],
      seriesCode: [],
      seriesCdList: [],
      searchAgeList: [
        {
          label: '표준보육(0세~2세)',
          value: 'BC0101'
        },
        {
          label: '누리과정(3세~5세)',
          value: 'BC0102'
        },
        {
          label: '초등',
          value: 'BC0103'
        }
      ],
      searchLrngAraList: [
        {
          label: '의사소통 영역',
          value: 'AC0101'
        },
        {
          label: '자연탐구 영역',
          value: 'AC0102'
        },
        {
          label: '사회관계 영역',
          value: 'AC0103'
        },
        {
          label: '예술경험 영역',
          value: 'AC0104'
        },
        {
          label: '기본생활 영역',
          value: 'AC0105'
        },
        {
          label: '신체운동 영역',
          value: 'AC0106'
        }
      ],
      menuList: [
        {
          src: '/allbook-on-ico.png',
          alt: '아람 전집',
          class: 'first'
        },
        // {
        //   src: '/smallbook-off-ico.png',
        //   alt: '소전집',
        //   class: 'second'
        // },
        {
          src: '/brosure-off-ico.png',
          alt: '브로슈어',
          class: 'second'
        }
        // {
        //   src: '/brosure-off-ico.png',
        //   alt: '스마트북 체험',
        //   class: 'third'
        // }
      ],
      isSearch: true,
      type: 'allbook'
    }
  },
  async mounted() {
    const { result } = await this.$axios.$get('prod/series-code')
    result.length = 3
    this.seriesCode = result

    const li = document.getElementsByClassName('leftMenu')
    li[0].classList.add('active')
    if (this.$route.fullPath.includes('trial')) {
      this.type = 'trial'
    } else {
      this.type = 'allbook'
      await this.setSearchList({ type: 'allbook', search: this.searchParam })
    }
  },
  methods: {
    ...mapActions({
      setSearchList: 'setSearchList'
    }),
    async goSearch() {
      // this.searchParam.searchLrngAraList = this.tempStudyArea.join(',')
      this.searchParam.seriesCdList = this.seriesCdList.join(',')
      try {
        await this.setSearchList({ type: this.type, search: this.searchParam })
      } catch (e) {
        console.log(e)
      }
    },
    toggleMenuActive(index) {
      this.checkNowMenu(index)
      switch (index) {
        case 0:
          this.type = 'allbook'
          break
        // case 2:
        //   this.type = 'trial'
        //   break
        default:
          this.type = 'brosure'
          break
      }
      this.setSearchList({ type: this.type, search: this.searchParam })
      // index === 1 ? (this.isSearch = false) : (this.isSearch = true)
      if (index === 0) {
        this.isSearch = true
        this.$router.push({
          name: 'product-search'
        })
      }
      if (index === 1) {
        this.isSearch = false
        this.$router.push({
          name: 'product-search'
        })
      }
      // if (index === 2) {
      //   this.isSearch = true
      //   this.$router.push({
      //     name: 'product-search-trial'
      //   })
      // }
    },
    goTrial() {
      this.isSearch = false
      this.type = 'trial'
      this.$router.push({
        name: 'product-search-trial'
      })
    },
    checkNowMenu(index) {
      // leftMenu 클래스, off이미지로 초기화
      this.menuList = [
        {
          src: '/allbook-off-ico.png',
          alt: '아람 전집',
          class: 'first'
        },
        // {
        //   src: '/smallbook-off-ico.png',
        //   alt: '소전집',
        //   class: 'second'
        // },
        {
          src: '/brosure-off-ico.png',
          alt: '브로슈어',
          class: 'second'
        }
        // {
        //   src: '/brosure-off-ico.png',
        //   alt: '스마트북 체험',
        //   class: 'third'
        // }
      ]
      const li = document.getElementsByClassName('leftMenu')
      for (let i = 0; i < li.length; i++) {
        li[i].classList.remove('active')
      }

      li[index].classList.add('active')
      if (index === 0) this.menuList[index].src = '/allbook-on-ico.png'
      // if (index === 1) this.menuList[index].src = '/smallbook-on-ico.png'
      if (index === 1) this.menuList[index].src = '/brosure-on-ico.png'
    }
  }
}
</script>

<style lang="scss" scoped></style>
