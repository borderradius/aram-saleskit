<template>
  <div class="survey-select-wrap flex items-center justify-center text-lg">
    <div class="flex-initial h-5/6 w-5/6">
      <h1 class="text-xl absolute left-0 py-2 px-6 rounded-r-full title">
        어린이 선호도 앙케이트
      </h1>
      <div>
        <p class="sub-title">
          두 그림 중 좋아하는 것을 고르세요.
        </p>
        <Swiper ref="mySwiper" :options="swiperOptions">
          <SwiperSlide v-for="(item, index) in 5" :key="index">
            <div class="img-select-wrap flex items-center justify-between">
              <div v-animate-css.click="'rubberBand'" class="img-select-left">
                <div class="img-select-inner">
                  <div
                    v-for="(item2, index2) in slideData1[index]"
                    :key="index2"
                  >
                    <div
                      v-if="!index2"
                      @click="goNext(index, index2, item2.index)"
                    >
                      <img :src="item2.imgSrc" alt="선택이미지" />
                      <span class="img-title shadow-xl">{{ item2.label }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-animate-css.click="'rubberBand'" class="img-select-right">
                <div class="img-select-inner">
                  <div
                    v-for="(item3, index3) in slideData1[index]"
                    :key="index3"
                  >
                    <div
                      v-if="index3"
                      @click="goNext(index, index3, item3.index)"
                    >
                      <img :src="item3.imgSrc" alt="선택이미지" />
                      <span class="img-title shadow-xl">{{ item3.label }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="pagination">{{ nowSlidePage }} / 5</div>
      </div>
    </div>
    <img src="/bi_blue.png" class="bookclub-logo2" />
    <n-link class="go-home" to="/">
      <img src="/go-home2.png" alt="메인으로가기 아이콘" />
    </n-link>
    <img src="/main-logo.png" class="bookclub-logo2" />
    <button
      v-if="nowSlidePage > 1"
      class="go-main focus:outline-none"
      @click="goPrev"
    >
      <img src="/icon_back.png" alt="이전 아이콘" />
      이전
    </button>
    <audio src="/saleskit_bgm.mp3" autoplay />
    <Loading v-if="isComplete" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Loading from '@/components/loading.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    Loading
  },
  data() {
    return {
      nowSlidePage: 1,
      swiperOptions: {
        allowTouchMove: false,
        speed: 500
      },
      isComplete: false,
      slideData: [],
      counselTestPaper: [],
      slideData1: [],
      slideData2: [],
      allSlideData: [
        {
          code: 'AC0101',
          label: '의사소통',
          children: [
            {
              label: '국어',
              code: 'AC0401',
              imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_c1.jpg'
            },
            {
              label: '영어',
              code: 'AC0402',
              imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_c2.jpg'
            }
          ],
          imgSrc: [
            'https://contents.arambookclub.com/counsel/ac01/ac0101/sk_c_1.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0101/sk_c_2.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0101/sk_c_3.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0101/sk_c_4.jpg'
            // 'https://contents.arambookclub.com/counsel/ac01/ac0101/sk_c_5.jpg'
          ]
        },
        {
          code: 'AC0102',
          sequence: 'CQ-001001',
          label: '자연탐구',
          children: [
            {
              label: '수학',
              code: 'AC0403',
              imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_f1.jpg'
            },
            {
              label: '과학',
              code: 'AC0404',
              imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_f2.jpg'
            }
          ],
          imgSrc: [
            'https://contents.arambookclub.com/counsel/ac01/ac0102/sk_f_1.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0102/sk_f_2.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0102/sk_f_3.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0102/sk_f_4.jpg'
            // 'https://contents.arambookclub.com/counsel/ac01/ac0102/sk_f_5.jpg'
          ]
        },
        {
          code: 'AC0103',
          label: '사회관계',
          children: [
            {
              label: '사회',
              code: 'AC0405',
              imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_d1.jpg'
            },
            {
              label: '도덕',
              code: 'AC0406',
              imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_d2.jpg'
            }
          ],
          imgSrc: [
            'https://contents.arambookclub.com/counsel/ac01/ac0103/sk_d_1.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0103/sk_d_2.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0103/sk_d_3.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0103/sk_d_4.jpg'
          ]
        },
        {
          code: 'AC0104',
          label: '예술경험',
          children: [
            {
              label: '음악',
              code: 'AC0407',
              imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_e1.jpg'
            },
            {
              label: '미술',
              code: 'AC0408',
              imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_e2.jpg'
            },
            {
              label: '체육',
              code: 'AC0409',
              imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_e3.jpg'
            }
          ],
          imgSrc: [
            'https://contents.arambookclub.com/counsel/ac01/ac0104/sk_e_1.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0104/sk_e_2.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0104/sk_e_3.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0104/sk_e_4.jpg'
          ]
        },
        {
          code: 'AC0105',
          label: '기본생활',
          children: [
            {
              label: '체육',
              code: 'AC0409',
              imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_e2.jpg'
            }
          ],
          imgSrc: [
            'https://contents.arambookclub.com/counsel/ac01/ac0105/sk_a_1.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0105/sk_a_2.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0105/sk_a_3.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0105/sk_a_4.jpg'
          ]
        },
        {
          code: 'AC0106',
          label: '신체운동',
          children: [
            {
              label: '체육',
              code: 'AC0409',
              imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_e2.jpg'
            }
          ],
          imgSrc: [
            'https://contents.arambookclub.com/counsel/ac01/ac0106/sk_b_1.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0106/sk_b_2.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0106/sk_b_3.jpg',
            'https://contents.arambookclub.com/counsel/ac01/ac0106/sk_b_4.jpg'
          ]
        }
      ],
      postData: [],
      postListData: [],
      chldId: '',
      cnslPtclSeqno: ''
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    // console.log('slide2 --- ', this.$route.params.exceptIndex)
    const exceptIndex = this.$route.params.firstSelect[0].index
    // const exceptIndex = 0
    console.warn('넘어온 데이터 제외해야함 : ', this.$route.params.firstSelect)
    this.allSlideData.splice(exceptIndex, 1)
    console.log('제외되었나? : ', this.allSlideData)
    // console.log(this.$route.params.apiResult)
    this.chldId = this.$route.params.apiResult.chldId
    this.cnslPtclSeqno = this.$route.params.apiResult.cnslPtclSeqno

    // console.log(this.allSlideData)
    // console.log(this.allSlideData.filter((item) => item.index !== exceptIndex))
    // for (const item of this.allSlideData) {

    // }
    // try {
    //   // const params = this._.cloneDeep(this.$route.params)
    //   const params = {
    //     chldBthYmd: '19841010',
    //     chldNm: '구충모',
    //     mblTelNum: '01000000000',
    //     orgmId: 'AGC0000000788'
    //   }
    //   // console.log(params)
    //   const { result } = await this.$axios.$get('/counsel/testpaper', {
    //     params
    //   })
    //   // console.log(result)
    //   this.slideData = result.counselTestPaper
    //   this.slideData.cstpMngrSeqno = result.cstpMngrSeqno
    //   this.slideData.agerCoursCd = result.agerCoursCd
    // } catch (e) {
    //   console.log(e)
    // }
    this.getRandomData()
    this.$route.params.firstSelect[0].click = false
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    /**
     * ? 상담결과 저장후 상세값 리턴함.
     * ? 리턴값을 라우팅하면서 넘김
     * ? 그러면 넘어가는 페이지에서 상세정보api 호출할 필요 없음.
     */
    goResult(params) {
      // params.pop()
      // console.log(params)
      setTimeout(() => {
        this.isComplete = false
        this.$router.push({
          name: 'survey-select-result2',
          params: {
            lastSelect: params,
            apiResult: this.$route.params.apiResult,
            apiParams: this.$route.params.apiParams
          }
        })
      }, 2000)
    },
    // async doClick(cnslPoolSeqno, choicedAnswerEduCd, slideIndex) {
    //   this.clickSound()
    //   // 클릭할 때 마다 counselTestPaper에 데이터 푸쉬
    //   this.counselTestPaper[slideIndex] = {
    //     cnslPoolSeqno,
    //     choicedAnswerEduCd
    //   }
    //   // this.counselTestPaper.push({
    //   //   cnslPoolSeqno,
    //   //   choicedAnswerEduCd
    //   // })
    //   if (this.nowSlidePage === 9) {
    //     const params = this.$route.params
    //     params.cstpMngrSeqno = this.slideData.cstpMngrSeqno
    //     params.agerCoursCd = this.slideData.agerCoursCd
    //     params.counselTestPaper = this.counselTestPaper
    //     try {
    //       const { result } = await this.$axios.$post(
    //         '/counsel/testpaper/content',
    //         params
    //       )
    //       setTimeout(() => {
    //         this.isComplete = true
    //         this.goResult(result)
    //       }, 1000)
    //     } catch (e) {
    //       console.log(e)
    //     }
    //   }
    //   if (this.nowSlidePage !== 9) this.nowSlidePage++
    //   window.setTimeout(() => {
    //     if (this.nowSlidePage < 10) this.swiper.slideTo(this.nowSlidePage - 1)
    //   }, 500)
    // },
    goPrev() {
      this.nowSlidePage--
      this.swiper.slideTo(this.nowSlidePage - 1)
      this.postListData.splice(this.nowSlidePage - 1, 1)
      window.setTimeout(() => {
        this.slideData1[this.nowSlidePage - 1][0].click = false
        this.slideData1[this.nowSlidePage - 1][1].click = false
        this.slideData1.pop()
      }, 500)
      console.warn('삭제후 전송할 데이터 : ', this.postListData)
      console.warn('슬라이드 데이터 :', this.slideData1)
    },
    clickSound() {
      const audio = new Audio('/saleskit_sfx.mp3')
      audio.play()
    },
    async goNext(index1, index2, selectedIndex) {
      this.clickSound()
      // postListData에 데이터 넣기
      // 클릭된거는 값 true로 바꿔주고 postListData에 넣기.
      this.slideData1[index1][index2].click = true
      const postListParam = {}
      for (const item of this.slideData1[index1]) {
        if (item.click) {
          postListParam.choicedAnswerEduCd = item.code // 선택한 학습코드
        } else {
          postListParam.nchoAsctEduCoursCd = item.code // 비선택 학습코드
        }
      }
      // 시퀀스값 추가
      // 마지막것만 cq-003001 로 주면 됌.
      index1 === 4
        ? (postListParam.cstpPoolNo = 'CQ-003001')
        : (postListParam.cstpPoolNo = `CQ-00200${index1 + 1}`)
      // post에 보낼 데이터 준비
      this.postListData.push(postListParam)

      // API 호출
      if (this.nowSlidePage === 5 && this.slideData1.length === 5) {
        // POST 호출에 필요한 데이터 준비 - 차수, 네임 등등
        let apiResult = {}
        const apiParams = this.$route.params.apiParams
        apiParams.cstpMngrSeqno = 1
        apiParams.cnslTestStepCode = 'CQ-002000'
        apiParams.counselTestPaper = this.postListData
        apiParams.chldId = this.$route.params.apiResult.chldId
        apiParams.cnslPtclSeqno = this.$route.params.apiResult.cnslPtclSeqno
        apiParams.nextStepYn =
          this.slideData1[index1][index2].children.length > 1 ? 'Y' : 'N' // 교과과정에 따른 Y, N 값 추가
        try {
          const { result } = await this.$axios.$post(
            '/counsel/insCounselResult',
            apiParams
          )
          apiResult = result
        } catch (e) {
          console.log(e)
        }
        setTimeout(() => {
          this.isComplete = true
          this.goResult(
            this.slideData1[this.nowSlidePage - 1][index2],
            apiResult
          )
        }, 2000)
      }
      if (this.nowSlidePage < 5) {
        this.nowSlidePage++
        if (this.nowSlidePage === 5) {
          const { firstSelect } = this.$route.params
          // firstSelect.click = false
          const secondSelect = this.slideData1[this.nowSlidePage - 2].filter(
            (item) => item.click
          )
          firstSelect[0].click = false
          secondSelect[0].click = false
          const param = [secondSelect[0], firstSelect[0]]

          this.slideData1.push(param)
        } else {
          // 첫 슬라이드에 사용할 랜덤데이터 뽑기
          this.getRandomData(index1 + 1, selectedIndex)
        }
        window.setTimeout(() => {
          if (this.nowSlidePage < 6) this.swiper.slideTo(this.nowSlidePage - 1)
        }, 500)
      }
    },
    listRandomNumber() {
      return Math.floor(Math.random() * 5)
    },
    imageRandomNumber(imgCount) {
      return Math.floor(Math.random() * imgCount)
    },
    getRandomData(index = 0, selectedIndex) {
      if (index === 0) {
        const arrObj = []
        const firstItem = {
          code: this.allSlideData[0].code,
          label: this.allSlideData[0].label,
          click: false,
          index: 0
        }
        const secondItem = {
          code: this.allSlideData[1].code,
          label: this.allSlideData[1].label,
          click: false,
          index: 1
        }
        firstItem.imgSrc = this.allSlideData[0].imgSrc[0]
        // Number(this.imageRandomNumber(this.allSlideData[0].imgSrc.length))
        firstItem.children = this.allSlideData[0].children

        secondItem.imgSrc = this.allSlideData[1].imgSrc[0]
        // Number(this.imageRandomNumber(this.allSlideData[1].imgSrc.length))
        secondItem.children = this.allSlideData[1].children

        arrObj.push(firstItem)
        arrObj.push(secondItem)
        this.slideData1.push(arrObj)
        console.log(this.slideData1)
      } else {
        // 최초 아닐경우
        const arrObj = []
        const firstItem = {
          code: this.allSlideData[selectedIndex].code,
          label: this.allSlideData[selectedIndex].label,
          click: false,
          index: selectedIndex
        }
        const secondItem = {
          code: this.allSlideData[index + 1].code,
          label: this.allSlideData[index + 1].label,
          click: false,
          index: index + 1
        }
        firstItem.imgSrc = this.allSlideData[selectedIndex].imgSrc[
          Number(
            this.imageRandomNumber(
              this.allSlideData[selectedIndex].imgSrc.length
            )
          )
        ]
        firstItem.children = this.allSlideData[selectedIndex].children
        secondItem.imgSrc = this.allSlideData[index + 1].imgSrc[
          Number(
            this.imageRandomNumber(this.allSlideData[index + 1].imgSrc.length)
          )
        ]
        secondItem.children = this.allSlideData[index + 1].children

        arrObj.push(firstItem)
        arrObj.push(secondItem)
        this.slideData1.push(arrObj)
        console.log(this.slideData1)
      }
      // // 서로 다른 랜덤한 번호 뽑기
      // let listRandomNumber1 = ''
      // let listRandomNumber2 = ''
      // // if (this.slideData1.length <= 1) {
      // listRandomNumber1 =
      //   this.slideData1.length === 0 ? this.listRandomNumber() : selectedIndex
      // listRandomNumber2 = this.listRandomNumber()
      // if (listRandomNumber1 === listRandomNumber2) {
      //   listRandomNumber2 = this.listRandomNumber()
      // }

      // console.warn(listRandomNumber1, listRandomNumber2)

      // // 전체배열에 넣을 슬라이드 1개 배열 만들기.
      // const arrObj = []
      // const firstItem = {
      //   code: this.allSlideData[listRandomNumber1].code,
      //   label: this.allSlideData[listRandomNumber1].label,
      //   click: false,
      //   index: listRandomNumber1
      // }
      // const secondItem = {
      //   code: this.allSlideData[listRandomNumber2].code,
      //   label: this.allSlideData[listRandomNumber2].label,
      //   click: false,
      //   index: listRandomNumber2
      // }

      // firstItem.imgSrc = this.allSlideData[listRandomNumber1].imgSrc[
      //   Number(
      //     this.imageRandomNumber(
      //       this.allSlideData[listRandomNumber1].imgSrc.length
      //     )
      //   )
      // ]

      // secondItem.imgSrc = this.allSlideData[listRandomNumber2].imgSrc[
      //   Number(
      //     this.imageRandomNumber(
      //       this.allSlideData[listRandomNumber2].imgSrc.length
      //     )
      //   )
      // ]

      // arrObj.push(firstItem)
      // arrObj.push(secondItem)
      // this.slideData1.push(arrObj)
    }
  }
}
</script>

<style lang="scss" scoped></style>
