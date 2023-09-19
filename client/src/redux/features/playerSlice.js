import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},  
  genreListId: '',
  userCountry: ""
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
          
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.songIndex,
      state.isActive = true;
      
      document.title =  `${ document.title } — ${state?.activeSong?.title || state?.activeSong?.heading?.title || "Song" }`
    },

    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
       //focus next SongCard
     document.getElementById(state.activeSong.key).scrollIntoView({ behavior: "smooth" })
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
     //focus previous SongCard
     document.getElementById(state.activeSong.key).scrollIntoView({ behavior: "smooth" })
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
    setUserCountry: (state, action) => {
      state.userCountry = action.payload;
    },
  },
});

export const { 
    setActiveSong, 
    nextSong, 
    prevSong, 
    playPause, 
    selectGenreListId,
    setUserCountry
    } = playerSlice.actions;

export default playerSlice.reducer;
