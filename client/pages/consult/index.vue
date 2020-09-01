<template>
  <div class="consult">
    <div class="search-area">
      <div class="table w-full">
        <ul class="thead flex">
          <li class="">자녀이름</li>
          <li class="">전화번호</li>
          <li class="flex-auto">상담기간</li>
        </ul>
        <ul class="tbody flex">
          <li>
            <input
              v-model="searchParam.searchChldNm"
              type="text"
              class="w-full text-center border rounded-md py-2 float-left"
            />
          </li>
          <li>
            <input
              v-model="searchParam.searchTelNum"
              type="text"
              class="w-full text-center border rounded-md py-2 float-left"
            />
          </li>
          <li class="flex justify-start items-center">
            <Datepicker
              v-model="searchParam.searchStrDate"
              class="mr-2"
              :language="ko"
              :height="40"
              format="yyyy-MM-dd"
              input-class="datepicker-input"
            />
            <img
              class="date-icon mr-2"
              src="/btn_calendar.png"
              alt="날짜아이콘"
            />
            ~
            <Datepicker
              v-model="searchParam.searchEndDate"
              class="mx-2"
              :language="ko"
              :format="dateFormatter"
              input-class="datepicker-input"
            />
            <img class="date-icon" src="/btn_calendar.png" alt="날짜아이콘" />
          </li>
        </ul>
      </div>
      <button class="search-btn focus:outline-none" @click="getData(1)">
        찾기
      </button>
    </div>
    <div v-if="tBody.length" class="product-list p-8">
      <div class="table w-full">
        <ul class="thead flex">
          <li class="">#</li>
          <li class="flex-auto">자녀이름</li>
          <li class="">전화번호</li>
          <li class="">생년월일</li>
          <li class="">나이</li>
          <!-- <li class="">구매</li> -->
          <li class="">상담일자</li>
        </ul>
        <ul
          v-for="item in tBody"
          :key="item.cnslDttm"
          class="tbody flex"
          @click="rowClick(item)"
        >
          <li class="">{{ item.rowNo }}</li>
          <li class="flex-auto">{{ item.chldNm }}</li>
          <li class="">{{ item.mblTelNum }}</li>
          <li class="">{{ item.chldBthYmd }}</li>
          <li class="">{{ item.ageNm }}</li>
          <!-- <li class="">O</li> -->
          <li class="">{{ dateFormatter(item.cnslDttm) }}</li>
        </ul>
      </div>
      <Pagination
        :limit-page-count="page.totalPage"
        :size="10"
        :now-page="page.nowPage"
        @paginationClick="getData"
      />
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { ko } from 'vuejs-datepicker/dist/locale'

export default {
  name: 'ConsultIndex',
  layout: 'searchHistory',
  components: {
    Datepicker
  },
  data() {
    return {
      ko,
      page: {},
      searchParam: {},
      tBody: [],
      tHeader: [
        { title: '#' },
        { title: '자녀이름' },
        { title: '전화번호' },
        { title: '생년월일' },
        { title: '나이' },
        { title: '구매' },
        { title: '상담일' }
      ]
    }
  },
  methods: {
    dateFormatter(date) {
      return date === '' ? '' : this.$moment(date).format('YYYY-MM-DD')
    },
    rowClick(item) {
      this.$router.push({
        name: 'consult-id',
        params: {
          id: item
        }
      })
    },
    async getData(pageNum) {
      console.log(pageNum)
      if (pageNum) {
        this.searchParam.nowPage = pageNum
      }
      // Date -> String 변경
      this.transDate()
      try {
        const { result, page } = await this.$axios.$get(
          '/recipient/counsel/list',
          {
            params: { ...this.searchParam }
          }
        )
        console.warn(result)
        this.tBody = result
        this.page = page
      } catch (e) {
        console.log(e)
      }
    },
    /**
     * * 상담기간 날짜 문자열로 변경
     */
    transDate() {
      if (this.searchParam.searchStrDate) {
        this.searchParam.searchStrDate = this.dateFormatter(
          this.searchParam.searchStrDate
        )
      }
      if (this.searchParam.searchEndDate) {
        this.searchParam.searchEndDate = this.dateFormatter(
          this.searchParam.searchEndDate
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
