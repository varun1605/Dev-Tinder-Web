import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer, // this "user", independent of the userSlice, used to access the data in the store, ie , store.user
    feed: feedReducer,
    connection: connectionReducer,
  },
});
export default appStore;
