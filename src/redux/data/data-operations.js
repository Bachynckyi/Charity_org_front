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
  'api/user/achievements/edit',
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

export const getAllPhotoSlider = createAsyncThunk(
  'api/user/getallphotoslider',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getAllPhotoSlider();
      return result;
    } 
    catch (error) {
      return rejectWithValue(error.response.request.status);
    }
  }
);

export const addPhotoSlider = createAsyncThunk(
  'api/user/addphotoslider',
  async ({token, request}, { rejectWithValue }) => {
    try {
      const result = await api.addPhotoSlider({token, request});
      Notiflix.Notify.success('Оновлено успішно', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return result;
    } 
    catch (error) {
      Notiflix.Notify.failure('Не вдалось відправити запит', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return rejectWithValue(error.response.request.status);
    }
  }
);

export const deletePhotoSlider = createAsyncThunk(
  'api/user/deletephotoslider',
  async ({token, id}, { rejectWithValue }) => {
    try {
      const result = await api.deletePhotoSlider({token, id});
      Notiflix.Notify.success('Оновлено успішно', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return result;
    } 
    catch (error) {
      Notiflix.Notify.failure('Не вдалось відправити запит', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return rejectWithValue(error.response.request.status);
    }
  }
);

export const addNews = createAsyncThunk(
  'api/user/addnews',
  async ({token, request}, { rejectWithValue }) => {
    try {
      const result = await api.addNews({token, request});
      Notiflix.Notify.success('Оновлено успішно', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return result;
    } 
    catch (error) {
      Notiflix.Notify.failure('Не вдалось відправити запит', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return rejectWithValue(error.response.request.status);
    }
  }
);

export const getLastNews = createAsyncThunk(
  'api/user/getlastnews',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getLastNews();
      return result;
    } 
    catch (error) {
      return rejectWithValue(error.response.request.status);
    }
  }
);

export const getNewsById = createAsyncThunk(
  'api/user/getnewsbyid',
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.getNewsById(id);
      return result;
    } 
    catch (error) {
      return rejectWithValue(error.response.request.status);
    }
  }
);

export const getNews = createAsyncThunk(
  'api/user/getnews',
  async (skip, { rejectWithValue }) => {
    try {
      const result = await api.getNews(skip);
      return result
    } 
    catch (error) {
      return rejectWithValue(error.response.request.status);
    }
  }
);

export const deleteNewsById = createAsyncThunk(
  'api/user/deletenewsbyid',
  async ({token, id}, { rejectWithValue }) => {
    try {
      const result = await api.deleteNewsById({token, id});
      Notiflix.Notify.success('Оновлено успішно', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return result
    } 
    catch (error) {
      Notiflix.Notify.failure('Не вдалось відправити запит', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return rejectWithValue(error.response.request.status);
    }
  }
);

export const editNewsByIdWithImage = createAsyncThunk(
  'api/user/editnewsbyidwithimage',
  async ({token, id, request}, { rejectWithValue }) => {
    try {
      const result = await api.editNewsByIdWithImage({token, id, request});
      Notiflix.Notify.success('Оновлено успішно', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return result
    } 
    catch (error) {
      Notiflix.Notify.failure('Не вдалось відправити запит', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return rejectWithValue(error.response.request.status);
    }
  }
);

export const editNewsByIdWithoutImage = createAsyncThunk(
  'api/user/editnewsbyidwithoutimage',
  async ({token, id, request}, { rejectWithValue }) => {
    try {
      const result = await api.editNewsByIdWithoutImage({token, id, request});
      Notiflix.Notify.success('Оновлено успішно', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return result
    } 
    catch (error) {
      Notiflix.Notify.failure('Не вдалось відправити запит', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      return rejectWithValue(error.response.request.status);
    }
  }
);
