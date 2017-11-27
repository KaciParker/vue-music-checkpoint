<template>
    <div class="iTunes">
        <div class="row">
            <div class="col-sm-4 col-sm-offset-1">
                <img src="https://www.builtlean.com/wp-content/uploads/2012/08/best-workout-playlist.jpg" alt="">
                <h1>Search iTunes</h1>
                <form @submit.prevent="searchByArtist">
                    <input type="text" placeholder="Artist Name" v-model="artist">
                    <button class="submit-btn" type="submit">Submit</button>
                </form>
                <div class="col-sm-12 songs" v-for="song in songs">
                    <h4>Title: {{song.trackName}}</h4>
                    <h4>Artist: {{song.artistName}}</h4>
                    <div class="col-sm-4 col-sm-offset-8">
                        <img :src="song.artworkUrl100" alt="">
                    </div>
                    <audio controls>
                        <source :src="song.previewUrl">
                    </audio>
                    <button @click="addToPlaylist(song)" class="add-btn" type="btn">Add to My Playlist</button>
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
            searchByArtist() {
                this.$store.dispatch('getMusicByArtist', this.artist)
            },

            addToPlaylist(song) {
                this.$store.dispatch('addToMyTunes', song)
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
    .songs {
        padding-top: 1px;
        padding-bottom: 1px;
        outline: solid black 1px;
        width: 500px;
    }
    .submit-btn {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    .add-btn {
        margin-bottom: 1rem;
    }
</style>