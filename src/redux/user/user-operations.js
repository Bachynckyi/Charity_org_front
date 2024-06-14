import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './user-api';

export const logIn = createAsyncThunk(
    'api/user/login',
    async (data, { rejectWithValue }) => {
      try {
        const result = await api.logIn(data);
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
);

export const logOut = createAsyncThunk(
  'api/user/logout',
  async (token, { rejectWithValue }) => {
    try {
      const result= await api.logOut(token);
      return result;
    } catch (error) {
      return rejectWithValue(error.response.request.status);
    }
  }
);

export const checkUser = createAsyncThunk(
  'api/user/refresh',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.checkUser();
      return result;
    } catch (error) {
      return rejectWithValue(error.response.request.status);
    }
  }
);


  