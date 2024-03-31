import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './feedback-api';

export const newRequestFeedback = createAsyncThunk(
    'api/feedback/requestfeedback',
    async (data, { rejectWithValue }) => {
      try {
        const result = await api.newRequestFeedback(data);
        return result;
      } catch (error) {
        return rejectWithValue(error.response);
      }
    }
);