import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "../store/UrlSlice";
export const store = configureStore({
  reducer: {
    url: urlReducer,
  },
});
