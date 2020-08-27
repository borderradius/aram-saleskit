<template>
  <div class="container1 flex relative">
    <!-- <n-link to="/consult" class="absolute btn btn-info bottom-0"
      >상담이력 바로가기</n-link
    > -->
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
          src="/main-select2-title.png"
          alt="타이틀이미지"
          class="title-img"
        />
        <img class="bg-img" src="/main-select2.png" alt="아람책더보기" />
      </n-link>
    </div>
    <h1 class="logo">
      <img src="/main-logo.png" alt="메인로고" />
    </h1>
    <n-link to="/consult" class="go-history">
      <img src="/go-history.png" alt="상담이력 아이콘" />
    </n-link>
    <button class="btn inline-block absolute bottom-0" @click="fullScreen">
      fullscreen
    </button>
    <!-- <n-link to="/survey" class="btn btn-info">앙케이트시작</n-link>
    <n-link to="/user/login" class="btn btn-info">로그인</n-link> -->
  </div>
</template>

<script>
export default {
  // mounted() {
  //   console.log(document.body)
  // },
  methods: {
    fullScreen() {
      console.log(document.body)
      // document.body.requestFullscreen()
    }
  }
}
</script>

<style lang="scss" scoped></style>
