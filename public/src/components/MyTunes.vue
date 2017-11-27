<template>
    <div class="MyTunes">
        <div class="row">
            <div class="col-sm-4 col-sm-offset-1">
                <img src="http://www.nycdancenation.com/logo-playlist.jpg" alt="">
                <h1>MyPlaylist</h1>
            </div>
        </div>
        <div class="col-sm-12 songs" v-for="song in songs">
            <h4>Title: {{song.title}}</h4>
            <h4>Artist: {{song.artist}}</h4>
            <audio controls>
                <source :src="song.preview">
            </audio>
            <button @click="remove(song._id)" class="add-btn" type="btn">Remove</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyTunes',
        data() {
            return {

            }
        },
        mounted(){
            this.$store.dispatch('getMyTunes')
        },
        methods: {
            //functions
            remove(song){
                this.$store.dispatch('removeTrack', song)
            }
        },
        computed: {
            //where you put items you need to access from the store
            songs() {
                return this.$store.state.myTunes
            }
        }
    }
</script>

<style>
</style>