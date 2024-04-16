// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import dataReducer from './dataSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    data1: dataReducer,
  },
});

export default store;
