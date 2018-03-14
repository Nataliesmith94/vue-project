<template>
  <div>
    <app-header></app-header>
    <app-movies></app-movies>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Movies from '@/components/Movies.vue'


  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-movies': Movies
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
