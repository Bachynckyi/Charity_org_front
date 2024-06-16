import { createSlice } from '@reduxjs/toolkit';
import { getMonoLink, editMonoLink, getAchievements, editAchievements } from './data-operations';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getMonoLink.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMonoLink.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getMonoLink.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(editMonoLink.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editMonoLink.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(editMonoLink.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getAchievements.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAchievements.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getAchievements.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(editAchievements.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editAchievements.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(editAchievements.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export default dataSlice.reducer;