import { configureStore } from "@reduxjs/toolkit";

import { githubApi } from "../services/githubApi";
import currentUserReducer from "./currentUserReducer";

export default configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    currentUser: currentUserReducer,
  },
});
