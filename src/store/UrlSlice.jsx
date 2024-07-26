import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
};

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    getUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { getUrl } = urlSlice.actions;

export default urlSlice.reducer;
