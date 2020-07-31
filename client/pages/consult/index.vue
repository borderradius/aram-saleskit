<template>
  <div class="consult">
    <div class="search-area">
      <table>
        <thead>
          <tr>
            <th>자녀이름</th>
            <th>전화번호</th>
            <th>상담기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" class="w-full text-center border rounded-md" />
            </td>
            <td>
              <input type="text" class="w-full text-center border rounded-md" />
            </td>
            <td class="text-center">
              <Datepicker
                class="inline-block"
                :language="ko"
                :format="dateFormatter"
                input-class="datepicker-input"
              />
              ~
              <Datepicker
                class="inline-block"
                :language="ko"
                :format="dateFormatter"
                input-class="datepicker-input"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button class="search-btn">찾기</button>
    </div>
    <div v-if="tBody.length" class="product-list p-8">
      <table class="table-basic search-result-table border rounded-lg">
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
            <td>{{ item.payment }}</td>
            <td>{{ item.consultDate }}</td>
          </tr>
        </tbody>
      </table>
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
