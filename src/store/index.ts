import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  count: number
  msg: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      count: 0,
      msg: 'hello ts'
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    updateWelcome(state) {
      state.msg += state.count
    }
  }
})
