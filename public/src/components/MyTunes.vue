<template>
    <div class="MyTunes">
        <div class="row">
            <div class="col-sm-4 col-sm-offset-2 title-font">
                <h1>MyPlaylist</h1>
            </div>
        </div>
        <div class="col-sm-12 songs well" v-for="song in songs">
            <h4>Title: {{song.title}}</h4>
            <h4>Artist: {{song.artist}}</h4>
            <div class="col-sm-2 col-sm-offset-10">
                <button @click="promote(song)" type="button" class="btn btn-default btn-sm add-btn pull-right">
                    <span class="glyphicon glyphicon-circle-arrow-up"></span>
                </button>
            </div>
            <div class="col-sm-2 col-sm-offset-10 text-center">
                    <h4>{{song.vote}}</h4>
                </div>
            <div class="col-sm-2 col-sm-offset-10">
                <button @click="demote(song)" type="button" class="btn btn-default btn-sm add-btn pull-right">
                    <span class="glyphicon glyphicon-circle-arrow-up"></span>
                </button>
            </div>
            <div class="col-sm-2 col-sm-offset-10">
                <button @click="remove(song._id)" type="button" class="btn btn-default btn-sm add-btn pull-right">
                    <span class="glyphicon glyphicon-trash"></span>
                </button>
            </div>
            <div class="col-sm-12">
                <audio controls>
                    <source :src="song.preview">
                </audio>
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
</style>