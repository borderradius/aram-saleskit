<template>
  <div class="flex items-center h-screen">
    <div class="flex justify-center w-full text-center items-center">
      <!-- <div class="card w-100 h-12 bg-gray-400 mr-4"> -->
      <!-- <div class="w-1/5"> -->
      <!-- <swiper
        ref="mySwiper1"
        :options="swiperOption"
        class="w-1/3 left-slide swiper"
      >
        <swiper-slide v-for="(item, index) in slideData" :key="index">
          <div class="img--wrap">
            <img
              :src="item.answerList[0].cnslQstAnsrImage"
              alt="선택이미지"
              @click="select('l')"
            />
          </div>
        </swiper-slide>
      </swiper> -->
      <!-- <div class="text-5xl font-extrabold">vs</div> -->
      <swiper ref="mySwiper2" :options="swiperOption" class="w-1/3 right-slide">
        <swiper-slide v-for="(item, index) in slideData" :key="index">
          <div class="img--wrap">
            <img
              :src="item.answerList[0].cnslQstAnsrImage"
              alt="선택이미지"
              @click="select('r')"
            />
          </div>
        </swiper-slide>
      </swiper>

      <!-- </div> -->
      <!-- </div> -->
      <!-- <div class="card w-100 h-12 bg-gray-300 ml-4"> -->
      <!-- <div class="w-100">
        <Swiper ref="mySwiper2" :options="swiperOptions">
          <SwiperSlide v-for="item in 5" :key="item">
            {{ item }}
          </SwiperSlide>
        </Swiper>
      </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        // direction: 'vertical',
        slidesPerView: 1,
        // allowTouchMove: false,
        speed: 500,
        spaceBetween: 100
      },
      slideData: [],
      leftSlideIndex: 0,
      rightSlideIndex: 0,
      allSlideData: [
        {
          code: 'AC0101',
          label: '의사소통',
          children: [
            {
              src: ''
            }
          ]
        },
        {
          code: 'AC0102',
          label: '자연탐구',
          children: [
            {
              src: ''
            }
          ]
        },
        {
          code: 'AC0103',
          label: '사회관계',
          children: [
            {
              src: ''
            }
          ]
        },
        {
          code: 'AC0104',
          label: '예술경험',
          children: [
            {
              src: ''
            }
          ]
        },
        {
          code: 'AC0105',
          label: '기본생활',
          children: [
            {
              src:
                'https://contents.arambookclub.com/counsel/ac01/ac0105/sk_a_1.jpg'
            },
            {
              src:
                'https://contents.arambookclub.com/counsel/ac01/ac0105/sk_a_2.jpg'
            },
            {
              src:
                'https://contents.arambookclub.com/counsel/ac01/ac0105/sk_a_3.jpg'
            }
          ]
        },
        {
          code: 'AC0106',
          label: '신체운동',
          children: [
            {
              src: ''
            }
          ]
        }
      ]
    }
  },
  computed: {
    swiper1() {
      return this.$refs.mySwiper1.$swiper
    },
    swiper2() {
      return this.$refs.mySwiper2.$swiper
    }
  },
  async mounted() {
    const params = {
      chldBthYmd: '19841010',
      chldNm: '구충모',
      mblTelNum: '01000000000',
      orgmId: 'AGC0000000788'
    }
    const { result } = await this.$axios.$get('/counsel/testpaper', {
      params
    })
    this.slideData = result.counselTestPaper
    this.slideData.cstpMngrSeqno = result.cstpMngrSeqno
    this.slideData.agerCoursCd = result.agerCoursCd
  },
  methods: {
    select(type) {
      // console.warn('selected', type)
      // this.swiper1.slideTo(index + 1)
      if (type === 'l') {
        this.rightSlideIndex++
        this.swiper2.slideTo(this.rightSlideIndex)
      }
      if (type === 'r') {
        this.leftSlideIndex++
        this.swiper1.slideTo(this.leftSlideIndex)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin responsive-box($height) {
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: $height;
  }
}

.box {
  @include responsive-box(100%);
  /* @apply bg-gray-400; */
  /* width: 20%; */
  /*For the box appearance*/
  /* background: #222; */
  /* color: #fff; */
  /* width: 100px; */
}
.left-slide,
.right-slide {
  .img--wrap {
    border-radius: 1rem;
    padding: 0.6rem;
    background-color: #eee;
  }
  img {
    border-radius: 1rem;
    /* border: 1rem solid gray; */
  }
}
</style>
