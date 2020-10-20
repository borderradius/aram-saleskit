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
          v-for="(item, index) in data1"
          :key="index"
          :class="[
            item.isOn ? 'on' : '',
            item.isPriority ? 'isPriority' : '',
            item.isLast ? 'isLast' : ''
          ]"
        >
          <div class="rect-label-wrap">
            <span v-if="item.isLast" class="rect-label">최종</span>
            <span v-if="item.isPriority" class="rect-label">우선</span>
          </div>
          {{ item.label }}
        </li>
      </ul>
      <ul class="w-full flex justify-between list-box second-row">
        <li
          v-for="(item, index) in data2"
          :key="index"
          :class="[
            item.isOn ? 'on' : '',
            item.isLeft ? 'isLeft' : '',
            item.isRight ? 'isRight' : '',
            item.isPriority ? 'isPriority' : '',
            item.isLast ? 'isLast' : ''
          ]"
        >
          <div class="rect-label-wrap">
            <span v-if="item.isLast" class="rect-label">최종</span>
            <span v-if="item.isPriority" class="rect-label">우선</span>
          </div>
          {{ item.label }}
        </li>
      </ul>
      <ul class="w-full flex justify-between list-box third-row">
        <li
          v-for="(item, index) in data3"
          :key="index"
          :class="[
            item.isOn ? 'on' : '',
            item.isLeft ? 'isLeft' : '',
            item.isRight ? 'isRight' : '',
            item.isPriority ? 'isPriority' : '',
            item.isLast ? 'isLast' : ''
          ]"
        >
          <div class="rect-label-wrap">
            <span v-if="item.isLast" class="rect-label">최종</span>
            <span v-if="item.isPriority" class="rect-label">우선</span>
          </div>
          {{ item.label }}
        </li>
      </ul>
      <ul class="w-full flex justify-between list-box fourth-row">
        <li
          v-for="(item, index) in data[3]"
          :key="index"
          :class="[
            item.isOn ? 'on' : '',
            item.isPriority ? 'isPriority' : '',
            item.isLast ? 'isLast' : ''
          ]"
        >
          <div class="rect-label-wrap">
            <span v-if="item.isLast" class="rect-label">최종</span>
            <span v-if="item.isPriority" class="rect-label">우선</span>
          </div>
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
    },
    priorityData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    data1() {
      const tempData = this._.cloneDeep(this.data[0])
      return tempData
    },
    data2() {
      const tempData = this._.cloneDeep(this.data[1])
      tempData.forEach((v, i) => {
        tempData[i].isLeft = false
        tempData[i].isRight = false
      })
      const tempData2 = this._.cloneDeep(this.data[2])
      for (const item of tempData2) {
        if (item.label === '국어' && item.isOn) {
          tempData[0].isLeft = true
        }
        if (item.label === '국어' && !item.isOn) {
          tempData[0].isRight = true
        }
        if (item.label === '수학' && item.isOn) {
          tempData[1].isLeft = true
        }
        if (item.label === '슬기로운 생활' && item.isOn) {
          tempData[1].isRight = true
        }
        if (item.label === '슬기로운 생활' && item.isOn) {
          tempData[2].isLeft = true
        }
        if (item.label === '바른생활' && item.isOn) {
          tempData[2].isRight = true
        }
      }
      // console.warn('isLeft, isRight 추가된 data2 : ', tempData)
      return tempData
    },
    data3() {
      const tempData = this._.cloneDeep(this.data[2])
      tempData.forEach((v, i) => {
        tempData[i].isLeft = false
        tempData[i].isRight = false
      })
      const tempData2 = this._.cloneDeep(this.data[3])
      for (const item of tempData2) {
        if (item.label === '과학' && item.isOn) {
          tempData[2].isLeft = true
        }
        if (item.label === '사회' && item.isOn) {
          tempData[2].isRight = true
        }
        if (item.label === '미술' && item.isOn) {
          tempData[4].isLeft = true
        }
        if (item.label === '체육' && item.isOn) {
          tempData[4].isRight = true
        }
      }
      // console.warn(tempData2)
      return tempData
    }
  },
  updated() {
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
    /**
     * * 박스와 데이터에 따라 선 그리기
     */
    drawLine() {
      console.warn('라인그리기 시작')
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
            const hasOn = item[
              idx
            ].parentElement.parentElement.classList.value.includes('on')
            const hasPriority = item[
              idx
            ].parentElement.parentElement.classList.value.includes('isPriority')
            return hasOn || hasPriority ? '#ff6446' : ''
          })
          .attr('stroke-width', 4)
          .attr('width', '100%')
          .attr('height', '97.5%')
          .attr('fill-opacity', 0)
      }

      // 첫째줄 ---- 회색선, 빨간선 그리기
      row[0]
        .append('polyline')
        .attr('points', (d, idx, item) => {
          if (idx === 0)
            return `${startPointX},${startPointY} ${startPointX},100`
          if (idx === 1)
            return `${startPointX + 30},${startPointY} ${startPointX + 30},100`
          if (idx === 2)
            return `${startPointX + 20},${startPointY} ${startPointX + 20},100`
          if (idx === 3)
            // 예술생활 -> 예술경험
            return `${startPointX},${startPointY} ${startPointX},80 ${startPointX *
              2.5} 80 ${startPointX * 2.5} 100`
          if (idx === 4)
            // 기본생활 -> 신체운동 및 건강
            return `${startPointX},${startPointY} ${startPointX},80 ${startPointX *
              3 -
              2.5} 80, ${startPointX * 3 - 2.5} 100`
          if (idx === 5)
            // 신체운동 -> 신체운동 및 건강
            return `${startPointX},${startPointY} ${startPointX},80 ${startPointX -
              12.5},80 ${startPointX - 12.5} 100`
        })
        .attr('stroke', (d, idx, item) => {
          const isOn = item[
            idx
          ].parentElement.parentElement.classList.value.includes('on')
          return isOn ? '#ff6446' : '#ddd'
        })
        .attr('stroke-width', 3)
        .attr('fill', 'none')

      // 둘째줄 ---- 회색선 그리기
      row[1]
        .append('polyline')
        .attr('points', (d, idx, item) => {
          if (idx === 0) {
            return `${startPointX},${startPointY} ${startPointX},100 ${startPointX},80 ${startPointX *
              2 +
              10},80 ${startPointX * 2 + 10}, 200`
            // } else if (idx === 1) {
            //   return `${startPointX},${startPointY} ${startPointX},100 ${startPointX},80 ${startPointX *
            //     3 -
            //     27.5},80 ${startPointX * 3 - 27.5},100 ${startPointX *
            //     3},100 ${startPointX * 3},80 ${startPointX * 4},80 ${startPointX *
            //     4},60 ${startPointX * 4},80 ${startPointX * 5},80 ${startPointX *
            //     5},100`
            // } else if (idx === 3 || idx === 4) {
            //   return `${startPointX + 20},${startPointY} ${startPointX + 20},100`
            // }
          } else if (idx === 1) {
            return `${startPointX},${startPointY} ${startPointX},100 ${startPointX},80 ${startPointX *
              3 -
              27.5},80 ${startPointX * 3 - 27.5},100`
          } else if (idx === 2) {
            return `${startPointX * 1.5 - 3.5},${startPointY} ${startPointX *
              1.5 -
              3.5},80 ${startPointX - 43.5},80 ${startPointX -
              43.5},100 ${startPointX - 43.5},80 ${startPointX * 2.5 -
              4.5},80 ${startPointX * 2.5 - 4.5},100`
          } else if (idx === 3 || idx === 4) {
            return `${startPointX + 20},${startPointY} ${startPointX + 20},100`
          }
        })
        .attr('stroke', '#ddd')
        .attr('stroke-width', 3)
        .attr('fill', 'none')
      // 둘째줄 ---- 빨간선 그리기
      row[1]
        .append('polyline')
        .attr('points', (d, idx, item) => {
          const isLeft = item[
            idx
          ].parentElement.parentElement.classList.value.includes('isLeft')
          const isRight = item[
            idx
          ].parentElement.parentElement.classList.value.includes('isRight')
          const isOn = item[
            idx
          ].parentElement.parentElement.classList.value.includes('on')

          if (idx === 0) {
            let points = `${startPointX},${startPointY} ${startPointX},80 `
            if (isLeft && isOn) {
              points += `${startPointX},80 ${startPointX},100`
            }
            if (isRight && isOn) {
              points += `${startPointX * 2 + 10},80 ${startPointX * 2 + 10},200`
            }
            return points
          }
          if (idx === 1) {
            let points = `${startPointX},${startPointY} ${startPointX},80 `
            if (isLeft && isOn) {
              points += `${startPointX},100`
            }
            if (isRight && isOn) {
              points += `${startPointX},80 ${startPointX * 3 -
                27.5},80 ${startPointX * 3 - 27.5},100`
            }
            return points
          }
          if (idx === 2) {
            let points = `${startPointX * 1.5 -
              3.5},${startPointY} ${startPointX * 1.5 - 3.5},80 `
            if (isLeft && isOn) {
              points += `${startPointX - 43.5},80 ${startPointX - 43.5},100`
            }
            if (isRight && isOn) {
              points += `${startPointX * 2.5 - 4.5},80 ${startPointX * 2.5 -
                4.5},100`
            }
            return points
          }
          if (idx === 3 || idx === 4) {
            return `${startPointX + 20},${startPointY} ${startPointX + 20},100`
          }
        })
        .attr('stroke', (d, idx, item) => {
          const isOn = item[
            idx
          ].parentElement.parentElement.classList.value.includes('on')
          return isOn ? '#ff6446' : '#ddd'
        })
        .attr('stroke-width', 3)
        .attr('fill', 'none')

      // 세번째 ---- 회색선 그리기
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

      // 세번째줄 ---- 빨간선 그리기
      row[2]
        .append('polyline')
        .attr('points', (d, idx, item) => {
          const isLeft = item[
            idx
          ].parentElement.parentElement.classList.value.includes('isLeft')
          const isRight = item[
            idx
          ].parentElement.parentElement.classList.value.includes('isRight')
          const isOn = item[
            idx
          ].parentElement.parentElement.classList.value.includes('on')
          if (idx === 0 || idx === 1) {
            return `${startPointX},${startPointY} ${startPointX},100`
          }
          if (idx === 2) {
            let points = `${startPointX - 30},${startPointY} ${startPointX -
              30},80 `
            if (isLeft && isOn) {
              points += `${startPointX - 30},100`
              return points
            }
            if (isRight && isOn) {
              points += `${startPointX * 2 - 20},80 ${startPointX * 2 - 20},100`
              return points
            }
          }
          if (idx === 3) {
            return `${startPointX},${startPointY} ${startPointX},100`
          }
          if (idx === 4) {
            let points = `${startPointX - 40},${startPointY} ${startPointX -
              40},80 `
            if (isLeft && isOn) {
              points += `${startPointX * 2},80 ${startPointX * 2},100`
              return points
            }
            if (isRight && isOn) {
              points += `${startPointX * 3},80 ${startPointX * 3},100`
              return points
            }
            if (!isLeft && !isRight && isOn) {
              points += `${startPointX - 40},100`
              return points
            }
          }
          if (idx === 5) {
            return `${startPointX - 4},${startPointY} ${startPointX - 4},100`
          }
        })
        .attr('stroke', (d, idx, item) => {
          const isOn = item[
            idx
          ].parentElement.parentElement.classList.value.includes('on')
          console.warn(isOn)
          return isOn ? '#ff6446' : '#ddd'
        })
        .attr('stroke-width', 3)
        .attr('fill', 'none')
    }
  }
}
</script>

<style lang="scss" scoped>
.rect-label-wrap {
  position: absolute;
  top: 0;
  left: 0;

  display: inline-block;
  /* padding: 6px; */
  font-size: 0.7rem;
  .rect-label {
    display: inline-block;
    margin-right: 2px;
    background: #999;
    padding: 5px;
    color: #333;
  }
}
</style>
