import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user", // this name is just for the sake of debugging in the redux dev-tools
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
