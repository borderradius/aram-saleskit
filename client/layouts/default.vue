<template>
  <div>
    <Header />
    <Tab :tab-data="tabData" />
    <nuxt />
  </div>
</template>
<script>
import Header from '../components/header'
import Tab from '../components/tab'

export default {
  components: {
    Header,
    Tab
  },
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

<style></style>
