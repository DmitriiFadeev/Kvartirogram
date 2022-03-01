import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: [
      {
        class: 'free',
        text: 'свободно'
      },
      {
        class: 'reserve',
        text: 'резерв'
      },
      {
        class: 'booking',
        text: 'бронь'
      },
      {
        class: 'contract',
        text: 'договор'
      },
      {
        class: 'transferred',
        text: 'передано'
      },
      {
        class: 'close',
        text: 'снято с реализации'
      }
    ],
    currentTabs: '1',
    selectedObj: 'ЖК Кислород Литер 8',
    priceStart: null,
    priceEnd: null,
    squareStart: null,
    squareEnd: null,
    filteredItems: false,
    items: [{
      name: 'ЖК Кислород Литер 8',
      body: [
        {
          entrance: 'Подъезд 1',
          apartments: [
            {
              lvl: 1,
              rooms: [
                {
                  id: (new Date()).getTime(),
                  number: 1,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                },
                {
                  id: (new Date()).getTime(),
                  number: 2,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                },
                {
                  id: (new Date()).getTime(),
                  number: 3,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                },
                {
                  id: (new Date()).getTime(),
                  number: 4,
                  square: 50.3,
                  col: 1,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                },
                {
                  id: (new Date()).getTime(),
                  number: 5,
                  square: 50.3,
                  col: 2,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                }
              ]
            },
            {
              lvl: 2,
              rooms: [
                {
                  id: (new Date()).getTime(),
                  number: 6,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                },
                {
                  id: (new Date()).getTime(),
                  number: 7,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                },
                {
                  id: (new Date()).getTime(),
                  number: 8,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                },
                {
                  id: (new Date()).getTime(),
                  number: 9,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'close'
                },
                {
                  id: (new Date()).getTime(),
                  number: 10,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                }
              ]
            },
            {
              lvl: 3,
              rooms: [
                {
                  id: (new Date()).getTime(),
                  number: 11,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'transferred'
                },
                {
                  id: (new Date()).getTime(),
                  number: 12,
                  square: 50.3,
                  col: 3,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                },
                {
                  id: (new Date()).getTime(),
                  number: 13,
                  square: 50.3,
                  col: 2,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'booking'
                },
                {
                  id: (new Date()).getTime(),
                  number: 14,
                  square: 50.3,
                  col: 1,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                },
                {
                  id: (new Date()).getTime(),
                  number: 15,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                }
              ]
            },
            {
              lvl: 4,
              rooms: [
                {
                  id: (new Date()).getTime(),
                  number: 16,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                },
                {
                  id: (new Date()).getTime(),
                  number: 17,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'reserve'
                },
                {
                  id: (new Date()).getTime(),
                  number: 18,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'free'
                },
                {
                  id: (new Date()).getTime(),
                  number: 19,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'booking'
                },
                {
                  id: (new Date()).getTime(),
                  number: 20,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'booking'
                }
              ]
            },
          ],
        },
        {
          entrance: 'Подъезд 2',
          apartments: [
            {
              lvl: 1,
              rooms: [
                {
                  id: (new Date()).getTime(),
                  number: 1,
                  square: 50.3,
                  col: 2,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 4000000,
                  status: 'booking'
                },
                {
                  id: (new Date()).getTime(),
                  number: 2,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'booking'
                },
                {
                  id: (new Date()).getTime(),
                  number: 3,
                  square: 50.3,
                  col: 5,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'booking'
                },
                {
                  id: (new Date()).getTime(),
                  number: 4,
                  square: 50.3,
                  col: 1,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'booking'
                },
                {
                  id: (new Date()).getTime(),
                  number: 5,
                  square: 55.3,
                  col: 1,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'booking'
                }
              ]
            },
            {
              lvl: 2,
              rooms: [
                {
                  id: (new Date()).getTime(),
                  number: 6,
                  square: 50.3,
                  col: 2,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3500000,
                  status: 'free'
                },
                {
                  id: (new Date()).getTime(),
                  number: 7,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'booking'
                },
                {
                  id: (new Date()).getTime(),
                  number: 8,
                  square: 50.3,
                  col: 5,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'contract'
                },
                {
                  id: (new Date()).getTime(),
                  number: 9,
                  square: 50.3,
                  col: 1,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'reserve'
                },
                {
                  id: (new Date()).getTime(),
                  number: 10,
                  square: 55.3,
                  col: 1,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'booking'
                }
              ]
            }
          ],
        },
        {
          entrance: 'Подъезд 2',
          apartments: [
            {
              lvl: 1,
              rooms: [
                {
                  id: (new Date()).getTime(),
                  number: 1,
                  square: 50.3,
                  col: 2,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 4000000,
                  status: 'booking'
                },
                {
                  id: (new Date()).getTime(),
                  number: 2,
                  square: 50.3,
                  col: 4,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'booking'
                },
                {
                  id: (new Date()).getTime(),
                  number: 3,
                  square: 50.3,
                  col: 5,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'booking'
                },
                {
                  id: (new Date()).getTime(),
                  number: 4,
                  square: 50.3,
                  col: 1,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'booking'
                },
                {
                  id: (new Date()).getTime(),
                  number: 5,
                  square: 55.3,
                  col: 1,
                  houseroom: 12.4,
                  summa: 78000,
                  price: 3978000,
                  status: 'booking'
                }
              ]
            }
          ],
        },
      ],
    }, {
        name: 'ЖК Кислород Литер 9',
        body: [
          {
            entrance: 'Подъезд 1',
            apartments: [
              {
                lvl: 1,
                rooms: [
                  {
                    id: (new Date()).getTime(),
                    number: 1,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 2,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 3,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 4,
                    square: 50.3,
                    col: 1,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 5,
                    square: 50.3,
                    col: 2,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  }
                ]
              },
              {
                lvl: 2,
                rooms: [
                  {
                    id: (new Date()).getTime(),
                    number: 6,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 7,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 8,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 9,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'close'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 10,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  }
                ]
              },
              {
                lvl: 3,
                rooms: [
                  {
                    id: (new Date()).getTime(),
                    number: 11,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'transferred'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 12,
                    square: 50.3,
                    col: 3,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 13,
                    square: 50.3,
                    col: 2,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'booking'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 14,
                    square: 50.3,
                    col: 1,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 15,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  }
                ]
              },
              {
                lvl: 4,
                rooms: [
                  {
                    id: (new Date()).getTime(),
                    number: 16,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 17,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'reserve'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 18,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'free'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 19,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'booking'
                  },
                  {
                    id: (new Date()).getTime(),
                    number: 20,
                    square: 50.3,
                    col: 4,
                    houseroom: 12.4,
                    summa: 78000,
                    price: 3978000,
                    status: 'booking'
                  }
                ]
              },
            ],
          },
        ],
    }],
    checkboxes: [
      {id: 0, status: true, lvl: 'все' },
      {id: 1, status: false, lvl: 1 },
      {id: 2, status: false, lvl: 2 },
      {id: 3, status: false, lvl: 3 },
      {id: 4, status: false, lvl: 4 },
      {id: 5, status: false, lvl: 5 },
    ],
    listObject: [],
    lvlList: [],
    currentItem: {},
    activeLvl: 1
  },

  getters: {
    getItem(state){
      let filterData = {}
      if(state.activeLvl) {

        let selectedObj = state.items.filter(item => item.name === state.selectedObj)
        let result = []
        let data = selectedObj.map(item => {

          for (let i of item.body) {

            let q = {
              entrance: i.entrance,
              apartments: []
            }

            for (let apartments of i.apartments) {

              let qq = apartments.rooms.map(itm => {

                if (state.priceStart && itm.price <= Number(state.priceStart)) {
                  return {...itm, active: 'disabled'}
                }

                if (state.priceEnd && itm.price >= Number(state.priceEnd)) {
                  return {...itm, active: 'disabled'}
                }

                if (state.squareStart && itm.square <= state.squareStart) {
                  return {...itm, active: 'disabled'}
                }

                if (state.squareEnd && itm.square >= Number(state.squareEnd)) {
                  return {...itm, active: 'disabled'}
                }

                for (let i = 0; i < state.checkboxes.length; i++) {
                  let element = state.checkboxes[i]

                  if (element.lvl === 'все' && element.status) {
                    return itm
                  }

                  if (element.lvl == itm.col && !element.status) {
                    return {...itm, active: 'disabled'}
                  }
                }
                return itm
              })

              if (state.activeLvl == apartments.lvl) {
                q.apartments.push({lvl: apartments.lvl, selectlvl: true, rooms: qq})
              } else {
                q.apartments.push({lvl: apartments.lvl, rooms: qq})
              }
            }
            result.push(q)
          }
        })

        if (state.filteredItems) {
          for (let i = 0; i < result.length; i++) {
            let element = result[i]
            element.apartments = element.apartments.reverse()
          }
        }

        filterData = {
          name: selectedObj[0].name,
          update: selectedObj[0].update,
          load: selectedObj[0].load,
          body: result
        }

        state.currentItem = filterData
      }

      return filterData
    },
    getStatus(state){
      return state.status
    },
    getListObject(state){
      return state.listObject = state.items.map(item => item.name)
    },
    getFloors(state){
      return state.status
    },
    getCurrentTabs(state){
      return state.currentTabs
    },
    getLvlList(state){
      return state.lvlList
    },
    getFilteredItems(state){
      return state.filteredItems
    },
    getActiveLvl(state){
      return state.activeLvl
    }
  },

  mutations: {
    setCurrentTabs(state, value){
      state.currentTabs = value;
    },

    setFilter(state, value){
      state.selectedObj = value.selectedObj;
      state.selectedRooms =  value.selectedRooms;
      state.priceStart = value.priceStart;
      state.priceEnd = value.priceEnd;
      state.squareStart = value.squareStart;
      state.squareEnd = value.squareEnd;
      state.checkboxes = value.checkboxes;
    },

    setSortList(state){
      state.filteredItems = !state.filteredItems
    },
    setLvl(state){
      let lvlList = [];
      for (let entrance of state.currentItem.body){
        for (let level in entrance.apartments){
          if(!lvlList.includes(level)){
            lvlList.push(level)
          }
        }
      }

      if(state.filteredItems) {
        state.lvlList = lvlList.reverse()
      } else {
        state.lvlList = lvlList
      }
    },

    setFilteredItems(state){
      state.filteredItems = false
    },

    setActiveLvl(state, value){
      state.activeLvl = value.target.id
    }
  },
  actions: {
    setSortList({ commit, dispatch }, value) {
      commit('setSortList', value);
      dispatch('setLvl', value);
    },
    setLvl({ commit }, value) {
      commit('setLvl', value);
    },
    setActiveLvl({ commit }, value) {
      commit('setActiveLvl', value);
    },
  },
})
