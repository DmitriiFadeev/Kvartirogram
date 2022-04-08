export default {
    state: {
        data: [],
    },
    getters: {
        getData (state) {
            return state.data
        },
    },

    mutations: {
        setData(state, value) {
            let newData = []
            for (let i = 1; i < value.length; i++) {
                let status = ''

                if (value[i][14]) {
                    if(value[i][14] === 'Договор') {
                        status = '115'
                    }
                    if(value[i][14] === 'Бронь') {
                        status = '116'
                    }
                    if(value[i][14] === 'Резерв') {
                        status = '117'
                    }
                    if(value[i][14] === 'Снято с реализации') {
                        status = '118'
                    }
                    if(value[i][14] === 'Передано') {
                        status = '119'
                    }
                    if(value[i][14] === 'Свободно') {
                        status = '120'
                    }
                } else {
                    status = '120'
                }

                const item = {
                    NAME: value[i][16], // Name
                    PROPERTY_539: value[i][0] || '', // ID_KVARTIRY  PROPERTY_539
                    PROPERTY_540: value[i][1] || '', // PODEZD PROPERTY_540
                    PROPERTY_541: value[i][2] || '', // KOMMERTSIYA PROPERTY_541
                    PROPERTY_542: value[i][3] || '', // ETAZH PROPERTY_542
                    PROPERTY_543: value[i][4] || '', // NOMER_KVARTIRY PROPERTY_543
                    PROPERTY_544: value[i][5] || '', // KOLICHESTVO_KOMNAT PROPERTY_544
                    PROPERTY_545: value[i][6] || '', // PLOSHCHAD_OBSHCHAYA PROPERTY_545
                    PROPERTY_546: value[i][7] || '', // PLOSHCHAD_ZHILAYA PROPERTY_546
                    PROPERTY_548: value[i][9] || '', // STOIMOST_OBSHCHAYA PROPERTY_548
                    PROPERTY_550: value[i][11] || '', // STOIMOST_ZA_METR PROPERTY_550
                    PROPERTY_554: status || '', // STATUS PROPERTY_554
                }
                newData.push(item)
            }
            state.data = newData
        }
    },

    actions: {
        setData({commit, dispatch, state}, value) {
            commit('setData', value);
            console.log('state.data', state.data)
            dispatch('setDataServer', state.data)
        }
    }
}
