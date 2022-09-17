import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { githubApi } from "../services/githubApi";
import currentUserReducer from "./currentUserReducer";

const persistConfig = {
  key: "root",
  version: "1",
  storage,
};

const rootReducer = combineReducers({
  [githubApi.reducerPath]: githubApi.reducer,
  currentUser: currentUserReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER, PURGE],
      },
    }),
});

export const persistor = persistStore(store);
