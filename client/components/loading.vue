<template>
  <div
    class="fixed w-screen h-screen top-0 left-0 bg-white z-999 flex items-center justify-center"
  >
    <!-- <div class="absolute text-center"> -->
    <!-- <Lottie
        v-if="false"
        :options="defaultOptions"
        :height="350"
        :width="450"
      /> -->
    <img src="/loading.gif" alt="" />
    <!-- <div class="w-400 m-auto">
        <h1 class="text-3xl font-semibold text-gray-800">
          결과를 분석중입니다!
        </h1>
        <p class="text-gray-700">잠시만 기다려주세요...</p>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import Lottie from 'vue-lottie'
// import * as animationData from '../assets/lottie/loading.json'
// import * as animationData from '../assets/lottie/common_splash.json'

export default {
  // components: {
  //   Lottie
  // },
  // data() {
  //   return {
  //     defaultOptions: { animationData: animationData.default }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.absolute {
  width: 600px;
  height: 466px;
  left: 50%;
  top: 50%;
  margin-left: -300px;
  margin-top: -250px;
}
</style>
