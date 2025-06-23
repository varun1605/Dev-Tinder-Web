import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import requestReducer from "./requestSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer, // this "user", independent of the userSlice, used to access the data in the store, ie , store.user
    feed: feedReducer,
    connection: connectionReducer,
    request: requestReducer,
  },
});
export default appStore;
