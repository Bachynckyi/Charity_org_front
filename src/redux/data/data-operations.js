import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './data-api';
import Notiflix from 'notiflix';

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
      Notiflix.Notify.success('Оновлено успішно', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return result;
      
    } 
    catch (error) {
      Notiflix.Notify.failure('Не вдалось відправити запит', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return rejectWithValue(error.response.request.status);
    }
  }
);

export const getAchievements = createAsyncThunk(
  'api/user/achievements',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getAchievements();
      return result;
    } 
    catch (error) {
      return rejectWithValue(error.response.request.status);
    }
  }
);

export const editAchievements = createAsyncThunk(
  'api/user/acievements/edit',
  async ({token, request}, { rejectWithValue }) => {
    try {
      const result = await api.editAchievements({token, request});
      Notiflix.Notify.success('Оновлено успішно', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return result;
      
    } 
    catch (error) {
      Notiflix.Notify.failure('Не вдалось відправити запит', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return rejectWithValue(error.response.request.status);
    }
  }
);
  