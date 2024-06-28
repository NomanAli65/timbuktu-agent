import authActions from './authActions';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const loginAsync = createAsyncThunk(authActions.LOGIN, (_, thunk) => {
  return true;
});

export const registerAsync = createAsyncThunk(authActions.REGISTER, () => {
  return true;
});

export const forgotPasswordAsync = createAsyncThunk(
  authActions.FORGOT_PASSWORD,
  () => {},
);
export const changePasswordAsync = createAsyncThunk(
  authActions.CHANGE_PASSWORD,
  () => {},
);
