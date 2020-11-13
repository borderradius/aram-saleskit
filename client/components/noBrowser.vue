<template>
  <div
    v-if="isIE"
    class="fullScreen w-screen h-screen bg-gray-700 fixed top-0 left-0"
  >
    <div class="flex items-center justify-center h-screen flex-col">
      <p class="text-white text-3xl font-extrabold mb-3">
        아람 Sales kit은 Chrome 브라우저에 최적화 되어있습니다.
      </p>
      <p class="text-white text-3xl font-extrabold">
        Chrome 브라우저를 이용하여 접속 부탁드립니다.
      </p>
      <a
        href="https://www.google.com/intl/KO/chrome/"
        target="_blank"
        class="down-btn"
        >Chrome 브라우저 설치하기
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isIE: false
    }
  },
  mounted() {
    this.isIE = /trident/i.test(navigator.userAgent.toLowerCase())
  }
}
</script>

<style lang="scss" scoped>
.fullScreen {
  z-index: 9999;
}
.down-btn {
  @apply block p-8 mt-8 bg-green-600 text-gray-100 font-bold;
  transition: all 0.3s;
  &:hover {
    @apply bg-gray-100 text-gray-800;
  }
}
</style>
