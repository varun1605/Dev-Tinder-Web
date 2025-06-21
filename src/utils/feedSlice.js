import { createSlice } from "@reduxjs/toolkit";

const userFeed = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    displayUserFeed: (state, action) => {
      return action.payload;
    },
    removeUserFeed: (state, action) => {
      const newFeed = state.filter((user) => user._id !== action.payload);
      return newFeed;
    },
  },
});

export const { displayUserFeed, removeUserFeed } = userFeed.actions;
export default userFeed.reducer;
