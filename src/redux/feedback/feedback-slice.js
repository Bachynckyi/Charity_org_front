import { createSlice } from '@reduxjs/toolkit';
import { newRequestFeedback } from './feedback-operations';

const initialState = {
  loading: false,
  error: null,
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(newRequestFeedback.pending, state => {
        state.loading = true;
      })
      .addCase(newRequestFeedback.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(newRequestFeedback.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export default feedbackSlice.reducer;