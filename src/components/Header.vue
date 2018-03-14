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
    data() {
      return {
        title: 'my first vue application'
      }
    }
  }
</script>

<style>

 header{
   background: lightskyblue;
   padding: 5px 5px 0px 5px;
   border-bottom: black;

 }

 #navbar {
   border-bottom: 20px solid black;
   height: 8px;
   font-family: Avenir;
   font-size: 20px;

 }
 ul {
   list-style-type: none;
   margin: 0;
   padding: 0;
   overflow: hidden;
   background-color: lightskyblue;
   text-align: center;
 }

 li {
   display: inline-block;
   text-align: center;
   padding: 15px 30px 15px 30px;
 }

  h1 {
    color: slategrey;
    text-align: center;
  }
</style>
