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
        <a
          href="https://arambookclub.com/join/step01"
          class="go-signup"
          target="_blank"
          >아람북클럽 회원가입</a
        >
        <!-- <n-link to="/user/signup" class="go-signup">아람북클럽 회원가입</n-link> -->
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
          <nuxt />
        </div>
      </div>
    </div>
    <n-link class="go-home" to="/">
      <img src="/go-home1.png" alt="메인으로가기 아이콘" />
    </n-link>
    <!-- <a href="javascript:;" class="go-back" @click="goBack">back</a> -->
    <a href="javascript:;" class="go-back" @click="goBack">
      <img src="/go-back.png" alt="뒤로가기 아이콘" />
    </a>
    <FullScreen />
    <Portrait />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      menuList: [
        {
          src: '/allbook-on-ico.png',
          alt: '전집 & 디지털콘텐츠',
          class: 'first'
        }
        // {
        //   src: '/smallbook-off-ico.png',
        //   alt: '소전집',
        //   class: 'second'
        // }
        // {
        //   src: '/book-off-ico.png',
        //   alt: '도서',
        //   class: 'second'
        // }
      ]
    }
  },
  async mounted() {
    let cnslPtclSeqno, chldId, cstpMngrSeqno

    console.warn('상세 -> 추천 넘어온 파라미터 :', this.$route.params)

    if (this.$route.params.surveyDetail) {
      cnslPtclSeqno = this.$route.params.surveyDetail.cnslPtclSeqno
      chldId = this.$route.params.surveyDetail.rectChldId
      cstpMngrSeqno = this.$route.params.surveyDetail.cstpMngrSeqno
    }
    if (this.$route.params.surveyResult) {
      cnslPtclSeqno = this.$route.params.surveyResult.cnslPtclSeqno
      chldId = this.$route.params.surveyResult.chldId
      cstpMngrSeqno = this.$route.params.surveyResult.cstpMngrSeqno
    }
    const type = this.$route.params.type || 'allbook'
    if (type === 'allbook') {
      this.checkNowMenu(0)
    } else if (type === 'smallbook') {
      this.checkNowMenu(1)
    }
    try {
      await this.setRecommendList({
        type,
        cnslPtclSeqno,
        chldId,
        cstpMngrSeqno
      })
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    ...mapActions({
      setRecommendList: 'setRecommendList'
    }),
    goBack() {
      if (this.$route.params.surveyResult) {
        this.$router.push({
          name: 'survey-result',
          params: {
            ...this.$route.params.surveyResult
          }
        })
      }
      if (this.$route.params.surveyDetail) {
        this.$router.push({
          name: 'survey-result-detail',
          params: {
            ...this.$route.params.surveyDetail
          }
        })
      }
    },
    toggleMenuActive(index) {
      let surveyParams
      if (this.$route.params.surveyDetail) {
        surveyParams = this.$route.params.surveyDetail
      }
      if (this.$route.params.surveyResult) {
        surveyParams = this.$route.params.surveyResult
      }
      // if (this.$route.params.surveyDetail) {
      //   cnslPtclSeqno = this.$route.params.surveyDetail.cnslPtclSeqno
      // }
      // if (this.$route.params.surveyResult) {
      //   cnslPtclSeqno = this.$route.params.surveyResult.cnslPtclSeqno
      // }
      const type = index ? 'smallbook' : 'allbook'
      this.checkNowMenu(index)
      this.setRecommendList({ type, surveyParams })
    },
    checkNowMenu(index) {
      // leftMenu 클래스, off이미지로 초기화
      this.menuList = [
        {
          src: '/allbook-off-ico.png',
          alt: '전집 & 디지털콘텐츠',
          class: 'first'
        }
        // {
        //   src: '/smallbook-off-ico.png',
        //   alt: '소전집',
        //   class: 'second'
        // }
        // {
        //   src: '/book-off-ico.png',
        //   alt: '도서',
        //   class: 'second'
        // }
      ]
      const li = document.getElementsByClassName('leftMenu')
      for (let i = 0; i < li.length; i++) {
        li[i].classList.remove('active')
      }

      li[index].classList.add('active')
      if (index === 0) this.menuList[index].src = '/allbook-on-ico.png'
      if (index === 1) this.menuList[index].src = '/smallbook-on-ico.png'
      // if (index === 2) this.menuList[index].src = '/book-on-ico.png'
    }
  }
}
</script>

<style lang="scss" scoped></style>
