export const state = () => {
  return {
    childInfo: {},
    allSlideData: [
      {
        code: 'AC0101',
        label: '의사소통',
        children: [
          {
            label: '국어',
            code: 'AC0401',
            imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_c1.jpg'
          },
          {
            label: '영어',
            code: 'AC0402',
            imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_c2.jpg'
          }
        ],
        imgSrc: [
          'https://contents.arambookclub.com/counsel/ac01/ac0101/sk_c_1.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0101/sk_c_2.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0101/sk_c_3.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0101/sk_c_4.jpg'
        ]
      },
      {
        code: 'AC0102',
        sequence: 'CQ-001001',
        label: '자연탐구',
        children: [
          {
            label: '수학',
            code: 'AC0403',
            imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_f1.jpg'
          },
          {
            label: '과학',
            code: 'AC0404',
            imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_f2.jpg'
          }
        ],
        imgSrc: [
          'https://contents.arambookclub.com/counsel/ac01/ac0102/sk_f_1.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0102/sk_f_2.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0102/sk_f_3.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0102/sk_f_4.jpg'
        ]
      },
      {
        code: 'AC0103',
        label: '사회관계',
        children: [
          {
            label: '사회',
            code: 'AC0405',
            imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_d1.jpg'
          },
          {
            label: '도덕',
            code: 'AC0406',
            imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_d2.jpg'
          }
        ],
        imgSrc: [
          'https://contents.arambookclub.com/counsel/ac01/ac0103/sk_d_1.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0103/sk_d_2.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0103/sk_d_3.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0103/sk_d_4.jpg'
        ]
      },
      {
        code: 'AC0104',
        label: '예술경험',
        children: [
          {
            label: '음악',
            code: 'AC0407',
            imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_e1.jpg'
          },
          {
            label: '미술',
            code: 'AC0408',
            imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_e2.jpg'
          },
          {
            label: '체육',
            code: 'AC0409',
            imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_e3.jpg'
          }
        ],
        imgSrc: [
          'https://contents.arambookclub.com/counsel/ac01/ac0104/sk_e_1.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0104/sk_e_2.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0104/sk_e_3.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0104/sk_e_4.jpg'
        ]
      },
      {
        code: 'AC0105',
        label: '기본생활',
        children: [
          {
            label: '체육',
            code: 'AC0409',
            imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_e2.jpg'
          }
        ],
        imgSrc: [
          'https://contents.arambookclub.com/counsel/ac01/ac0105/sk_a_1.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0105/sk_a_2.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0105/sk_a_3.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0105/sk_a_4.jpg'
        ]
      },
      {
        code: 'AC0106',
        label: '신체운동',
        children: [
          {
            label: '체육',
            code: 'AC0409',
            imgSrc: 'https://contents.arambookclub.com/counsel/ac04/sk_e2.jpg'
          }
        ],
        imgSrc: [
          'https://contents.arambookclub.com/counsel/ac01/ac0106/sk_b_1.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0106/sk_b_2.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0106/sk_b_3.jpg',
          'https://contents.arambookclub.com/counsel/ac01/ac0106/sk_b_4.jpg'
        ]
      }
    ]
  }
}

export const mutations = {
  SET_CHILD_INFO(state, payload) {
    state.childInfo = payload
  }
}

export const actions = {
  setChildInfo({ commit }, params = {}) {
    console.warn('앙케이트에 필요한 자녀정보 : ', params)
    commit('SET_CHILD_INFO', params)
  }
}
