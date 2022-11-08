import { createSlice } from '@reduxjs/toolkit';
import {
  authRegister,
  authLogin,
  authLogout,
  authGetCurrentUser,
} from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: null,
  isFetchingCurrentUser: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isError = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authRegister.pending]: handlePending,
    [authRegister.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authRegister.rejected]: handleRejected,
    [authLogin.pending]: handlePending,
    [authLogin.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authLogin.rejected]: handleRejected,
    [authLogout.pending]: handlePending,
    [authLogout.fulfilled]: state => {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isError = null;
      state.isFetchingCurrentUser = false;
    },
    [authLogout.rejected]: handleRejected,
    [authGetCurrentUser.pending]: state => {
      handlePending(state);
      state.isFetchingCurrentUser = true;
    },
    [authGetCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.isLoading = false;
    },
    [authGetCurrentUser.rejected]: (state, { payload }) => {
      handleRejected(state, { payload });
      state.isFetchingCurrentUser = false;
    },
  },
});

const { reducer: authReducer } = authSlice;
export default authReducer;
