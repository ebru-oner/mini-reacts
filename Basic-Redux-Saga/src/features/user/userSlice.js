import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false, user: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loading = true;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFail: (state, action) => {
      state.isAuthenticated = false;
      loading = false;
    },
  },
});

export const { login, logout, loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;
