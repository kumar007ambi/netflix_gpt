import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSeacrh: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSeacrh = !state.showGptSeacrh;
    },
    addGptSuggestMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptSuggestMovieResult } =
  gptSlice.actions;
export default gptSlice.reducer;
