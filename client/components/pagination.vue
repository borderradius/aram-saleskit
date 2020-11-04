<template>
  <ul class="flex justify-center mt-4 pagination-wrap">
    <li>
      <a
        :class="[nowPagesCount === 0 ? 'disable' : '']"
        :disabled="nowPagesCount === 0"
        class="flex items-center h-full"
        @click="prevClick"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </a>
    </li>
    <li v-for="a in pages[pagesCount]" :key="a">
      <a ref="paginationNumber" class="flex items-center" @click="goPage">{{
        a
      }}</a>
    </li>
    <li>
      <a
        :class="[nowPagesCount === totalPagesCount ? 'disable' : '']"
        :disabled="nowPagesCount === totalPagesCount"
        class="flex items-center mx-1 px-3 py-2 bg-gray-200 text-gray-700 rounded-md h-full"
        @click="nextClick"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    limitPageCount: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    nowPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      pages: [],
      pagesCount: 0,
      totalPagesCount: 0,
      nowPagesCount: 0
      // nowPage: 1
    }
  },
  watch: {
    limitPageCount(value) {
      this.pages = []
      this.setPages()
    },
    nowPage(value) {
      if (value === 1) {
        this.resetNowPage()
        const target = this.$refs.paginationNumber
        target[0].classList.add('nowPage')
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      const target = this.$refs.paginationNumber
      target[0].classList.add('nowPage')
    })
    this.setPages()
  },
  methods: {
    goPage(e) {
      this.resetNowPage()
      this.setNowPage(e)
    },
    /**
     * * 들어온 카운트를 size에 따라서 [1-10][11-20][21,22,23...] 처럼 준비
     * ? pages[]에 담는다.
     */
    setPages() {
      // console.log(
      //   `%c총 몇개의 페이진데? ${this.limitPageCount}`,
      //   'color:yellow'
      // )
      let arr = []
      for (let i = 1; i <= this.limitPageCount; ++i) {
        arr.push(i)
        if (i % 10 === 0) {
          this.pages.push(arr)
          arr = []
          ++this.totalPagesCount
        }
      }
      // console.log(this.limitPageCount)
      // this.pages = []
      this.pages.push(arr)
      // console.log(this.pages)
    },
    prevClick() {
      if (this.nowPagesCount === 0) return
      --this.pagesCount
      --this.nowPagesCount
      this.resetNowPage()
      this.$nextTick(function() {
        const target = this.$refs.paginationNumber
        target[0].classList.add('nowPage')
      })
      this.$emit('paginationClick', this.size * this.nowPagesCount + 1)
    },
    nextClick() {
      if (this.nowPagesCount === this.totalPagesCount) return
      ++this.pagesCount
      ++this.nowPagesCount
      this.resetNowPage()
      this.$nextTick(function() {
        const target = this.$refs.paginationNumber
        target[0].classList.add('nowPage')
      })
      this.$emit('paginationClick', this.size * this.nowPagesCount + 1)
    },
    /**
     * * 모든 페이지버튼 클래스제거
     */
    resetNowPage() {
      const target = this.$refs.paginationNumber
      for (const a of target) {
        a.classList.remove('nowPage')
      }
    },
    /**
     * * 현재페이지 버튼 클래스추가
     */
    setNowPage(e) {
      const tempIdx = Number(e.target.textContent)
      const idx = tempIdx - this.size * this.nowPagesCount - 1
      this.setNowPageFunc(idx)
      this.$emit('paginationClick', tempIdx)
    },
    /**
     * 1페이지로 버튼 활성화 시키기
     */
    setNowPageFunc(idx) {
      this.$nextTick(function() {
        const target = this.$refs.paginationNumber
        target[idx].classList.add('nowPage')
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
