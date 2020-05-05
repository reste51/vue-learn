/**
 * 测试代码 在 event Bus获取 和 修改的操作
 *
 * 外部组件的操作
 * 获取： this.$store.getters.getParam
 * 更改:  this.$store.commit('updateUser', { name: '路由图', age: 12 })
 */

// 内部存储数据,  外部组件无法直接调用
const state = {
  user: {
    name: '张三',
    age: 21
  },
  param: {
    value: 111,
    kssj: '2012-11-02'
  }
}

// 外部组件获取的方式，默认会接收 state对象供获取
const getters = {
  getUser: state => state.user,
  getParam: state => state.param
}

// 异步的更改操作, ajax 请求后台获取新值时的更改
const actions = {
  fetchNewData: ({ commit, state }) => {
    postMessage('new message' + state.param).then(
      resp => {
        // 由commit 调用 同步更改数据,  mutationsMethod, newParam
        commit('updateUser', resp.user)
        commit('updateParam', resp.param)
      },
      err => {
        console.log(err)
      }
    )
  }
}

// 同步的更改操作
const mutations = {
  updateUser: (state, payload) => (state.user = payload),
  updateParam: (state, payload) => (state.param = payload)
}

// 默认输出四种配置
export default {
  state,
  getters,
  actions,
  mutations
}
