import Vue from 'vue'
import Vuex from 'vuex'
import BX24 from 'bx24-api'
import upload from "@/store/upload";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: [
      {
        class: 'free',
        text: 'свободно',
        id: '70'
      },
      {
        class: 'reserve',
        text: 'резерв',
        id: '67'
      },
      {
        class: 'booking',
        text: 'бронь',
        id: '66'
      },
      {
        class: 'contract',
        text: 'договор',
        id: '65'
      },
      {
        class: 'transferred',
        text: 'передано',
        id: '69'
      },
      {
        class: 'close',
        text: 'снято с реализации',
        id: '68'
      }
    ],
    currentTabs: '1',
    selectedObj: '',
    selectedObject: null,
    priceStart: null,
    priceEnd: null,
    squareStart: null,
    squareEnd: null,
    filteredItems: false,
    items: [],
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
    activeLvl: 1,
    activeObject: [],
    result: [],
    activeObjectFiltered: [],
    loading: false,
    next: 260388,
    data: [],
    more: false,
  },

  getters: {
    getItem(state){
      let filterData = {}
      if(state.activeLvl) {
        filterData = state.items.filter(item => item.name === state.selectedObj)
        let result = []

        filterData.map(item => {
          for (let i of item.body) {
            let q = {
              entrance: i.entrance,
              apartments: []
            }

            for (let apartments of i.apartments) {
              let qq = apartments.rooms.map(itm => {

                if (state.priceStart && Number(itm.price) <= Number(state.priceStart)) {
                  return {...itm, active: 'disabled'}
                }

                if (state.priceEnd && Number(itm.price) >= Number(state.priceEnd)) {
                  return {...itm, active: 'disabled'}
                }

                if (state.squareStart && Number(itm.square) <= state.squareStart) {
                  return {...itm, active: 'disabled'}
                }

                if (state.squareEnd && Number(itm.square) >= Number(state.squareEnd)) {
                  return {...itm, active: 'disabled'}
                }

                for (let i = 0; i < state.checkboxes.length; i++) {
                  let element = state.checkboxes[i]

                  if (element.lvl === 'все' && element.status) {
                    return itm
                  }

                  if (`${element.lvl} комн.` == itm.col && !element.status) {
                    return {...itm, active: 'disabled'}
                  }
                }
                return itm
              })

              console.log('state.activeLvl', state.activeLvl)
              console.log('apartments.lvl', apartments.lvl)

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

        if(filterData[0]) {
          filterData = {
            name: filterData[0].name,
            body: result
          }
        } else {
          filterData = {
            name: '',
            body: result
          }
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

      let lvlList = [];
      for (let entrance of state.currentItem.body){
        for (let level in entrance.apartments){
          if(!lvlList.includes(level)){
            lvlList.push(level)
          }
        }
      }

      if(state.filteredItems) {
        return lvlList.reverse()
      } else {
        return lvlList
      }
    },
    getFilteredItems(state){
      return state.filteredItems
    },
    getActiveLvl(state){
      return state.activeLvl
    },
    getSelectedObj (state) {
      return state.selectedObj
    },
    getLoading(state) {
      return state.loading
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

    setFilteredItems(state){
      state.filteredItems = false
    },

    setActiveLvl(state, value){
      state.activeLvl = value.target.id
    },

    setItem(state, value) {
      state.items = value
    },
    setSelectedObj(state) {
      for (let y = 0; y < state.activeObject.length; y++) {
        const el = state.activeObject[y]
        if (Object.values(el.PROPERTY_570)[0] === '125') {
          state.activeObjectFiltered.push(el.NAME)
        }
      }

      if (state.activeObjectFiltered.length > 0) {
        state.selectedObj = state.activeObjectFiltered[0]
      } else {
        state.selectedObj = ''
      }
    },

    setPrepareStructure (state, value) {
      let itemsST = []
      for (let i = 0; i < value.length; i++) {
        const item = value[i]
        if(!itemsST.includes(item.NAME) && state.activeObjectFiltered.includes(item.NAME)) {
          itemsST.push(item.NAME)
        }
      }

      let itemsM = itemsST.map(item => {
        let r = {
          name: item,
          body: []
        }
        r.body = []
        value.forEach(item => {
          if(r.name === item.NAME) {
            if(!r.body.includes(Object.values(item.PROPERTY_540)[0])){
              r.body.push(Object.values(item.PROPERTY_540)[0])
            }
          }
        })
        return r
      })

      console.log('itemsM', itemsM)

      let itemsMM = itemsM.map(item => {
        const body = item.body.map(i => {
          const qw = {
            entrance: i,
            apartments: []
          }
          return qw
        })
        return { name: item.name, body: body}
      })

      console.log('itemsMM', itemsMM)

      let itemsMMM = itemsMM.map(item => {
        const body = item.body.map(i => {
          const qw = {
            entrance: i.entrance,
            apartments: []
          }

          value.forEach(ii => {

            const ap = Object.values(ii.PROPERTY_542)[0]

            if (item.name === ii.NAME && i.entrance === Object.values(ii.PROPERTY_540)[0] && !qw.apartments.includes(ap)) {
              qw.apartments.push(ap)
            }
          })
          return qw
        })

        return { name: item.name, body: body}
      })

      console.log('itemsMMM', itemsMMM)

      let itemMMMM = itemsMMM.map(item => {
        const body = item.body.map(i => {
          const apartments = i.apartments.map(i => {
            const ap = {
              lvl: i,
              rooms: []
            }

            return ap
          })

          const qw = {
            entrance: i.entrance,
            apartments: apartments
          }

          return qw
        })
        return { name: item.name, body: body}
      })

      console.log('itemMMMM', itemMMMM)

      let items = itemMMMM.map(item => {
        value.forEach(it => {
          if(item.name === it.NAME) {
            item.body.forEach(i => {
              if (i.entrance === Object.values(it.PROPERTY_540)[0]) {
                i.apartments.forEach(itm => {
                  if(itm.lvl === Object.values(it.PROPERTY_542)[0]) {

                    let status = ''

                    if (it.PROPERTY_554) {
                      if(Object.values(it.PROPERTY_554)[0] === '115') {
                        status = 'contract'
                      }
                      if(Object.values(it.PROPERTY_554)[0] === '116') {
                        status = 'booking'
                      }
                      if(Object.values(it.PROPERTY_554)[0] === '117') {
                        status = 'reserve'
                      }
                      if(Object.values(it.PROPERTY_554)[0] === '118') {
                        status = 'close'
                      }
                      if(Object.values(it.PROPERTY_554)[0] === '119') {
                        status = 'transferred'
                      }
                      if(Object.values(it.PROPERTY_554)[0] === '120') {
                        status = 'free'
                      }
                    } else {
                      status = '120'
                    }

                    const yy = {
                      id: it.ID,
                      number: Object.values(it.PROPERTY_543)[0],
                      square: Object.values(it.PROPERTY_545)[0],
                      col: Object.values(it.PROPERTY_544)[0],
                      houseroom: Object.values(it.PROPERTY_546)[0],
                      summa: Object.values(it.PROPERTY_548)[0],
                      price: Object.values(it.PROPERTY_550)[0],
                      status: status,
                    }
                    itm.rooms.push(yy)
                  }
                })

              }
            })
          }
        })
        return item
      })

      console.log('items', items)

      state.items = items
    },
    setActiveObject (state, value) {
      state.activeObject = value
    },

    setLoading(state, value) {
      state.loading = value
    },

    setMore (state, value) {
      state.more = value
    },

    setData (state, value) {
      console.log('value', value)
      value.forEach(item => {
        state.data.push(item)
      })
    },
    setNext (state, value) {
      state.next += value
    }
  },
  actions: {
    setSortList({ commit, dispatch }, value) {
      commit('setSortList', value);
    },
    setActiveLvl({ commit }, value) {
      commit('setActiveLvl', value);
    },
    async getObject({ commit, dispatch }) {
      const res = await BX24.callMethod('lists.element.get', {
        IBLOCK_TYPE_ID: "lists",
        IBLOCK_ID: 107,
      }).then(data => {
        console.log('setActiveObject', data.answer.result)
        commit('setActiveObject', data.answer.result);
        commit('setSelectedObj', data.answer.result);
      })
      await dispatch('getDataALL')
    },

    async getDataALL({commit, dispatch, state}) {
      const res = await dispatch('getData');

      console.log('res getDataALL', res)

      if (state.more) {
        console.log('11111')
        await dispatch('getData');
      } else {
        console.log('22222')
        console.log('state.data', state.data)
        commit('setPrepareStructure', state.data);
      }
    },

    async getData({ commit, state }) {
      const res = await BX24.callMethod('lists.element.get', {
        IBLOCK_TYPE_ID: "lists",
        IBLOCK_ID: 106,
        FILTER : [{
          '=ID': state.next,
        }],
        start: -1,
      }).then(result => {
        console.log('data', result)
        console.log('state', state)
        if (result.more()) {
          commit('setNext', result.answer.next);
          commit('setData', result.data());
          commit('setMore', true);
          return true
        } else {
          commit('setMore', false);
        }
      })
      return res
    },
    async setDataServer({ commit, state }, value) {
      console.log('state.data', value)
      for (let i = 0; i < value.length; i++ ){
        const res = await BX24.callMethod('lists.element.add', {
          IBLOCK_TYPE_ID: "lists",
          IBLOCK_ID: 106,
          ELEMENT_ID: value[i].PROPERTY_89,
          FIELDS: value[i],
        }).then(data => {
          console.log('data', data.answer.result)
          // commit('setPrepareStructure', data.answer.result);
        })
      }
    },
  },

  modules: {
    upload
  }
})
