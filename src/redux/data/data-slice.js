import { createSlice } from '@reduxjs/toolkit';
import { getMonoLink, 
         editMonoLink, 
         getAchievements, 
         editAchievements, 
         getAllPhotoSlider, 
         addPhotoSlider, 
         deletePhotoSlider} from './data-operations';

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
      .addCase(getAllPhotoSlider.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPhotoSlider.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getAllPhotoSlider.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addPhotoSlider.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPhotoSlider.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(addPhotoSlider.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deletePhotoSlider.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePhotoSlider.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(deletePhotoSlider.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export default dataSlice.reducer;