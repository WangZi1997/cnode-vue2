<template>
  <div class="hello">
  <button @click="reverseMessage">点我逆转</button>
  <p>{{message}}</p>
  <input v-model="message">
  <button @click="AddNumber"> + </button>
  <button @click="addNumbers1"> +1s </button>
  <button @click="addNumbers2"> +2s </button>
  
  
  <p>{{number}}</p>
  <p>{{numberMut2}}</p>

  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            show: false,
            todos: [
                { text: '学习 JavaScript' },
                { text: '学习 Vue' },
                { text: '整个牛项目' }
            ],
            message: '123456'
        }
    },
    methods: {
        ...mapMutations(['addNumber']),
        ...mapActions(['addNumbers1']),
        reverseMessage() {
            this.message = this.message
                .split('')
                .reverse()
                .join('')
        },
        AddNumber() {
            this.$store.commit('addNumber')
        },
        addNumbers2() {
            this.$store.dispatch('addNumbers1', { s: 2 })
        }
    },
    computed: {
        ...mapState(['number']),
        ...mapGetters(['numberMut2'])

        // numbers() {
        //     return this.$store.state.number
        // }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
