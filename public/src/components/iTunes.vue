<template>
    <div class="iTunes">
        <div class="row">
            <div class="col-sm-4 col-sm-offset-1">
                <img src="https://www.builtlean.com/wp-content/uploads/2012/08/best-workout-playlist.jpg" alt="">
                <h1>Search iTunes</h1>
                <form @submit.prevent="getMusicByArtist">
                    <input type="text" placeholder="Artist Name" v-model="artist">
                    <button type="submit">Submit</button>
                </form>
                <div class="col-sm-12 songs" v-for="song in songs">
                    <h4>{{song.trackName}}</h4>
                    <h4>{{song.artistName}}</h4>
                    <audio controls>
                        <source :src="song.previewUrl">
                    </audio>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'iTunes',
        data() {
            return {
                artist: ""
            }
        },
        methods: {
            //functions
            getMusicByArtist() {
                this.$store.dispatch('getMusicByArtist', this.artist)
            }
        },
        computed: {
            //where you put items you need to access from the store
            songs() {
                return this.$store.state.results
            }
        }
    }
</script>

<style>
    .songs{
        padding-top: 1px;
        padding-bottom: 1px;
        outline: solid black 1px;
    }
</style>