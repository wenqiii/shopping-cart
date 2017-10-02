import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)
// 唯一状态树
export default new Vuex.Store({
    actions,
    getters,
    modules: {
        products,
        cart
    }
})