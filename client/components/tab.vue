<template>
  <ul class="tab-wrapper flex justify-start">
    <li
      v-for="(a, i) in tabData"
      :key="i"
      :class="{ active: isIndex === i }"
      @click="goTab(i)"
    >
      {{ a.label }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tabData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      isIndex: 0
    }
  },
  mounted() {
    // console.log(this.tabData)
  },
  methods: {
    goTab(i) {
      console.log(i)
      this.isIndex = i
    }
  }
}
</script>

<style lang="scss" scoped></style>
