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
          <li class="px-1">
            <input
              v-model="searchParam.searchChldNm"
              type="text"
              class="w-full text-center border rounded-md py-2"
            />
          </li>
          <li class="px-1">
            <input
              v-model="searchParam.searchTelNum"
              type="text"
              class="w-full text-center border rounded-md py-2"
            />
          </li>
          <li class="flex-auto">
            <Datepicker
              v-model="searchParam.searchStrDate"
              class="inline-block mr-2"
              :language="ko"
              :height="40"
              format="yyyy-MM-dd"
              input-class="datepicker-input"
            />
            ~
            <Datepicker
              v-model="searchParam.searchEndDate"
              class="inline-block ml-2"
              :language="ko"
              :format="dateFormatter"
              input-class="datepicker-input"
            />
          </li>
        </ul>
      </div>
      <button class="search-btn" @click="getData">찾기</button>
    </div>
    <div v-if="tBody.length" class="product-list p-8">
      <div class="table w-full">
        <ul class="thead flex">
          <li class="flex-auto">#</li>
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
          <li class="flex-auto">{{ item.rowNo }}</li>
          <li class="flex-auto">{{ item.chldNm }}</li>
          <li class="">{{ item.mblTelNum }}</li>
          <li class="">{{ item.chldBthYmd }}</li>
          <li class="">{{ item.ageNm }}</li>
          <!-- <li class="">O</li> -->
          <li class="">{{ dateFormatter(item.cnslDttm) }}</li>
        </ul>
      </div>
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
    async getData() {
      // Date -> String 변경
      this.transDate()
      try {
        const { result } = await this.$axios.$get('/recipient/counsel/list', {
          params: { ...this.searchParam }
        })
        console.warn(result)
        this.tBody = result
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
