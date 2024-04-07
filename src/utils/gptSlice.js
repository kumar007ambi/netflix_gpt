import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSeacrh: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSeacrh = !state.showGptSeacrh;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
