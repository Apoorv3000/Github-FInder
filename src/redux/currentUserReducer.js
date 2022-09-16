import { createSlice } from "@reduxjs/toolkit";

export const currentUsername = createSlice({
  name: "currentUsername",
  initialState: {
    username: "",
    page: 1,
  },

  reducers: {
    searchUser: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { searchUser } = currentUsername.actions;

export default currentUsername.reducer;
