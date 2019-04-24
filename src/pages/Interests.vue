<template>
  <div>
    <app-header></app-header>
    <h1> Please let us know what fils you are interested in... </h1>
    <app-footer> </app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-size: 20px;
  }
</style>
