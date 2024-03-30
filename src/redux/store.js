import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import partnersReducer from './partners/partners-slice';

const partnersPersistConfig = {
  key: 'patners',
  storage,
};

export const store = configureStore({
  reducer: {
    partners: persistReducer(partnersPersistConfig, partnersReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);