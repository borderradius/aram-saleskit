<template>
  <div class="product-recommend">
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
        <n-link to="/user/signup" class="go-signup">아람북클럽 회원가입</n-link>
      </div>
      <div class="right-content">
        <div class="title">
          <img
            class="inline-block"
            src="/doublequote-left.png"
            alt="더블쿼트"
          />
          <p class="inline-block">
            우리 아이의 관심사에 <strong>딱!</strong> 맞는 아람북스를
            <strong>추천</strong> 합니다.
          </p>
          <img
            class="inline-block"
            src="/doublequote-right.png"
            alt="더블쿼트"
          />
        </div>
        <div class="content">
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
          src: '/book-off-ico.png',
          alt: '도서',
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
          src: '/book-off-ico.png',
          alt: '도서',
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
      if (index === 2) this.menuList[index].src = '/book-on-ico.png'
    }
  }
}
</script>

<style lang="scss" scoped></style>
