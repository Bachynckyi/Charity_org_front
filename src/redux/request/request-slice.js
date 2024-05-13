import { createSlice } from '@reduxjs/toolkit';
import { requestOrg, requestPrivat } from './request-operations';

const initialState = {
  loading: false,
  error: null,
};

const requestSlice = createSlice({
  name: 'request',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(requestOrg.pending, state => {
        state.loading = true;
      })
      .addCase(requestOrg.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(requestOrg.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(requestPrivat.pending, state => {
        state.loading = true;
      })
      .addCase(requestPrivat.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(requestPrivat.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export default requestSlice.reducer;