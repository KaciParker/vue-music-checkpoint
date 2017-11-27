import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  mutations: {
    setResults(state, results) {
      state.results = results
      // console.log(results)
    },
    // addSong(state, data) {
    //   state.myTunes.push(data)
    //   console.log(myTunes)
    // },
    getPlaylist(state, data) {
      state.myTunes = data
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.getJSON(apiUrl).then(data => {
        commit('setResults', data.results)
      })
    },
    getMyTunes({ commit, dispatch }) {
      //this should send a get request to your server to return the list of saved tunes
      var url = '//localhost:3000/songs'
      $.get(url).then(data => {
        console.log(data)
        commit('getPlaylist', data)
      })
    },
    addToMyTunes({ commit, dispatch }, song) {
      //this will post to your server adding a new track to your tunes
      var url = '//localhost:3000/songs';
      var formattedSong = {
        title: song.trackName,
        artist: song.artistName,
        album: song.collectionName,
        preview: song.previewUrl,
        playlistId: 1
      }
      $.post(url, formattedSong)
        .then(data => {
          // commit('addSong', data)
          store.dispatch('getMyTunes')
        })
    },
    removeTrack({ commit, dispatch }, song) {
      //Removes track from the database with delete
      var url = '//localhost:3000/songs/' + song;
      $.ajax({
        method: 'DELETE',
        url: url,
      })
        .then(data => {
          // commit('deleteSong', data)
          store.dispatch('getMyTunes')
        })
    },
    promoteTrack({ commit, dispatch }, track) {
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({ commit, dispatch }, track) {
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})


export default store
