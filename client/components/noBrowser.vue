<template>
  <div
    v-if="isIE"
    class="fullScreen w-screen h-screen bg-gray-700 fixed top-0 left-0"
  >
    <div class="flex items-center justify-center h-screen flex-col">
      <p class="text-white text-4xl font-extrabold">
        세일즈킷은 크롬 브라우저에 최적화 되어있습니다.
      </p>
      <a href="https://www.google.com/chrome/" target="_blank" class="down-btn"
        >다운로드</a
      >
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
  @apply block p-8 mt-8 bg-gray-800 text-gray-400 font-bold;
  transition: all 0.3s;
  &:hover {
    @apply bg-gray-400 text-gray-800;
  }
}
</style>
