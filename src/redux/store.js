import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import partnersReducer from './partners/partners-slice';
import feedbackReducer from './feedback/feedback-slice';
import requestReducer from './request/request-slice';
import userReducer from './user/user-slice';

const partnersPersistConfig = {
  key: 'partners',
  storage,
};

const feedbackPersistConfig = {
  key: 'feedback',
  storage,
};

const requestPersistConfig = {
  key: 'request',
  storage,
};

const userPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    partners: persistReducer(partnersPersistConfig, partnersReducer),
    feedback: persistReducer(feedbackPersistConfig, feedbackReducer),
    request: persistReducer(requestPersistConfig, requestReducer),
    auth: persistReducer(userPersistConfig, userReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);