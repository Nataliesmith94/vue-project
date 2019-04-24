<template>
  <div>
    <app-header></app-header>
    <app-footer></app-footer>
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

</style>
