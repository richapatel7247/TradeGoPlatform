import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const signup = createAsyncThunk('/signup', async (formData, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:8000/signup', formData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const initialState = {
    user: null,
    status: 'idle',
    error: null

//     user : [] {
// }]
}

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {

     logout(state) {
      state.username = null;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuth = true;
        state.username = action.payload.username; // adjust if your API returns a different envelope
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.isAuth = false;
      });
  //  addUser : (state, action) => {
  //   state.username = action.payload.username;
  //   state.email = action.payload.email;
  //   state.password = action.payload.password;
  //   state.isauth = true;
  //  },
  },
});

export const { addUser } = signupSlice.actions;

export default signupSlice.reducer;