<template>
  <div id="movies">
    <ul>
      <li v-for="movie in Movies" :key="movie.id" v-on:click="movie.show = !movie.show" >
      <h2> {{movie.film}}</h2>
        <h3 v-show="movie.show">{{ movie.Genres }} </h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Movies: [
        {film: 'Fiction', Genres: 'Harry Potter', show: false},
        {film: 'Horror', Genres: 'Jaws', show: false},
        {film: 'Animation', Genres: 'Frozen', show: false},
        {film: 'Romance', Genres: 'The Note Book', show: false},
        {film: 'Action', Genres: 'Fast and the Furious', show: false}
      ]
    }
  }
}
</script>

<style scoped>
#movies {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;

  }
</style>
