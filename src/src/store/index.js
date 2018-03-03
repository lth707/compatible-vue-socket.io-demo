import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default (socket) => {
  return new Vuex.Store({
    state: {
      messagelist: []
    },
    actions: {
      emithello ({dispatch, state, commit}, message) {
        commit('MESSAGE', message)
        socket.emit('hello', message)
      },
      socket_hi ({commit}, message) {
        console.log('actions receive')
        console.log(message)
      }
    },
    mutations: {
      MESSAGE (state, message) {
        state.messagelist.push(message)
      },
      // 这里一定要写一个SOCKET_前缀，且必须全部为大写
      SOCKET_HI (state, message) {
        console.log('mutations receive')
        console.log(message)
        state.messagelist.push(message)
      }
    }
  })
}
