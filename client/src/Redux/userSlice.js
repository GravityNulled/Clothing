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
    loginuser: (state, action) => {
      state.user = action.payload;
      state.isSigning = false;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginStart, isError, loginuser, logout } = userSlice.actions;
export default userSlice.reducer;
