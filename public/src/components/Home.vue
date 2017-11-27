<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="row">
      <div class="col-sm-6">

        <iTunes class="itunes"></iTunes>
      </div>
      <div class="col-sm-6">
        <my-tunes class="my-tunes"></my-tunes>
      </div>
    </div>
  </div>
</template>

<script>
  import MyTunes from './MyTunes'
  import iTunes from './iTunes'

  export default {
    name: 'home',
    data() {
      return {

      }
    },
    components: {
      MyTunes,
      iTunes
    }
  }
</script>


<style>
  .home {
    /* background: url(https://webdesignerdepot.s3.amazonaws.com/default-images/14.jpg) no-repeat center center fixed; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  font-family: 'Patua One', cursive;
  }
</style>