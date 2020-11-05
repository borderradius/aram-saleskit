<template>
  <div>
    <!-- <div
      v-if="isShow"
      class="fullScreen w-screen h-screen bg-gray-700 fixed top-0 left-0 flex items-center justify-center"
    >
      <button class="btn" @click="fullScreen">풀스크린 고!</button>
    </div> -->
    <!-- 풀스크린 사용할 때는 아래것 사용하고 위는 주석 -->
    <div v-if="!isShow">
      <div
        v-if="!isFull"
        class="fullScreen w-screen h-screen bg-gray-700 fixed top-0 left-0 flex items-center justify-center"
      >
        <button class="btn full-btn shadow-xl" @click="fullScreen">
          풀스크린으로 보기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    ...mapState({
      isFull: (state) => state.isFull
    })
  },
  mounted() {
    this.isShow = process.env.SERVER_TYPE === 'dev'
    const isIOS = /iphone|ipad|ipod|/i.test(navigator.userAgent.toLowerCase())
    if (isIOS) {
      this.isShow = true
    }
    window.addEventListener('popstate', () => {
      console.warn('history 바꼈다.')
    })
    // this.fullmode = document.fullscreenElement
    // console.warn(this.fullmode)
    // console.warn(document.fullscreenElement)
    // this.$nextTick(() => {
    // console.warn(documentOr.fullscreenElement)
    // })
    // window.addEventListener('fullscreenchange', this.fullScreen)
  },
  destroyed() {
    console.log('풀스크린 진입화면 사라짐')
    // window.removeEventListener('fullscreenchange', this.eventHandler)
  },
  methods: {
    ...mapActions({
      setFullScreen: 'setFullScreen'
    }),
    fullScreen() {
      const elem = document.documentElement
      const options = {
        navigationUI: 'hide'
      }
      window.removeEventListener('fullscreenchange', this.eventHandler)
      window.addEventListener('fullscreenchange', this.eventHandler)
      if (elem.requestFullscreen) {
        elem.requestFullscreen(options)
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(options)
      } else if (elem.mozRequestFullscreen) {
        elem.mozRequestFullscreen(options)
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen(options)
      }
    },
    eventHandler(event) {
      // const isIOS = /iphone|ipad|ipod|android/i.test(
      //   navigator.userAgent.toLowerCase()
      // )
      // console.log(isIOS)
      // if (isIOS) {
      //   this.isShow = true
      //   return false
      // }

      if (document.fullscreenElement) {
        console.log(
          `Element: ${document.fullscreenElement.id} entered fullscreen mode.`
        )
        this.setFullScreen(true)
      } else {
        console.log('Leaving full-screen mode.')
        this.setFullScreen(false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fullScreen {
  z-index: 9999;
}
.full-btn {
  display: block;
  width: 300px !important;
  padding: 2rem 0;
  /* height: 80px; */
  /* line-height: 80px; */
  font-size: 1.4rem;
}
</style>
