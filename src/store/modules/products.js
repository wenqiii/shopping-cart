import shop from '../../api/shop'
import * as types from '../mutation-types'      //* 都要，取一个别名 types
const state = {
    all: []
}
const getters = {
    allProducts: state => state.all
}
const actions = {
    // api 的请求，state.all 填充
    getAllProducts ({ commit }) {
        shop.getProducts(products => {
            console.log(products)
            // this.state.all = products 不能这样
            commit(types.RECEIVE_PRODUCTS,{products})
        })
    }
}
const mutations = {
    // 构建了一个方法
    [types.RECEIVE_PRODUCTS] (state,{ products }) {
        state.all = products
    },
    [types.ADD_TO_CART] (state,{id}) {
        state.all.find(p => p.id === id).inventory--
    }
}
export default {
    // 自我循环 Store 是独立的一个系统
    state,      //状态
    getters,    //获取
    actions,    //动作 为组件的事件买单,一般用来处理api，提交修改的申请 -> mutation
    mutations   //定义一些对状态的修改
}