<template>
  <header>
    <h1> {{title}} </h1>
    <nav id="navbar">
      <ul>
        <li><router-link to="/my-vue-app/home-page">Home</router-link></li>
        <li><router-link to="/my-vue-app/your-details">Your Details</router-link></li>
        <li><router-link to="/my-vue-app/Interests">Interests</router-link></li>
        <li><router-link to="/my-vue-app/movies">Movies</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
/* eslint-disable indent */
export default {
   data () {
     return {
      title: 'My First Vue Application'
     }
   }
}
</script>

<style>
 header{
   background: lightskyblue;
   padding-top: 5px;
 }

 header h1 {
   color: slategrey;
   text-align: center;
 }

 #navbar {
   border-bottom: 20px solid black;
   height: 8px;
   font-family: Avenir;
   font-size: 20px;
   margin-bottom: 2em;

 }
 #navbar ul {
   list-style-type: none;
   margin: 0;
   padding: 0;
   overflow: hidden;
   background-color: lightskyblue;
   text-align: center;
   border-top: 5px solid black;
   border-bottom: 5px solid black;
 }

 #navbar li {
   display: inline-block;
   text-align: center;
   padding: 15px 30px 15px 30px;
 }
</style>
