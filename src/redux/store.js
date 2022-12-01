import { configureStore } from "@reduxjs/toolkit";
import { postReduser } from "./slices/posts";

const store = configureStore({
  reducer: {
    posts: postReduser,
  },
});
export default store;
