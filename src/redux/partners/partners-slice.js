import { createSlice } from '@reduxjs/toolkit';
import { newRequestPartner } from './partners-operations';

const initialState = {
  loading: false,
  error: null,
};

const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(newRequestPartner.pending, state => {
        state.loading = true;
      })
      .addCase(newRequestPartner.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(newRequestPartner.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export default partnersSlice.reducer;