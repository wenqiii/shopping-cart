import shop from '../../api/shop'
import * as types from '../mutation-types'

const state = {
    added: [],
    checkOutStatus: null
}

const getters = {
    checkOutStatus: state => state.checkOutStatus
}

const actions = {
    checkout ({ commit,state }) {
        // const savedCartItems = [...state.added]
        commit(types.CHECKOUT_SUCCESS)
    }
}

const mutations = {
    [types.ADD_TO_CART] (state,{ id }) {
        const record = state.added.find( p => p.id === id)
        if (!record) {
            state.added.push({
                id: id,
                quantity: 1
            })
        } else {
            record.quantity ++
        }
        console.log(record)
    },
    [types.CHECKOUT_SUCCESS] (state) {
        state.added = []
        state.checkOutStatus = 'successful'
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}