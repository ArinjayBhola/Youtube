import { createSlice } from "@reduxjs/toolkit";

const channelDataSlice = createSlice({
  name: "channelData",
  initialState: {
    channelId: "",
  },
  reducers: {
    addChannelId: (state, action) => {
      state.channelId = action.payload;
    },
    removeChannelId: (state) => {
      state.channelId = "";
    },
  },
});

export default channelDataSlice.reducer;
export const { addChannelId, removeChannelId } = channelDataSlice.actions;
