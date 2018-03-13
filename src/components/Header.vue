<template>
  <header>
    <h1> {{title}} </h1>
  </header>
</template>

<script>
  /* eslint-disable indent */

  export default {
    data(){
      return{
        title: 'my first vue application'

      }
    }
  }
</script>

<style>
 header{
   background: lightgreen;
   padding: 10px;
 }

  h1 {
    color: slategrey;
    text-align: center;
  }
</style>
