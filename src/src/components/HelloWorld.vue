<template>
  <div class="hello">
    <div>
      <ul>
         <li v-for='(item, index) in messagelist()' :key='index'>{{item}}</li>
      </ul>
      <textarea v-model='textareaMessage'></textarea>
    </div>
    <button @click='send'>发送消息</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      textareaMessage: ''
    }
  },
  methods: {
    ...mapState(['messagelist']),
    ...mapActions(['emithello']),
    send () {
      this.emithello(`你说：${this.textareaMessage}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
