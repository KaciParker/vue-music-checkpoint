<template>
    <div class="iTunes">
        <div class="row">
            <div class="col-sm-4 col-sm-offset-1">
                <h1 class="title-font">Search iTunes</h1>
                <form @submit.prevent="searchByArtist">
                    <input style="color: black" type="text" placeholder="Artist Name" v-model="artist">
                    <button class="submit-btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
        <div class="row" v-for="song in songs">
            <div class="col-sm-11 col-sm-offset-1 songs well">
                <div class="col-sm-6">
                    <h4>Title: {{song.trackName}}</h4>
                    <h4>Artist: {{song.artistName}}</h4>
                </div>
                <div class="col-sm-4 col-sm-offset-2 artwork">
                    <img :src="song.artworkUrl100">
                </div>
                <div class="col-sm-6">
                    <button @click="addToPlaylist(song)" class="add-btn" type="btn">Add to My Playlist</button>
                </div>
                <div class="col-sm-6">
                    <audio controls style="width: 100%">
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
    .title-font {
        font-family: 'Permanent Marker', cursive;
    }

    .songs {
        padding-top: 5px;
        padding-bottom: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
        outline: solid black 1px;
        width: 500px;
        background-color: black;
    }

    .submit-btn {
        margin-top: 2rem;
        margin-bottom: 2rem;
        color: black;
    }

    .add-btn {
        margin-top: 1rem;
        margin-bottom: 1rem;
        color: black;
    }
    .artwork {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
</style>