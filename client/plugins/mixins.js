import Vue from 'vue'

Vue.mixin({
  computed: {
    isDesktop() {
      return this.$mq === 'desktop'
    },
    isMobile() {
      return this.$mq === 'mobile'
    }
  }
})
