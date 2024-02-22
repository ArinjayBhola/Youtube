import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    userQuery: "",
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
  },
});

export default appSlice.reducer;
export const { toggleMenu, closeMenu, addUserQuery } = appSlice.actions;
