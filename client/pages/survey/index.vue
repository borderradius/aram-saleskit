<template>
  <div class="survey flex items-center justify-center h-screen text-lg">
    <div class="flex-initial h-4/6 w-4/6">
      <h1 class="text-3xl mb-8">어린이 선호도 앙케이트</h1>
      <div class="private-agree-wrap p-4 bg-white rounded-lg">
        <label for="privateAgree" class="block">
          <input
            id="privateAgree"
            v-model="privateAgree"
            type="checkbox"
            class="form-checkbox h-5 w-5 text-main-green"
          /><span class="ml-2 text-gray-700 font-bold"
            >개인정보 수집 및 마케팅 정보 활용 동의서</span
          >
        </label>
        <div
          v-if="privateAgree"
          class="agree-content w-full h-100 mt-2 text-gray-600 bg-gray-100 p-2 rounded-sm"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          molestias quia dolor odit sint, fuga ut repellat quod neque non libero
          eaque aperiam obcaecati officia deleniti quibusdam quasi laborum
          impedit? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Dolorum molestias quia dolor odit sint, fuga ut repellat quod neque
          non libero eaque aperiam obcaecati officia deleniti quibusdam quasi
          laborum impedit? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Dolorum molestias quia dolor odit sint, fuga ut repellat quod
          neque non libero eaque aperiam obcaecati officia deleniti quibusdam
          quasi laborum impedit? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Dolorum molestias quia dolor odit sint, fuga ut
          repellat quod neque non libero eaque aperiam obcaecati officia
          deleniti quibusdam quasi laborum impedit? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dolorum molestias quia dolor odit sint,
          fuga ut repellat quod neque non libero eaque aperiam obcaecati officia
          deleniti quibusdam quasi laborum impedit? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dolorum molestias quia dolor odit sint,
          fuga ut repellat quod neque non libero eaque aperiam obcaecati officia
          deleniti quibusdam quasi laborum impedit? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dolorum molestias quia dolor odit sint,
          fuga ut repellat quod neque non libero eaque aperiam obcaecati officia
          deleniti quibusdam quasi laborum impedit? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dolorum molestias quia dolor odit sint,
          fuga ut repellat quod neque non libero eaque aperiam obcaecati officia
          deleniti quibusdam quasi laborum impedit?
        </div>
      </div>
      <div class="pt-2 relative mx-auto text-gray-600">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(login)">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|numeric|mobile"
              name="검색어"
            >
              <input
                v-model="searchWord"
                class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 py-10 rounded-lg text-sm focus:outline-none w-full text-2xl"
                type="search"
                name="search"
                placeholder="01000000000"
              />

              <button type="submit" class="absolute right-0 top-0 mt-8 mr-4">
                <svg
                  id="Capa_1"
                  class="text-gray-600 h-8 w-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style="enable-background:new 0 0 56.966 56.966;"
                  xml:space="preserve"
                  width="512px"
                  height="512px"
                >
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                  />
                </svg>
              </button>
              <span class="validate-error text-sm text-pink-600">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      privateAgree: false,
      searchWord: null
    }
  }
}
</script>

<style lang="scss" scoped></style>
