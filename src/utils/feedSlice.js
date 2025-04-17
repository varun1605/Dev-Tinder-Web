import { createSlice } from "@reduxjs/toolkit";

const userFeed = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    displayUserFeed: (state, action) => {
      return action.payload;
    },
  },
});

export const { displayUserFeed } = userFeed.actions;
export default userFeed.reducer;
