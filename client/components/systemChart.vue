<template>
  <div class="system-chart2 flex justify-between gtd">
    <ul class="system-chart-menu">
      <li>
        <div>표준보육과정 <small>(0세 ~ 2세)</small></div>
      </li>
      <li>누리과정<small>(3세 ~ 5세)</small></li>
      <li>초등교과<small>(저학년)</small></li>
      <li>초등교과<small>(고학년)</small></li>
    </ul>
    <div class="w-full">
      <ul class="w-full flex justify-between list-box first-row">
        <li
          v-for="(item, index) in data[0]"
          :key="index"
          :class="[item.isOn ? 'on' : '']"
        >
          {{ item.label }}
        </li>
      </ul>
      <ul class="w-full flex justify-between list-box second-row">
        <li
          v-for="(item, index) in data[1]"
          :key="index"
          :class="[item.isOn ? 'on' : '']"
        >
          {{ item.label }}
        </li>
      </ul>
      <ul class="w-full flex justify-between list-box third-row">
        <li
          v-for="(item, index) in data[2]"
          :key="index"
          :class="[item.isOn ? 'on' : '']"
        >
          {{ item.label }}
        </li>
      </ul>
      <ul class="w-full flex justify-between list-box fourth-row">
        <li
          v-for="(item, index) in data[3]"
          :key="index"
          :class="[item.isOn ? 'on' : '']"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    /**
     * * 선을 그리기 위한 시작점 찾기
     */
    box() {
      const firstBox = document.querySelector('.first-row li')
      const startPointX = firstBox.clientWidth / 2
      const startPointY = firstBox.clientHeight
      return { startPointX, startPointY }
    },
    drawLine() {
      // 라인 시작점 가져오기
      const { startPointX, startPointY } = this.box()

      const rowRoot = []
      const row = []

      // 각 과정의 루트클래스 담기
      for (let i = 0; i < 4; i++) {
        const order = ['first', 'second', 'third', 'fourth']
        rowRoot[i] = d3.select(`.${order[i]}-row`)
      }
      // 각 박스에 svg 생성
      for (let i = 0; i < 4; i++) {
        row[i] = rowRoot[i]
          .selectAll('li')
          .append('svg')
          .style('overflow', 'inherit')
          .style('position', 'absolute')
          .style('top', 0)
          .style('left', 0)
          .attr('width', '100%')
          .attr('height', '100%')
      }

      // svg안에 rect 그리기
      for (let i = 0; i < 4; i++) {
        row[i]
          .append('rect')
          .style('position', 'absolute')
          .style('top', 0)
          .style('left', 0)
          .attr('stroke', (d, idx, item) => {
            const hasOn =
              item[idx].parentElement.parentElement.classList.value === 'on'
            return hasOn ? '#ff6446' : ''
          })
          .attr('stroke-width', 4)
          .attr('width', '100%')
          .attr('height', '97.5%')
          .attr('fill-opacity', 0)
      }

      // 첫번째 줄 선 그리기
      row[0]
        .append('polyline')
        .attr('points', (d, idx, item) => {
          if (idx === 1) {
            return `${startPointX + 30},${startPointY} ${startPointX + 30},100`
          } else if (idx === 2) {
            return `${startPointX + 20},${startPointY} ${startPointX + 20},100`
          } else if (idx === 3) {
            return `${startPointX},${startPointY} ${startPointX},80 ${startPointX *
              2.5}, 80 ${startPointX * 2.5}, 100 ${startPointX *
              2.5}, 80 ${startPointX * 5 + 20}, 80 ${startPointX *
              5}, 80 ${startPointX * 5}, 100`
          } else if (idx === 4) {
            return `${startPointX},${startPointY} ${startPointX},80`
          } else if (idx === 5) {
            return `${startPointX},${startPointY} ${startPointX},80`
          } else {
            return `${startPointX},${startPointY} ${startPointX},100`
          }
        })
        .attr('stroke', '#ddd')
        .attr('stroke-width', 3)
        .attr('fill', 'none')

      // 두번째 줄 선 그리기
      row[1]
        .append('polyline')
        .attr('points', (d, idx, item) => {
          if (idx === 0) {
            return `${startPointX},${startPointY} ${startPointX},100 ${startPointX},80 ${startPointX *
              2 +
              10},80 ${startPointX * 2 + 10}, 200`
          } else if (idx === 1) {
            return `${startPointX},${startPointY} ${startPointX},100 ${startPointX},80 ${startPointX *
              3},80 ${startPointX * 3},100 ${startPointX *
              3},100 ${startPointX * 3},80 ${startPointX * 4},80 ${startPointX *
              4},60 ${startPointX * 4},80 ${startPointX * 5},80 ${startPointX *
              5},100`
          } else if (idx === 3 || idx === 4) {
            return `${startPointX + 20},${startPointY} ${startPointX + 20},100`
          }
        })
        .attr('stroke', '#ddd')
        .attr('stroke-width', 3)
        .attr('fill', 'none')

      // 세번째 줄 선 그리기
      row[2]
        .append('polyline')
        .attr('points', (d, idx, item) => {
          if (idx === 0 || idx === 1) {
            return `${startPointX},${startPointY} ${startPointX},100`
          } else if (idx === 2) {
            return `${startPointX - 30},${startPointY} ${startPointX -
              30},100 ${startPointX - 30},80 ${startPointX * 2 -
              20},80 ${startPointX * 2 - 20},100`
          } else if (idx === 3) {
            return `${startPointX},${startPointY} ${startPointX},100`
          } else if (idx === 4) {
            return `${startPointX - 40},${startPointY} ${startPointX -
              40},100 ${startPointX - 40},80 ${startPointX *
              2},80 ${startPointX * 2},100 ${startPointX * 2},80 ${startPointX *
              3},80 ${startPointX * 3},100 ${startPointX * 3},60`
          }
        })
        .attr('stroke', '#ddd')
        .attr('stroke-width', 3)
        .attr('fill', 'none')
    }
  }
}
</script>

<style lang="scss" scoped></style>
