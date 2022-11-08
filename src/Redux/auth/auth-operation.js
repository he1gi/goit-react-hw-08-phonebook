import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginUser,
  registerNewUser,
  logoutUser,
  fetchCurrentUser,
} from '../../Api/api';
import { token } from '../../Api/api';

export const authRegister = createAsyncThunk(
  'auth/register',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await registerNewUser(userCredentials);
      token.set(response.token);
      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await loginUser(userCredentials);
      token.set(response.token);

      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await logoutUser(token);
      token.unset();
      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);

export const authGetCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    const currentToken = getState().auth.token;
    try {
      if (!currentToken) {
        return rejectWithValue();
      }
      token.set(currentToken);
      const response = await fetchCurrentUser(currentToken);
      return response;
    } catch (error) {
      token.unset();
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);
