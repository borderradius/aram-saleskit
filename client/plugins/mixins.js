import Vue from 'vue'

Vue.mixin({
  computed: {
    isDesktop() {
      return this.$mq === 'desktop'
    },
    isMobile() {
      return this.$mq === 'mobile'
    }
  },
  methods: {
    makePostData(index1, index2) {
      this.slideData[index1][index2].click = true
      const postListParam = {}
      for (const item of this.slideData[index1]) {
        if (item.click) {
          postListParam.choicedAnswerEduCd = item.code // 선택한 학습코드
        } else {
          postListParam.nchoAsctEduCoursCd = item.code // 비선택 학습코드
        }
      }
      return postListParam
    },
    clickSound() {
      const audio = new Audio('/saleskit_sfx.mp3')
      audio.play()
    },
    shuffle(item) {
      let length = item.length
      // 아래에서 length 후위 감소 연산자를 사용하면서 결국 0이된다.
      // 프로그래밍에서 0은 false를 의미하기에 0이되면 종료.
      while (length) {
        // 랜덤한 배열 index 추출
        const index = Math.floor(length-- * Math.random())

        // 배열의 끝에서부터 0번째 아이템을 순차적으로 대입
        const temp = item[length]

        // 랜덤한 위치의 값을 맨뒤(item[length])부터 셋팅
        item[length] = item[index]

        // 랜덤한 위치에 위에 설정한 temp값 셋팅
        item[index] = temp
      }
      // 배열을 리턴해준다.
      return item
    },
    imageRandomNumber(imgCount) {
      return Math.floor(Math.random() * imgCount)
    },
    getRandomData(index = 0, selectedCode) {
      // 최초 1번 랜덤2개 뽑기.
      if (index === 0) {
        // 0. 셔플할 데이터 복사하기
        const shuffleData = this._.cloneDeep(this.allSlideData)
        // 1. 셔플하기
        this.shuffle(shuffleData)
        // 2. 첫번째 두번째 데이터 뽑아오기
        const arrObj = []
        const firstItem = {
          code: shuffleData[0].code,
          label: shuffleData[0].label,
          click: false,
          imgSrc: shuffleData[0].imgSrc[this.imageRandomNumber(4)],
          children: shuffleData[0].children
        }
        const secondItem = {
          code: shuffleData[1].code,
          label: shuffleData[1].label,
          click: false,
          imgSrc: shuffleData[1].imgSrc[this.imageRandomNumber(4)],
          children: shuffleData[1].children
        }

        arrObj.push(firstItem)
        arrObj.push(secondItem)
        this.slideData.push(arrObj)
      } else {
        // 최초 아닐경우
        // 0. 선택한 애는 제외된 배열 만들기
        // 0-1. exceptCode에 넣기
        this.exceptCode.push(selectedCode)
        const tempData = this._.cloneDeep(this.allSlideData)
        // 0-2. 선택된 애
        const selectedItem = tempData.filter(
          (item) => item.code === selectedCode
        )
        // 0-3. 선택된 애 제외한 나머지
        const extraData = tempData.filter(
          (item) => !this.exceptCode.includes(item.code)
        )
        console.warn('선택된 애 :::', selectedItem)
        console.warn('나머지 애 :::', extraData)
        // 1. 0번 배열 셔플
        this.shuffle(extraData)
        // 2. 선택된 애는 첫번째에 넣고
        const arrObj = []
        const firstItem = {
          code: selectedItem[0].code,
          label: selectedItem[0].label,
          click: false,
          children: selectedItem[0].children,
          imgSrc: selectedItem[0].imgSrc[this.imageRandomNumber(4)]
        }
        // 3. 두번째는 1번의 배열 첫번째 요소 넣기
        const secondItem = {
          code: extraData[0].code,
          label: extraData[0].label,
          click: false,
          children: extraData[0].children,
          imgSrc: extraData[0].imgSrc[this.imageRandomNumber(4)]
        }
        arrObj.push(firstItem)
        arrObj.push(secondItem)
        this.slideData.push(arrObj)
      }
    }
  }
})
