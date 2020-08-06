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
              type="text"
              class="w-full text-center border rounded-md py-2"
            />
          </li>
          <li class="px-1">
            <input
              type="text"
              class="w-full text-center border rounded-md py-2"
            />
          </li>
          <li class="flex-auto">
            <Datepicker
              class="inline-block mr-2"
              :language="ko"
              :format="dateFormatter"
              :height="40"
              input-class="datepicker-input"
            />
            ~
            <Datepicker
              class="inline-block ml-2"
              :language="ko"
              :format="dateFormatter"
              input-class="datepicker-input"
            />
          </li>
        </ul>
      </div>
      <button class="search-btn">찾기</button>
    </div>
    <div v-if="tBody.length" class="product-list p-8">
      <div class="table w-full">
        <ul class="thead flex">
          <li class="flex-auto">#</li>
          <li class="flex-auto">자녀이름</li>
          <li class="">전화번호</li>
          <li class="">생년월일</li>
          <li class="">나이</li>
          <li class="">구매</li>
          <li class="">상담일자</li>
        </ul>
        <ul
          v-for="item in 9"
          :key="item"
          class="tbody flex"
          @click="rowClick(item)"
        >
          <li class="flex-auto">99</li>
          <li class="flex-auto">이아람</li>
          <li class="">010-1234-1234</li>
          <li class="">2012-12-12</li>
          <li class="">만 8세</li>
          <li class="">O</li>
          <li class="">2020-05-15</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { ko } from 'vuejs-datepicker/dist/locale'

export default {
  layout: 'searchHistory',
  components: {
    Datepicker
  },
  data() {
    return {
      ko,
      tBody: [
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          payment: 'O',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          payment: 'O',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          payment: 'O',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          payment: 'O',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 5,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          payment: 'O',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          payment: 'O',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          payment: 'O',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          payment: 'O',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 1,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          payment: 'O',
          consultDate: '2020-05-15'
        },
        {
          rowNo: 10,
          childNm: '김자녀',
          mobile: '010-1234-1234',
          birth: '1984-05-28',
          age: '37',
          payment: 'O',
          consultDate: '2020-05-15'
        }
      ],
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
        name: `${this.$route.name}-id`,
        params: {
          id: item.rowNo
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
