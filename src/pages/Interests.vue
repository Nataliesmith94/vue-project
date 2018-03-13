<template>
  <div id="page">
    <h1>{{ msg }}</h1>
    <h2>Please fill in the form</h2>
    <label> Name:</label>
    <input type="text" v-model="name"/>
    <span> {{name}} </span>
  </div>
</template>

<script>
/* eslint-disable indent */
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Interests'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    color: black;
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
