<template>
  <h1>{{ msg }}</h1>
  <button @click="inCrement"> count is: </button>
  <button @click="updateWelcome"> update welcome </button>
  <p>{{ count }}</p>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../store'

  export default defineComponent({
    name: 'HelloWorld',
    setup() {
      const store = useStore(key)
      const count = computed(() => store.state.count)
      const msg = computed(() => store.state.msg)
      return {
        msg,
        count,
        inCrement: () => store.commit('increment'),
        updateWelcome: () => store.commit('updateWelcome')
      }
    }
  })
</script>
