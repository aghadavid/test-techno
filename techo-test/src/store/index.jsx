import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice.js';
import homeReducer from '@/features/home/homeSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer

  }
});

export default store;