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
  /* .my-tunes {
    display: inline-block;
    min-height: 500px;
    min-width: 50%;
  }

  .itunes {
    display: inline-block;
    min-height: 500px;
    min-width: 45%;
  } */
</style>