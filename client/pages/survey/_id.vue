<template>
  <div class="survey flex items-center justify-center text-lg">
    앙케트 상세 params.id : {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params)
  }
}
</script>

<style lang="scss" scoped></style>
