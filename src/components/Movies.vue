<template>
  <div id="movies">
    <ul>
      <li v-for= "movie in Movies" v-on:click = "movie.show = !movie.show">
      <h2> {{movie.film}}</h2>
        <h3 v-show="movie.show">{{ movie.Genres }} </h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Movies: [
        {film: 'Harry Potter', Genres: 'Fiction', show: false},
        {film: 'Jaws', Genres: 'Horror', show: false},
        {film: 'Frozen', Genres: 'Animation', show: false},
        {film: 'The Note Book', Genres: 'Romance', show: false},
        {film: 'Fast and the Furious', Genres: 'Action', show: false},
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
