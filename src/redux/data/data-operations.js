import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './data-api';

export const getMonoLink = createAsyncThunk(
    'api/user/mono',
    async (_, { rejectWithValue }) => {
      try {
        const result = await api.getMonoLink();
        return result;
      } 
      catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
);

export const editMonoLink = createAsyncThunk(
  'api/user/mono/edit-link',
  async ({token, request}, { rejectWithValue }) => {
    try {
      const result = await api.editMonoLink({token, request});
      return result;
    } 
    catch (error) {
      return rejectWithValue(error.response.request.status);
    }
  }
);
  