<template>
  <div class="survey-detail">
    <div class="customer-info">
      <h2>1. 고객정보</h2>
      <div class="table w-full">
        <ul class="thead flex">
          <li class="flex-auto">#</li>
          <li class="flex-auto">자녀이름</li>
          <li class="flex">전화번호</li>
          <li class="flex">생년월일</li>
          <li class="flex">나이</li>
          <li class="flex">구매</li>
          <li class="flex">상담일자</li>
        </ul>
        <ul class="tbody flex">
          <li class="flex-auto">99</li>
          <li class="flex-auto">이아람</li>
          <li class="flex">010-1234-1234</li>
          <li class="flex">2012-12-12</li>
          <li class="flex">만 8세</li>
          <li class="flex">O</li>
          <li class="flex">2020-05-15</li>
        </ul>
      </div>
    </div>
    <div class="survey-result">
      <h2>2. 앙케이트 결과 <small>(참여일 : 2020-05-10)</small></h2>
      <ul class="flex flex-row flex-wrap justify-between">
        <li class="best">
          <div class="img-wrap">
            <img src="/sk_a_1.png" alt="앙케이트이미지" />
          </div>
          <div class="text-wrap flex justify-between items-center mt-2">
            <span>I. 기본 생활 영역</span>
            <span class="score">1점</span>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img src="/sk_b_4.png" alt="앙케이트이미지" />
          </div>
          <div class="text-wrap flex justify-between items-center mt-2">
            <span>II. 신체 운동 영역</span>
            <span class="score">1점</span>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img src="/sk_f_3.png" alt="앙케이트이미지" />
          </div>
          <div class="text-wrap flex justify-between items-center mt-2">
            <span>III. 의사 소통 영역</span>
            <span class="score">1점</span>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img src="/sk_c_3.png" alt="앙케이트이미지" />
          </div>
          <div class="text-wrap flex justify-between items-center mt-2">
            <span>IV. 사회 관계 영역</span>
            <span class="score">1점</span>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img src="/sk_d_1.png" alt="앙케이트이미지" />
          </div>
          <div class="text-wrap flex justify-between items-center mt-2">
            <span>V. 예술 경험 영역</span>
            <span class="score">1점</span>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img src="/sk_e_3.png" alt="앙케이트이미지" />
          </div>
          <div class="text-wrap flex justify-between items-center mt-2">
            <span>VI. 자연 탐구 영역</span>
            <span class="score">1점</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="recommend-result">
      <h2>3. 추천 결과</h2>
    </div>
    <div class="payment-info">
      <h2>4. 구매 정보</h2>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'searchHistory',
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped></style>
