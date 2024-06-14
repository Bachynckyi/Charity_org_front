import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, checkUser} from './user-operations';

const initialState = {
  user: {},
  loading: false,
  error: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logIn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.accessToken = payload.accessToken;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.accessToken = null;
      })
      .addCase(logOut.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.accessToken = null;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(checkUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user
        state.accessToken = payload.accessToken;
      })
      .addCase(checkUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.accessToken = null;
      })
  },
});

export default authSlice.reducer;