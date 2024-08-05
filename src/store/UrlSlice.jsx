import { createSlice } from "@reduxjs/toolkit";

const url = () => {
  let newurl = localStorage.getItem("url");
  if (newurl == {}) {
    return [];
  } else {
    return JSON.parse(newurl);
  }
};
const data = () => {
  let newdata = localStorage.getItem("getData");
  if (newdata == {}) {
    return [];
  } else {
    return JSON.parse(newdata);
  }
};
const more = () => {
  let newmore = localStorage.getItem("getMore");
  if (newmore == {}) {
    return [];
  } else {
    return JSON.parse(newmore);
  }
};

const initialState = {
  url: url(),
  data: data(),
  more: more(),
};

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    getUrl: (state, action) => {
      state.url = action.payload;
      localStorage.setItem("url", JSON.stringify(action.payload));
    },

    getData: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("getData", JSON.stringify(action.payload));
    },
    getMore: (state, action) => {
      state.more = action.payload;
      localStorage.setItem("getMore", JSON.stringify(action.payload));
    },
  },
});

export const { getUrl, getData, getMore } = urlSlice.actions;

export default urlSlice.reducer;
