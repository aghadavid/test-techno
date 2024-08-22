import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice.js';
import homeReducer from '@/features/home/homeSlice.js';
import menuReducer from '@/features/menu/menuSlice.js';
import navbarReducer from '@/features/navbar';

const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    menu: menuReducer,
    navbar: navbarReducer,
  }
});

export default store;