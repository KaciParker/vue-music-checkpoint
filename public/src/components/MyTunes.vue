<template>
    <div class="MyTunes">
        <div class="row">
            <div class="col-sm-4 col-sm-offset-4 title-font">
                <h1>MyPlaylist</h1>
            </div>
        </div>
        <div class="row" v-for="song in songs">
            <div class="col-sm-8 col-sm-offset-3 my-songs well">
                <div class="col-sm-6">
                    <h4>Title: {{song.title}}</h4>
                    <h4>Artist: {{song.artist}}</h4>
                </div>
                <div class="col-sm-2">
                    <button @click="promote(song)" type="button" class="btn btn-default btn-sm add-btn pull-right">
                        <span class="glyphicon glyphicon-circle-arrow-up"></span>
                    </button>
                </div>
                <div class="col-sm-2 text-center">
                    <h4>{{song.vote}}</h4>
                </div>
                <div class="col-sm-2">
                    <button @click="demote(song)" type="button" class="btn btn-default btn-sm add-btn pull-right">
                        <span class="glyphicon glyphicon-circle-arrow-down"></span>
                    </button>
                </div>
                <div class="col-sm-10">
                    <audio controls style="width: 50%">
                        <source :src="song.preview">
                    </audio>
                </div>
                <div class="col-sm-2">
                    <button @click="remove(song._id)" type="button" class="btn btn-default btn-sm add-btn pull-right">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                </div>
            </div>
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
        mounted() {
            this.$store.dispatch('getMyTunes')
        },
        methods: {
            //functions
            remove(song) {
                this.$store.dispatch('removeTrack', song)
            },
            promote(song) {
                song.vote++
                this.$store.dispatch('promoteTrack', song)
            },
            demote(song) {
                song.vote--
                this.$store.dispatch('demoteTrack', song)
            }
        },
        computed: {
            //where you put items you need to access from the store
            songs() {
                return this.$store.state.myTunes.sort(function (a, b) { return b.vote - a.vote })
            }
        }
    }
</script>

<style>
    .title-font {
        font-family: 'Permanent Marker', cursive;
    }

    .my-songs {
        padding-top: 5px;
        padding-bottom: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
        outline: solid black 1px;
        background-color: black;
    }
</style>