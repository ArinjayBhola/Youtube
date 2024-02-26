import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    userQuery: "",
    suggestedVideo: [],
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    addUserQuery: (state, action) => {
      state.userQuery = action.payload;
    },
    addVideo: (state, action) => {
      state.suggestedVideo = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { toggleMenu, closeMenu, addUserQuery, addVideo } = appSlice.actions;
