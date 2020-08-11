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
    <div class="survey-result-wrap">
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
      <div class="allbook-recommend-result">
        <div class="title flex justify-between p-4 items-center">
          <span class="text-md">
            <img
              src="/allbook-off-ico.png"
              alt="전집아이콘"
              class="inline-block -mt-1 mr-2"
            />
            전집 &amp; 디지털 콘텐츠</span
          >
          <button
            class="all-view-btn text-white rounded-full px-4 py-2 text-sm"
            @click="goAllView"
          >
            모두보기
            <font-awesome-icon
              :icon="['fas', 'chevron-right']"
              class="chevron-right ml-1"
            />
          </button>
        </div>
        <ul class="flex p-4">
          <li>
            <div class="img-wrap relative">
              <img src="/rank-bg.png" alt="랭킹" class="absolute ranking" />
              <img src="/sk_a_1.png" alt="콘텐츠이미지" class="rounded-lg" />
            </div>
            <h4 class="mt-2">아람 베이비올 영어</h4>
          </li>
          <li class="mx-4">
            <div class="img-wrap relative">
              <img src="/rank-bg.png" alt="랭킹" class="absolute ranking" />
              <img src="/sk_a_1.png" alt="콘텐츠이미지" class="rounded-lg" />
            </div>
            <h4 class="mt-2">뮤 널서리라임</h4>
          </li>
          <li>
            <div class="img-wrap relative">
              <img
                src="/rank-third-bg.png"
                alt="랭킹"
                class="absolute ranking"
              />
              <img src="/sk_a_1.png" alt="콘텐츠이미지" class="rounded-lg" />
            </div>
            <h4 class="mt-2">자연이랑</h4>
          </li>
        </ul>
      </div>
      <div class="allbook-recommend-result mt-4">
        <div class="title flex justify-between p-4 items-center">
          <span class="text-md">
            <img
              src="/smallbook-off-ico.png"
              alt="소전집아이콘"
              class="inline-block -mt-1 mr-2"
            />
            소전집</span
          >
          <button
            class="all-view-btn text-white rounded-full px-4 py-2 text-sm"
            @click="goAllView"
          >
            모두보기
            <font-awesome-icon
              :icon="['fas', 'chevron-right']"
              class="chevron-right ml-1"
            />
          </button>
        </div>
        <p class="p-8 text-center">업데이트 예정입니다.</p>
        <!-- <ul class="flex p-4">
          <li>
            <div class="img-wrap relative">
              <img src="/rank-bg.png" alt="랭킹" class="absolute ranking" />
              <img src="/sk_a_1.png" alt="콘텐츠이미지" class="rounded-lg" />
            </div>
            <h4 class="mt-2">아람 베이비올 영어</h4>
          </li>
          <li class="mx-4">
            <div class="img-wrap relative">
              <img src="/rank-bg.png" alt="랭킹" class="absolute ranking" />
              <img src="/sk_a_1.png" alt="콘텐츠이미지" class="rounded-lg" />
            </div>
            <h4 class="mt-2">뮤 널서리라임</h4>
          </li>
          <li>
            <div class="img-wrap relative">
              <img
                src="/rank-third-bg.png"
                alt="랭킹"
                class="absolute ranking"
              />
              <img src="/sk_a_1.png" alt="콘텐츠이미지" class="rounded-lg" />
            </div>
            <h4 class="mt-2">자연이랑</h4>
          </li>
        </ul> -->
      </div>
    </div>
    <div class="payment-info">
      <h2>4. 구매 정보</h2>
      <div class="allbook-recommend-result mt-4">
        <div class="table w-full">
          <ul class="thead flex rounded-tl-lg rounded-tr-lg">
            <li class="flex-1">구매일</li>
            <li class="flex-1">전화번호</li>
            <li class="flex-1">판매자</li>
          </ul>
          <ul class="tbody flex">
            <li class="flex-1">2020-06-30</li>
            <li class="flex-1">010-1234-1234</li>
            <li class="flex-1">이아람(ERP-ID)</li>
          </ul>
          <ul class="thead flex">
            <li class="flex-auto">제품명</li>
            <li class="flex w-1/3">구분</li>
          </ul>
          <ul class="tbody flex">
            <li class="flex-auto">베이비올 영어 디지털 콘텐츠</li>
            <li class="flex w-1/3">디지털 콘텐츠</li>
          </ul>
          <ul class="thead flex">
            <li class="flex-1">결제방법</li>
            <li class="flex-1">구매가</li>
            <li class="flex-1">배송비</li>
          </ul>
          <ul class="tbody flex">
            <li class="flex-1">복합결제</li>
            <li class="flex-1">
              <dl class="flex flex-row flex-wrap justify-between">
                <dt class="w-1/2">상품가 (a)</dt>
                <dd class="w-1/2 text-right pr-4">100,000</dd>
                <dt class="w-1/2">포인트 (b)</dt>
                <dd class="w-1/2 text-right pr-4">50,000</dd>
                <dt class="w-1/2">실결제가 (a-b)</dt>
                <dd class="w-1/2 text-right pr-4">90,000</dd>
              </dl>
            </li>
            <li class="flex-1">
              <dl class="flex flex-row flex-wrap justify-between">
                <dt class="w-1/2">상품가 (a)</dt>
                <dd class="w-1/2 text-right pr-4">-</dd>
                <dt class="w-1/2">포인트 (b)</dt>
                <dd class="w-1/2 text-right pr-4">-</dd>
                <dt class="w-1/2">실결제가 (a-b)</dt>
                <dd class="w-1/2 text-right pr-4">-</dd>
              </dl>
            </li>
          </ul>
        </div>
        <div class="table w-full mt-4">
          <ul class="thead flex rounded-tl-lg rounded-tr-lg">
            <li class="flex-1">구매일</li>
            <li class="flex-1">전화번호</li>
            <li class="flex-1">판매자</li>
          </ul>
          <ul class="tbody flex">
            <li class="flex-1">2020-06-30</li>
            <li class="flex-1">010-1234-1234</li>
            <li class="flex-1">이아람(ERP-ID)</li>
          </ul>
          <ul class="thead flex">
            <li class="flex-auto">제품명</li>
            <li class="flex w-1/3">구분</li>
          </ul>
          <ul class="tbody flex">
            <li class="flex-auto">베이비올 영어 디지털 콘텐츠</li>
            <li class="flex w-1/3">디지털 콘텐츠</li>
          </ul>
          <ul class="thead flex">
            <li class="flex-1">결제방법</li>
            <li class="flex-1">구매가</li>
            <li class="flex-1">배송비</li>
          </ul>
          <ul class="tbody flex">
            <li class="flex-1">복합결제</li>
            <li class="flex-1">
              <dl class="flex flex-row flex-wrap justify-between">
                <dt class="w-1/2">상품가 (a)</dt>
                <dd class="w-1/2 text-right pr-4">100,000</dd>
                <dt class="w-1/2">포인트 (b)</dt>
                <dd class="w-1/2 text-right pr-4">50,000</dd>
                <dt class="w-1/2">실결제가 (a-b)</dt>
                <dd class="w-1/2 text-right pr-4">90,000</dd>
              </dl>
            </li>
            <li class="flex-1">
              <dl class="flex flex-row flex-wrap justify-between">
                <dt class="w-1/2">상품가 (a)</dt>
                <dd class="w-1/2 text-right pr-4">-</dd>
                <dt class="w-1/2">포인트 (b)</dt>
                <dd class="w-1/2 text-right pr-4">-</dd>
                <dt class="w-1/2">실결제가 (a-b)</dt>
                <dd class="w-1/2 text-right pr-4">-</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConsultId',
  layout: 'searchHistory',
  mounted() {
    console.log(this.$route.params.id)
  },
  methods: {
    goAllView() {
      this.$router.push({
        name: 'consult-allView',
        params: this.$route.params
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
