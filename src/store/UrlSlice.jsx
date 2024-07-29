import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  data: [],
  more: [],
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
    getMore: (state, action) => {
      state.more = action.payload;
    },
  },
});

export const { getUrl, getData, getMore } = urlSlice.actions;

export default urlSlice.reducer;
