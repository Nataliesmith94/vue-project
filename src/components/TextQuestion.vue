<template>
<li class = "rowQuestion">
  <div v-if="label" class="column">

  </div>
  <p>
    <input type="text" v-model="firstName" placeholder="enter Name"/>
  </p>
</li>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
      }
    }
  }
</script>

<style>
  input[type="text"] {
    padding: 16px 10px 17px;
    font-weight: 600;
    font-size: 16px;
    line-height: 1;
    border-radius: 5px;
    box-shadow: rgb(198, 202, 204) 0px 2px 0px 0px inset;
    box-sizing: border-box;
    background-color: rgb(235, 240, 242);
    display: block;
    color: rgb(43, 49, 51);
    width: 100%;
    height: 50px;
    transition: all 0.2s ease-in-out;
    margin-bottom: 10px;
  }


  .error-input input:placeholder-shown {
    color: rgb(200, 28, 36);
  }

</style>
