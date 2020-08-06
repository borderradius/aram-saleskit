<template>
  <div class="container1 flex relative">
    <n-link to="/consult" class="absolute btn btn-info"
      >상담이력 바로가기</n-link
    >
    <div class="flex item-centers justify-between card-wrapper">
      <n-link to="/survey" class="card flex-1">
        <p>어린이 선호도 앙케이트</p>
        <h3>우리아이가 보고 싶어하는 책은?</h3>
        <span>알아보기</span>
      </n-link>
      <n-link to="/product/search" class="card flex-initial w-2/5 ml-14">
        <span>아람책 더보기</span>
      </n-link>
    </div>
    <!-- <n-link to="/survey" class="btn btn-info">앙케이트시작</n-link>
    <n-link to="/user/login" class="btn btn-info">로그인</n-link> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
