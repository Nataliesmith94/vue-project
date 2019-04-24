yarn r<template>
<footer>
  <p> {{copyright}} </p>
</footer>
</template>

<script>
export default {
  data () {
    return {
      copyright: 'copyright 2018'
    }
  }
}
</script>

<style scoped>

  footer {
    background: #222;
    padding: 6px;
    margin-top: 2em;
  }

  p {
    color: lightskyblue;
    text-align: center;
  }
</style>
