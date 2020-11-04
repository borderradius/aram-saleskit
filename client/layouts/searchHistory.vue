<template>
  <div class="search-history">
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
      </div>
      <div class="right-content">
        <div class="content">
          <nuxt />
        </div>
      </div>
    </div>
    <n-link class="go-home" to="/">
      <img src="/go-home1.png" alt="메인으로가기 아이콘" />
    </n-link>
    <a href="javascript:;" class="go-back" @click="goBack">
      <img src="/go-back.png" alt="뒤로가기 아이콘" />
    </a>
    <!-- <a href="javascript:;" class="go-back" @click="goBack">back</a> -->
    <!-- <n-link class="go-home" to="/">home</n-link> -->
    <FullScreen />
    <Portrait />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          src: '/consult-on-ico.png',
          alt: '상담이력',
          class: 'first'
        },
        // {
        //   src: '/logout-off-ico.png',
        //   alt: 'ERP 바로가기',
        //   class: 'second'
        // },
        {
          src: '/logout-off-ico.png',
          alt: '로그아웃',
          class: 'third'
        }
      ]
    }
  },
  mounted() {
    const li = document.getElementsByClassName('leftMenu')
    li[0].classList.add('active')
  },
  methods: {
    goBack() {
      console.log(this.$route.params)
      if (this.$route.params.from === 'consultDetail') {
        this.$router.push({
          name: 'consult-id',
          params: {
            id: this.$route.params
          }
        })
      } else {
        this.$router.go(-1)
      }
    },
    // ...mapActions({
    //   setRecommendList: 'setRecommendList'
    // }),
    async toggleMenuActive(index) {
      this.checkNowMenu(index)
      // TODO: 메뉴 클릭 시 해당 추천도서 셋팅
      // this.setRecommendList({ kine: index })
      // 로그아웃 , erp 바로가기 넣을때 인덱스 바꿔줘야함
      if (index === 1) {
        await this.$store.dispatch('user/logout')
        this.$router.push('/user/login')
      }
      // ERP 바로가기 새탭 띄우기
      // if (index === 1) {
      //   window.open('about:blank').location.href =
      //     'http://aramerp.aramedu.net:8081/auth/erplogin'
      // }
    },
    checkNowMenu(index) {
      // leftMenu 클래스, off이미지로 초기화
      this.menuList = [
        {
          src: '/consult-off-ico.png',
          alt: '상담이력',
          class: 'first'
        },
        // {
        //   src: '/logout-off-ico.png',
        //   alt: 'ERP 바로가기',
        //   class: 'second'
        // },
        {
          src: '/logout-off-ico.png',
          alt: '로그아웃',
          class: 'third'
        }
      ]
      const li = document.getElementsByClassName('leftMenu')
      for (let i = 0; i < li.length; i++) {
        li[i].classList.remove('active')
      }

      li[index].classList.add('active')
      if (index === 0) this.menuList[index].src = '/consult-on-ico.png'
      if (index === 1) this.menuList[index].src = '/logout-on-ico.png'
      if (index === 2) this.menuList[index].src = '/logout-on-ico.png'
    }
  }
}
</script>

<style lang="scss" scoped></style>
