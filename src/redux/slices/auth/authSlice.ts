import {createSlice} from '@reduxjs/toolkit';
import {loginAsync, signupAsync} from './authThunks';
import {isPendingAction, isRejectedAction} from '../utils';

type InitialState = {
  loading: boolean;
  isLoggedIn: boolean;
  error: string | null | undefined;
};

const initialState: InitialState = {
  loading: false,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAsync.fulfilled, state => {
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(signupAsync.fulfilled, state => {
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addMatcher(isPendingAction, state => {
        state.loading = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.loading = false;
        state.error = action.error as string;
      });
  },
});

export default authSlice.reducer;
