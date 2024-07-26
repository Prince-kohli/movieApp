import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  data: [],
};

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    getUrl: (state, action) => {
      state.url = action.payload;
    },
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getUrl, getData } = urlSlice.actions;

export default urlSlice.reducer;
