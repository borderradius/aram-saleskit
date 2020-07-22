<template>
  <div class="survey flex items-center justify-center h-screen text-lg">
    <div class="flex-initial h-5/6 w-5/6">
      <h1 class="text-3xl">어린이 선호도 앙케이트</h1>
      <div class="private-agree-wrap p-4 bg-white rounded-lg">
        <label for="privateAgree" class="block">
          <input
            id="privateAgree"
            v-model="privateAgree"
            type="checkbox"
            class="form-checkbox h-5 w-5 text-main-green"
          /><span class="ml-2 text-gray-700"
            >개인정보 수집 및 마케팅 정보 활용 동의서</span
          >
        </label>
        <textarea v-if="privateAgree" class="agree-content w-full h-1/6">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
molestias quia dolor odit sint, fuga ut repellat quod neque non libero
eaque aperiam obcaecati officia deleniti quibusdam quasi laborum
impedit?
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
molestias quia dolor odit sint, fuga ut repellat quod neque non libero
eaque aperiam obcaecati officia deleniti quibusdam quasi laborum
impedit?
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      privateAgree: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
