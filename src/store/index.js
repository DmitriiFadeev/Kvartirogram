import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: [
      {
        color: '#FFFFFF',
        text: 'свободно'
      },
      {
        color: '#FFDE31',
        text: 'резерв'
      },
      {
        color: '#90CDF4',
        text: 'бронь'
      },
      {
        color: '#A6E0B3',
        text: 'договор'
      },
      {
        color: '#FED7D7',
        text: 'передано'
      },
      {
        color: '#C4C4C4',
        text: 'снято с реализации'
      }
    ],
    item: {
      name: 'ЖК Кислород Литер 8',
      body: [
        {
          entrance: 'Подъезд 1',
          apartments: [
            {
              floors: 1,
              rooms: [
                {
                  number: 1,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                },
                {
                  number: 2,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                },
                {
                  number: 3,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                },
                {
                  number: 4,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                },                {
                  number: 5,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                }
              ]
            },
            {
              floors: 2,
              rooms: [
                {
                  number: 6,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                },
                {
                  number: 7,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                },
                {
                  number: 8,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                },
                {
                  number: 9,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                },                {
                  number: 10,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                }
              ]
            }
          ],
        },
        {
          entrance: 'Подъезд 2',
          apartments: [
            {
              floors: 1,
              rooms: [
                {
                  number: 1,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                },
                {
                  number: 2,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                },
                {
                  number: 3,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                },
                {
                  number: 4,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                },                {
                  number: 5,
                  square: '50,3',
                  col: '1 комн.',
                  houseroom: '12,4',
                  summa: '78 000',
                  price: '3 978 000'
                }
              ]
            }
          ],
        }
      ],
    }
  },

  getters: {
    getItem(state){
      return state.item
    },
    getStatus(state){
      return state.status
    }
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
