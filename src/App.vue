<template>
  <main id="app">
    <!--<app-header></app-header>-->
    <!--<app-footer></app-footer>-->

    <!--<div class="header">-->
      <!--<H1> Vue.Js Application </H1>-->
      <!--<nav class="navbar">-->
        <!--<ul>-->
          <!--<li><router-link to="/my-vue-app/home-page">Home</router-link></li>-->
          <!--<li><router-link to="/my-vue-app/your-details">Your Details</router-link></li>-->
          <!--<li><router-link to="/my-vue-app/Interests">Interests</router-link></li>-->
        <!--</ul>-->
      <!--</nav>-->
    <!--</div>-->
    <router-view/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  name: 'App'
}
</script>

<style>
  /*h1{*/
    /*text-align: center;*/
  /*}*/
  /*.navbar {*/
    /*border-bottom: 1px solid darkblue;*/
    /*height: 15px;*/
    /*font-family: Avenir;*/
    /*font-size: 30px;*/
  /*}*/
  /*ul {*/
    /*list-style-type: none;*/
    /*margin: 0;*/
    /*padding: 0;*/
    /*overflow: hidden;*/
    /*background-color: lightskyblue;*/
    /*text-align: center;*/
  /*}*/

  /*li {*/
    /*display: inline-block;*/
    /*text-align: center;*/
    /*padding: 15px 40px 15px 40px;*/
  /*}*/
</style>
<style>
#app {
  font-family: 'Arial', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*background-color: lightskyblue*/
}
</style>
