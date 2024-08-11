import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, checkUser} from './user-operations';

const initialState = {
  user: {},
  P6BkJ2mA: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.P6BkJ2mA = payload.accessToken;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.P6BkJ2mA= null;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {};
        state.P6BkJ2mA = null;
      })
      .addCase(checkUser.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.P6BkJ2mA = payload.accessToken;
      })
      .addCase(checkUser.rejected, (state, { payload }) => {
        state.P6BkJ2mA = null;
      })
  },
});

export default authSlice.reducer;