import { configureStore } from '@reduxjs/toolkit';
import User from "../features/user.js/UserSlice";

export const store = configureStore({
  reducer:{
    user : User,
  }
});
