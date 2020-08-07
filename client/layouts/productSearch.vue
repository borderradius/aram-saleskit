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
        <n-link to="/" class="go-signup">디지털콘텐츠 체험</n-link>
      </div>
      <div class="right-content">
        <div v-if="isSearch" class="search-area">
          <div class="search-form">
            <div class="search-form-input flex items-center">
              <span class="text-gray-700 font-bold mr-4">상품명</span>
              <input v-model="searchParam.word" type="search" class="p-2" />
            </div>
          </div>
          <div class="search-form-checkbox">
            <h4 class="text-gray-700 font-bold mb-4">학습영역</h4>
            <div class="checkbox-wrap flex flex-row flex-wrap justify-between">
              <label
                v-for="item in sturyAreaList"
                :key="item.value"
                :for="item.value"
                class="checkbox-label my-2 text-center"
              >
                <input
                  :id="item.value"
                  v-model="searchParam.studyArea"
                  :value="item.value"
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-main-green -mt-1"
                />
                <span class="ml-2 text-gray-700">{{ item.label }}</span>
              </label>
            </div>
            <button class="search-btn" @click="goSearch">검색</button>
          </div>
        </div>
        <div :class="[!isSearch ? 'brosure-content' : '']" class="content">
          <nuxt />
        </div>
      </div>
    </div>
    <n-link class="go-home" to="/">home</n-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      searchParam: {
        studyArea: []
      },
      tempStudyArea: [],
      sturyAreaList: [
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
          alt: '전집 & 디지털콘텐츠',
          class: 'first'
        },
        {
          src: '/smallbook-off-ico.png',
          alt: '소전집',
          class: 'second'
        },
        {
          src: '/brosure-off-ico.png',
          alt: '브로슈어',
          class: 'second'
        }
      ],
      isSearch: true
    }
  },
  async mounted() {
    const li = document.getElementsByClassName('leftMenu')
    li[0].classList.add('active')
    await this.setSearchList('allbook')
  },
  methods: {
    ...mapActions({
      setSearchList: 'setSearchList'
    }),
    goSearch() {
      // TODO: 검색 api 연동
      console.log(this.searchParam.studyArea.join(','))
    },
    toggleMenuActive(index) {
      this.checkNowMenu(index)
      // TODO: 메뉴 클릭 시 해당 추천도서 셋팅
      let type = ''
      switch (index) {
        case 0:
          type = 'allbook'
          break
        case 1:
          type = 'smallbook'
          break
        default:
          type = 'brosure'
          break
      }
      this.setSearchList(type)
      index === 2 ? (this.isSearch = false) : (this.isSearch = true)
    },
    checkNowMenu(index) {
      // leftMenu 클래스, off이미지로 초기화
      this.menuList = [
        {
          src: '/allbook-off-ico.png',
          alt: '전집 & 디지털콘텐츠',
          class: 'first'
        },
        {
          src: '/smallbook-off-ico.png',
          alt: '소전집',
          class: 'second'
        },
        {
          src: '/brosure-off-ico.png',
          alt: '브로슈어',
          class: 'second'
        }
      ]
      const li = document.getElementsByClassName('leftMenu')
      for (let i = 0; i < li.length; i++) {
        li[i].classList.remove('active')
      }

      li[index].classList.add('active')
      if (index === 0) this.menuList[index].src = '/allbook-on-ico.png'
      if (index === 1) this.menuList[index].src = '/smallbook-on-ico.png'
      if (index === 2) this.menuList[index].src = '/brosure-on-ico.png'
    }
  }
}
</script>

<style lang="scss" scoped></style>
