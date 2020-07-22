<template>
  <div class="header flex justify-between">
    <div>
      <a v-if="$route.path !== '/'" href="javascript:;" @click="goPrev">
        <font-awesome-icon
          :icon="['fas', 'chevron-left']"
          class="chevron-right"
        />
      </a>
      <div v-else class="invisible" />
    </div>
    <h1>
      <n-link class="text-center" to="/">Sales Kit</n-link>
    </h1>
    <div>
      <!-- <Btn label="로그인" size="sm" type="register" @btnClick="login" /> -->
      <n-link to="/survey">앙케이트</n-link>
      <n-link to="/user/login">로그인</n-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push('/user/login')
    },
    goPrev() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped></style>
