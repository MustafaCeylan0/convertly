import { createSlice, createSelector } from "@reduxjs/toolkit";

export const MainSlice = createSlice({
  name: "main",
  initialState: {
    selectedFiles: [],
  },
  reducers: {
    setFile: (state, action) => {
      state.selectedFiles = action.payload;
    },
  },
});

export const { setFile } = MainSlice.actions;

const selectMain = (state) => state.main;


export const selectFile = createSelector([selectMain], (main) => main.selectedFiles);

export default MainSlice.reducer;
