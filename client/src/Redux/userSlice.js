import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isSigning: false,
  isError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isSigning = true;
    },
    isError: (state) => {
      state.isSigning = false;
      state.isError = true;
    },
    user: (state, action) => {
      state.user = action.payload;
      state.isSigning = false;
    },
  },
});

const { loginStart, isError, user } = userSlice.actions;
export default userSlice.reducer;
