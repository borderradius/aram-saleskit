<template>
  <div class="container1 flex relative">
    <!-- <n-link to="/consult" class="absolute btn btn-info bottom-0"
      >상담이력 바로가기</n-link
    > -->
    <!-- <keep-alive></keep-alive> -->
    <div class="flex item-centers justify-between card-wrapper">
      <n-link to="/survey" class="card flex-1 relative">
        <img
          src="/main-select1-title.png"
          alt="타이틀이미지"
          class="title-img"
        />
        <img class="bg-img" src="/main-select1.png" alt="앙케이트 바로가기" />
      </n-link>
      <n-link
        to="/product/search"
        class="card flex-initial w-2/5 ml-10 relative"
      >
        <img
          src="/main-select2-title2.png"
          alt="타이틀이미지"
          class="title-img"
        />
        <img class="bg-img" src="/main-select2.png" alt="아람전집보기" />
      </n-link>
    </div>
    <h1 class="logo">
      <img src="/main-logo.png" alt="메인로고" />
    </h1>
    <n-link to="/consult" class="go-history">
      <img src="/go-history.png" alt="상담이력 아이콘" />
    </n-link>

    <!-- <button class="btn-fullscreen" @click="fullScreen">
      전체화면
    </button> -->
    <!-- <n-link to="/survey" class="btn btn-info">앙케이트시작</n-link>
    <n-link to="/user/login" class="btn btn-info">로그인</n-link> -->
  </div>
</template>

<script>
export default {
  mounted() {
    // --------------- 원복시켜야함
    // 공통 데이터 초기화
    this.$store.dispatch('common/setOrgmList')
    // -------------
    // 셋타임, 넥스트틱, app.vue
    // this.$nextTick(() => {
    //   this.fullScreen()
    // })
    // setTimeout(() => {
    //   this.fullScreen()
    // }, 2000)
    // console.log(document.full);
    // document.addEventListener('fullscreenchange', (event) => {
    //   console.log('풀스크린이다아아', event)
    // })
    // window.isFull = false
    // console.log(isFull)
  },
  methods: {
    // fullScreen() {
    //   const elem = document.documentElement
    //   // alert(elem.)
    //   const options = {
    //     navigationUI: 'hide'
    //   }
    //   if (elem.requestFullscreen) elem.requestFullscreen(options)
    // }
  }
}
</script>

<style lang="scss" scoped>
.btn-fullscreen {
  position: absolute;
  width: 90px;
  height: 62px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  top: 1rem;
  right: 6rem;
  display: block;
  border-radius: 0.8rem;
  border: 3px solid #fff;
  color: #fff;
}
</style>
