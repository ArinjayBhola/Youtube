import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import channelDataSlice from "./channelDataSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    videoData: channelDataSlice,
    chat: chatSlice,
  },
});

export default appStore;
