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
        <n-link to="/user/signup" class="go-signup">디지털콘텐츠 체험</n-link>
      </div>
      <div class="right-content">
        <div class="search-area">
          <div class="search-form">
            <div class="search-form-input flex items-center">
              <span class="text-gray-700 font-bold mr-4">상품명</span>
              <input type="text" class="p-2" />
            </div>
          </div>
          <div class="search-form-checkbox">
            <h4 class="text-gray-700 font-bold mb-4">학습영역</h4>
            <div class="checkbox-wrap flex flex-row flex-wrap justify-between">
              <label
                v-for="item in 6"
                :key="item"
                :for="`searchCheck${item}`"
                class="checkbox-label my-2 text-center"
              >
                <input
                  :id="`searchCheck${item}`"
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-main-green -mt-1"
                />
                <span class="ml-2 text-gray-700">{{ item }}의사소통 영역</span>
              </label>
            </div>
            <button class="search-btn">검색</button>
          </div>
        </div>
        <div class="content">
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
        </div>
      </div>
    </div>
    <n-link class="go-home" to="/">home</n-link>
  </div>
</template>

<script>
export default {
  layout: 'productSearch',
  data() {
    return {
      menuList: [
        {
          src: '/allbook-on-ico.png',
          alt: '아람 전집',
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
    }
  },
  mounted() {
    const li = document.getElementsByClassName('leftMenu')
    li[0].classList.add('active')
  },
  methods: {
    toggleMenuActive(index) {
      this.checkNowMenu(index)
      // TODO: 메뉴 클릭 시 해당 추천도서 셋팅
    },
    checkNowMenu(index) {
      // leftMenu 클래스, off이미지로 초기화
      this.menuList = [
        {
          src: '/allbook-off-ico.png',
          alt: '아람 전집',
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
