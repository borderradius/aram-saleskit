<template>
  <div class="survey flex items-center justify-center text-lg">
    <div class="flex-initial h-5/6 w-4/5">
      <h1
        class="text-2xl absolute left-0 p-3 px-6 rounded-r-full title text-white"
      >
        어린이 선호도 앙케이트
      </h1>
      <div class="private-agree-wrap p-2 bg-white rounded mt-24">
        <label for="privateAgree" class="block">
          <input
            id="privateAgree"
            v-model="privateAgree"
            type="checkbox"
            class="form-checkbox h-5 w-5 text-main-green"
          /><span class="ml-2 text-gray-700 text-sm"
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
      <div
        class="p-2 relative mx-auto text-gray-600 search-wrap rounded-lg mt-4"
      >
        <ValidationObserver v-slot="{ handleSubmit }">
          <form
            class="flex items-center justify-between"
            @submit.prevent="handleSubmit(login)"
          >
            <span class="text-gray-700 flex px-10 w-2/6"
              >앙케이트 참여 상담 &dot; 내역</span
            >
            <ValidationProvider
              v-slot="{ errors }"
              rules="numeric|mobile"
              name="검색어"
              class="flex w-4/6"
            >
              <div class="flex w-full">
                <input
                  v-model="searchWord"
                  class="bg-white h-10 px-5 text-sm focus:outline-none text-2xl inline-block search-input w-4/5"
                  type="search"
                  name="search"
                  placeholder="01000000000"
                />

                <button
                  type="submit"
                  class="search-btn border text-center search-btn text-white px-5 h-10 inline-block"
                >
                  검색
                  <!-- <svg
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
                </svg> -->
                </button>
              </div>
              <span class="validate-error text-sm text-pink-600">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </form>
        </ValidationObserver>
      </div>
      <div class="bg-white mt-2">
        <div v-if="!tBody.length" class="border border-1 h-5p py-20 rounded-lg">
          <p class="text-gray-600 text-center">
            고객님의 휴대폰 번호를 입력 후, 검색 버튼을 눌러주세요.
          </p>
        </div>
        <table
          v-if="tBody.length"
          class="table-basic search-result-table border rounded-lg"
        >
          <thead class="bg-gray-200">
            <tr>
              <th v-for="(item, index) in tHeader" :key="index">
                {{ item.title }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-gray-200 text-sm">
            <tr
              v-for="(item, index) in tBody"
              :key="index"
              class="bg-white mb-1"
              @click="rowClick(item)"
            >
              <td>{{ item.rowNo }}</td>
              <td>{{ item.childNm }}</td>
              <td>{{ item.mobile }}</td>
              <td>{{ item.birth }}</td>
              <td>{{ item.age }}</td>
              <td>{{ item.consultDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <n-link
        to="/survey/start"
        class="btn button-info w-4/6 block text-center mt-8 text-xl font-extrabold m-auto rounded-full"
        >앙케이트 시작하기</n-link
      >
      <n-link class="go-home" to="/">home</n-link>
      <span class="bookclub-logo">북클럽 이미지</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      privateAgree: false,
      searchWord: null,
      tBody: [
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 5,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 10,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 15,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          consultDate: '2020-05-15'
        }
      ],
      tHeader: [
        { title: '#' },
        { title: '자녀이름' },
        { title: '휴대폰번호' },
        { title: '생년월일' },
        { title: '나이' },
        { title: '상담일' }
      ]
    }
  },
  methods: {
    rowClick(item) {
      this.$router.push({
        name: `${this.$route.name}-id`,
        params: {
          id: item.rowNo
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-result-table tbody {
  display: block;
  width: 100%;
  overflow: auto;
}
.search-result-table tbody tr,
.search-result-table thead tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
</style>
