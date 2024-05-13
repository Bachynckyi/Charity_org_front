import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './request-api';

export const requestOrg = createAsyncThunk(
    'api/helprequest/organization',
    async (data, { rejectWithValue }) => {
      try {
        const result = await api.requestOrg(data);
        return result;
      } catch (error) {
        return rejectWithValue(error.response);
      }
    }
);

export const requestPrivat = createAsyncThunk(
  'api/helprequest/privat',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.requestPrivat(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);