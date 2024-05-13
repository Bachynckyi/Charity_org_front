import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './partners-api';

export const newRequestPartner = createAsyncThunk(
    'api/partners/requestnewpartner',
    async (data, { rejectWithValue }) => {
      try {
        const result = await api.newRequestPartner(data);
        return result;
      } catch (error) {
        return rejectWithValue(error.response);
      }
    }
);

export const offerPartner = createAsyncThunk(
  'api/partners/offerpartner',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.offerPartner(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);