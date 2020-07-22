<template>
  <div>
    <!-- <Header /> -->
    <!--<Tab :tab-data="tabData" /> -->
    <nuxt />
  </div>
</template>
<script>
// import Header from '../components/header'
// import Tab from '../components/tab'

export default {
  // components: {
  // Header
  //   Tab
  // },
  data() {
    return {
      tabData: [
        {
          label: '아람북클럽'
        },
        {
          label: '상담지원KIT'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
/* .screen-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
} */
</style>
