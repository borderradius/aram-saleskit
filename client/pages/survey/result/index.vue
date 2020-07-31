<template>
  <div class="survey-result min-h-screen flex justify-center">
    <h1
      class="text-2xl absolute left-0 p-3 px-6 rounded-r-full title text-white"
    >
      어린이 선호도 앙케이트
    </h1>
    <div class="flex-initial h-5/6 w-4/5 mt-24">
      <p class="report-subject">
        앙케이트 결과 REPORT
        <small>이아람 / 2020-07-01</small>
      </p>
      <div class="report-content1">
        <h2 class="mb-4">1. 우리아이 선호 영역</h2>
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
      <div class="report-content2 mt-4 pb-2">
        <h2 class="mb-4">2. 학습 계통도</h2>
        <div class="system-chart">
          <ul class="first flex">
            <li class="flex-1 text-center">표준보육과정<br />(0세~2세)</li>
            <li class="flex-1 text-center">누리과정<br />(3세~5세)</li>
            <li class="flex-1 text-center">초등교과<br />(저학년)</li>
            <li class="flex-1 text-center">초등교과<br />(고학년)</li>
          </ul>
          <ul class="second flex mt-6">
            <li class="flex-1 text-center">의사소통</li>
            <li class="flex-1 text-center">의사소통</li>
            <li class="flex-1 text-center">국어</li>
            <li class="flex-1 text-center">
              <div class="system-chart-child on">영어</div>
              <div class="system-chart-child">국어</div>
            </li>
          </ul>
          <ul class="third flex mt-6">
            <li class="flex-1 text-center">자연탐구</li>
            <li class="flex-1 text-center">자연탐구</li>
            <li class="flex-1 text-center">
              <div class="system-chart-child">슬기로운 생활</div>
              <div class="system-chart-child">바른생활</div>
            </li>
            <li class="flex-1 text-center">
              <div class="system-chart-child">사회</div>
              <div class="system-chart-child">도덕</div>
            </li>
          </ul>
          <ul class="second flex mt-6">
            <li class="flex-1 text-center">예술경험</li>
            <li class="flex-1 text-center">예술경험</li>
            <li class="flex-1 text-center">즐거운 생활</li>
            <li class="flex-1 text-center">
              <div class="system-chart-child">미술</div>
              <div class="system-chart-child">음악</div>
            </li>
          </ul>
          <ul class="fifth flex mt-6">
            <li class="flex-1 text-center">
              <div class="system-chart-child">기본생활</div>
              <div class="system-chart-child">신체운동</div>
            </li>
            <li class="flex-1 text-center">신체운동 및 건강</li>
            <li class="flex-1 text-center">안전</li>
            <li class="flex-1 text-center">체육</li>
          </ul>
        </div>
      </div>
      <div class="report-content2 mt-4">
        <h2 class="mb-4">3. 추천 결과</h2>
      </div>
    </div>
    <n-link class="go-home" to="/">home</n-link>
    <span class="bookclub-logo">북클럽 이미지</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
